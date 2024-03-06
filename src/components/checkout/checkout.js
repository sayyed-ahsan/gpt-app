import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import utils from "intl-tel-input/build/js/utils";
import "tailwindcss/tailwind.css";
import "intl-tel-input";
import Loading from "./Loading";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [amount, setAmount] = useState(27);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const phoneInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    county: "",
  });
  const [errors, setErrors] = useState({});

  const [country, setCountry] = useState('');
  function getCountryName(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(data.address.country); // This will log the country name
      })
      .catch(error => console.error('Error:', error));
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      getCountryName(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.county) {
      newErrors.county = "County is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const phoneInput = phoneInputRef.current;

    const iti = intlTelInput(phoneInput, {
      utilsScript: utils,
    });

    iti.promise.then(() => {
      const countryCode = iti.getSelectedCountryData().iso2;
      iti.setCountry(countryCode);
    });

    phoneInput.addEventListener("countrychange", function () {
      const countryCode = iti.getSelectedCountryData().iso2;
      console.log("Selected country code:", countryCode);
    });

    return () => {
      iti.destroy();
    };
  }, []);

  useEffect(() => {
    localStorage.clear();
    fetch("https://gpt-sable-eight.vercel.app/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      if (!stripe || !elements || !clientSecret) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log(error);
        setCardError(error?.message);
      } else {
        setCardError("");
      }
      setProcessing(true);
      setSuccess("");
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: formData.name,
              email: formData.email,
            },
          },
        });

      if (confirmError) {
        setCardError(confirmError.message);
        return;
      }
      console.log("paymentIntent", paymentIntent);

      if ((paymentIntent.status = "succeeded")) {
        setSuccess(paymentIntent.status);
        console.log("success.....");
        localStorage.setItem("payment", paymentIntent.id);
        sendEmail();
      }
    }
    // ---
  };

  const paypalOptions = {
    "client-id": clientSecret,
    currency: "USD",
  };

  const handlePaypalSuccess = (details, data) => {
    console.log("Transaction completed by: ", details.payer.name.given_name);
    // Handle successful payment with PayPal
  };

  const handleStripeSuccess = (result) => {
    console.error(result, clientSecret, 'invalid service', paypalOptions);
    // Handle successful payment with Stripe
  };

  const sendEmail = async (e) => {
    try {
      const response = await axios.post(
        "https://gpt-sable-eight.vercel.app/sendEmail",
        { ...formData, amount }
      );
      setProcessing(false);
      window.history.pushState(null, null, `/thankyou`);
      window.location.reload();
    } catch (error) {
      setProcessing(false);
    } finally {
      setProcessing(false);
    }
    setProcessing(false);
    window.history.pushState(null, null, `/thankyou`);
    window.location.reload();
  };

  return (
    <div>
      <form
        className="max-w-[690px] mx-auto lg:max-w-full"
        onSubmit={handleSubmit}
      >
        {/* -----1----- */}
        <div className="px-2 max-w-[690px] mx-auto md:px-8 ">
          <p className="text-sm lg:text-base text-[#1571a8] font-bold text-center mb-2">
            Your Contact Information (For Bonuses)...
          </p>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full block lg:max-w-[690px] rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dadada] focus:border-[#dadada]"
              placeholder="Full Name..."
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full lg:max-w-[690px] rounded-md border bg-background px-3 py-2 text-sm placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#dadada] focus:border-[#dadada] disabled:opacity-50"
              placeholder="Email Address..."
            />
          </div>
          <input
            type="text"
            name="number"
            ref={phoneInputRef}
            value={formData.number}
            onChange={handleChange}
            className="block number-felid rounded-md border bg-background px-3 py-2 text-sm placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#dadada] focus:border-[#dadada] disabled:opacity-50"
            placeholder="Phone Number..."
          />
        </div>

        {/* -----2----- */}
        <div className="bg-white px-2 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-[12px] mr-2">
                👆 CONFIRM YOUR DETAILS & GET ACCESS NOW
              </span>
            </div>
            <div className="flex-grow border-t-2 border-gray-200" />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-600">Item</span>
              <div>
                <span className="text-sm font-bold text-gray-600 mr-[55px]">
                  Quantity
                </span>
                <span className="text-sm font-bold text-gray-600">Price</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-b py-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-blue-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-[10px] sm:text-[13px] font-bold">
                  Ultimate ChatGPT Prompt Marketing Toolkits (Special Offer)
                </span>
              </div>
              <span className="text-sm font-medium mx-[20px] text-[10px] sm:text-[13px]">
                1
              </span>
              <span className="text-sm font-bold text-blue-600 text-[10px] sm:text-[13px]">
                $27.00
              </span>
            </div>
          </div>
        </div>
        {/* -----3----- */}
        <div className="m-5">
          <div className="bg-[#fefcbf] rounded-lg pt-6 border-2 border-dotted border-gray-400">
            <div
              className="flex items-start mb-4"
              onClick={() => {
                amount === 39 ? setAmount(27) : setAmount(39);
              }}
            >
              <img
                className="sm:ml-4"
                src="data:image/webp;base64,UklGRsYBAABXRUJQVlA4WAoAAAASAAAAGwAAEAAAQU5JTQYAAAAAAAAAAABBTk1GsgAAAAAAAAAAABsAABAAAA4BAANWUDhMmgAAAC8bAAQQH8GgbSRHx59rL/8/ys/gmH/FbSQ19F8pvxwHBs1/FIG/ppDrB1yyELIAuslyFqb4AEKWNQHOIiSbiaij+ADg3QGyESEADttIUqQ+Zmaeu84/y/v/mY8gov8TgH+eYwt5et+AvCoLck3eJuoOgQWlcQzIPbMgJ4uz0Ls7D2pLBKAefnxejhyqQlJaF2pjCG3ZUuiX+BpBTk1GJgAAAAAAAAAAAAAAAAAAAOYAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcAQU5NRrIAAAAAAAAAAAAbAAAQAABGAAAAVlA4TJoAAAAvGwAEEB/BoG0kR8efay//P8rP4Jh/xW0kNfRfKb8cBwbNfxSBv6aQ6wdcshCyALrJcham+ABCljUBziIkm4moo/gA4N0BshEhAA7bSFKkPmZmnrvOP8v7/5mPIKL/E4B/nmMLeXrfgLwqC3JN3ibqDoEFpXEMyD2zICeLs9C7Ow9qSwSgHn58Xo4cqkJSWhdqYwht2VLol/ga"
                alt=""
              />
              <input type="checkbox" />
              <span className="text-[#009900] text-[13px] sm:text-[16px] ml-1 mt-[-6px] font-bold">
                Add 967 'Personality Prompts' to Create 30 Days Of Amazing
                Contents
              </span>
            </div>
            <div className="bg-[#fbf8e3] p-1 sm:p-3 border-[#ff9900]">
              <p className="text-[13px] sm:text-[16px] mb-2">
                <span className="underline text-[#ff0000] font-bold ">
                  90% OFF (This page only) $12:
                </span>{" "}
                Start writing &amp; automating your content with the 30 Days Of
                Content In 30 Minutes...(Normally $399) The only system built to
                write in your own voice, create, repurpose and scale content
                creation in no time!
              </p>
            </div>
          </div>
        </div>
        {/* ------4---- */}
        <div className="max-w-4xl mx-auto my-4 px-2 sm:px-8">
          <div className="text-[13px] font-bold pb-2">Order Summary</div>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-bold text-left text-[10px] sm:text-[14px]">
                    Fill In Your Email before select Paypal
                  </th>
                  <th className="h-12 align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-bold text-center text-[10px] sm:text-[14px]">
                    Quantity
                  </th>
                  <th className="h-12 align-middle text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 font-bold text-right text-[10px] sm:text-[14px]">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="py-4 align-center text-start  text-[11px] sm:text-[14px]">
                    Ultimate ChatGPT Prompt Marketing Toolkits (Special Offer)
                  </td>
                  <td className="py-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-center text-[#297daf] font-bold">
                    1
                  </td>
                  <td className="py-4  align-middle [&amp;:has([role=checkbox])]:pr-0 text-right text-[#297daf] font-bold">
                    $27.00
                  </td>
                </tr>

                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  {amount === 39 && (
                    <>
                      <td className=" align-middle text-start text-[11px] sm:text-[14px]">
                        Add 967 'Personality Prompts' to Create 30 Days Of
                        Amazing Contents
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-center text-[#297daf] font-bold">
                        1
                      </td>
                      <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right text-[#297daf] font-bold">
                        $12.00
                      </td>
                    </>
                  )}
                </tr>

                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold text-left text-[10px] sm:text-[14px]">
                    Order Subtotal
                  </td>
                  <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
                  <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0 text-[#297daf] font-bold text-right">
                    ${amount}
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold text-left text-[11px] sm:text-[14px]">
                    Order Total
                  </td>
                  <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0"></td>
                  <td className="py-3 align-middle [&amp;:has([role=checkbox])]:pr-0 text-[#297daf] font-bold text-right">
                    ${amount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handlePaypalSuccess(details, data);
                });
              }}
            />
          </PayPalScriptProvider>
          <Elements stripe={stripePromise}>
            <button
              onClick={() => {
                handleStripeSuccess("stripe result")
              }}
            >
              <img
                className="px-2 sm:px-4 w-full sm:max-w-[400px]"
                src="https://i.ibb.co/mXbfBWK/image.png"
                alt="image"
              />
            </button>
          </Elements>
        </div>

        <div className="flex justify-center items-center space-x-4 px-2 sm:px-4">
          <div className="w-full border-t border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="w-full border-t border-gray-300" />
        </div>

        {/* ---- strip ---- */}
        <div className="max-w-4xl mx-auto p-2 sm:p-6">
          <div
            className=" p-3 border-[1px] rounded-[5px] border-gray-200"
            id="payment-card"
            type="submit"
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "green",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                    padding: "10px",
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <select
            class="flex h-11 my-3 w-full bg-white rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-[#dadada] focus:border-[#dadada] focus:ring-[#dadada]"
            id="country"
            type="text"
            name="county"
            value={formData.county}
            onChange={handleChange}
          >
            <option value="">{country ? country : 'Afghanistan'}</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Aland Islands">Aland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire, Sint Eustatius and Saba">
              Bonaire, Sint Eustatius and Saba
            </option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">
              British Indian Ocean Territory
            </option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, Democratic Republic of the Congo">
              Congo, Democratic Republic of the Congo
            </option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'Ivoire">Cote D'Ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curacao">Curacao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">
              Falkland Islands (Malvinas)
            </option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">
              French Southern Territories
            </option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">
              Heard Island and Mcdonald Islands
            </option>
            <option value="Holy See (Vatican City State)">
              Holy See (Vatican City State)
            </option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">
              Iran, Islamic Republic of
            </option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">
              Korea, Democratic People's Republic of
            </option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kosovo">Kosovo</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">
              Lao People's Democratic Republic
            </option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">
              Libyan Arab Jamahiriya
            </option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, the Former Yugoslav Republic of">
              Macedonia, the Former Yugoslav Republic of
            </option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">
              Micronesia, Federated States of
            </option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">
              Northern Mariana Islands
            </option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">
              Palestinian Territory, Occupied
            </option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Barthelemy">Saint Barthelemy</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Martin">Saint Martin</option>
            <option value="Saint Pierre and Miquelon">
              Saint Pierre and Miquelon
            </option>
            <option value="Saint Vincent and the Grenadines">
              Saint Vincent and the Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Serbia and Montenegro">Serbia and Montenegro</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Sint Maarten">Sint Maarten</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and the South Sandwich Islands">
              South Georgia and the South Sandwich Islands
            </option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">
              Svalbard and Jan Mayen
            </option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan, Province of China">
              Taiwan, Province of China
            </option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">
              Tanzania, United Republic of
            </option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">
              United States Minor Outlying Islands
            </option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">
              Virgin Islands, British
            </option>
            <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
          {(errors.name || errors.email || errors.county) && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-red-500 mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <span className="text-red-500 text-[14px]">
                Make sure that you filled all the details!
              </span>
            </div>
          )}
          {cardError && (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-red-500 mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              <span className="text-red-500 text-[14px]">{cardError}</span>
            </div>
          )}
          {processing ? (
            <Loading />
          ) : (
            <button
              className="bg-[#e93d3d] w-full rounded-[10px] my-3 pt-2 pb-4 px-5 cursor-pointer"
              type="submit"
              disabled={!stripe}
            >
              <h1 className="text-[20px] md:text-[34px] text-white font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 inline "
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Get All Prompts to Get Clients
              </h1>
              <p className="text-[13px] text-white">
                No questions asked money back guarantee
              </p>
            </button>
          )}
          <p className="text-[13px] text-[#9c9c9c] text-center">
            * 100% Secure & Safe Payments *
          </p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
