import React from "react";
import CheckoutForm from "./checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  return (
    <div className="px-2">
      <div className=" shadow-lg border max-w-[819px] mx-auto text-center rounded-lg py-4 px-4 my-5">
        {/* -------1---------  */}

        <div>
          <h1 className="text-[24px] text-[#e93d3d] font-bold">
            Limited Time Sale – 90% OFF
          </h1>
          <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65975f4dae13964ddf466f8a.jpeg" alt='' />
        </div>
        {/*--------- payment------------ */}
        <div id="section1" className=" shadow-lg border max-w-[693px] mx-auto text-center rounded-lg py-4 mt-5">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>{" "}
        </div>

        <h1 className="font-bold mb-3">
          *All prices are in USD Fill In Your Email Before Select Paypal/Credit
          Card
        </h1>

        {/* -------3---------  */}

        <div className="max-w-[819px] mx-auto">
          <img
            className="max-w-[200px] md:max-w-[819px] mx-auto"
            src="https://thefunnelmarketingkit.com/wp-content/uploads/2020/11/safe-checkout-350px-1.png"
            alt='' />
          <h1 className="text-[24px] font-bold py-3">
            60 Days Money Back Guarantee
          </h1>
          <img
            className="max-w-[159px] mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/8193d3cc-eb59-4d90-9906-f95fb0721c44.jpeg"
            alt='' />
        </div>

        <div className="divide-y divide-dashed divide-black max-w-[659px] mx-auto">
          <p className="mb-5">
            No questions asked, 60 day refund guarantee. If you're not totally
            delighted for any reason (or no reason at all) simply let us know
            within 60 days and we'll refund your payment right away.
          </p>
          <h1 className="pt-5 text-[22px] sm:text-[28px] font-bold">
            <span className="text-[#e93d3d] underline">Congratulations!</span>   Here's Everything You're Getting Today For Only
            $197.00   <span className="text-[#e93d3d] underline">$27</span>
          </h1>
        </div>

        <img
          className="max-w-[159px] mx-auto p-5"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/b5b39dfa-3097-4e1e-8612-98a845432271.png"
          alt='' />

        {/* ----------------- */}

        <div className=" max-w-[650px] mx-auto text-left">
          <ul>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                1000+ Sales Funnel Prompts (including copywriting)
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">Facebook™ Ad Prompts</li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold"> Instagram™ Ad Prompts</li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">TikTok™ Ad Prompts</li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">YouTube™ Ad Prompts</li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                2000+ Email Marketing Prompts
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">Ecommerce Prompts</li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">Lead Generation Prompts</li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                Affiliate Marketing Prompts
              </li>
            </div>

            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                1400+ Social Media Marketing Prompts
              </li>
            </div>

            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold"> Business Prompts </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                Influencer Marketing Prompts{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold"> Twitter™ Prompts </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold"> LinkedIn™ Prompts </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold"> SEO Prompts </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                Outreach Message Prompts{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                3600+ Closing Sales Prompts (including closing script){" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                1000+ Landing Page Prompts{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                1000+ Conversion Rate Optimization Prompts{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                2200+ Productivity Prompts (you'll save time on using proven
                ChatGPT prompts){" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                950+ Customer Support Prompts{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                1300+ Product Management Prompts for your most repeated task{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                1000+ Human Resources Prompts{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                Proven tricks to unlock ChatGPT fully{" "}
              </li>
            </div>
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">
                {" "}
                Exact steps + examples to get reliable results & scale{" "}
              </li>
            </div>
          </ul>
        </div>

        {/* ------------- */}
        <div className="max-w-[650px] mx-auto mt-5 px-4 sm:px-6 lg:px-8">
          <h1 className="bg-[#e73904] text-white text-[22px] sm:text-[26px] font-bold px-4 py-2">
            + FAST ACTION BONUSES
          </h1>
          <img
            className="pt-5 mt-5 w-full h-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6583f83bcd21c266f670afcf.png"
            alt='' />
          <img
            className="mt-5 w-full h-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/63fe6ac6c7b139380a42e260.png"
            alt='' />
        </div>

        {/* --------------- */}

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-2 mb-[20px]">
            <h1 className="text-[20px] sm:text-[30px] text-justify sm:max-w-[600px] tracking-[-1px] leading-[30px] mx-auto relative">
              <span className="text-[#e73904] font-bold">
                BONUS - The 'AI MONETIZATION' Blueprint:
              </span>
              <span className="italic">(Finally Revealed) </span> Discover the
              step-by-step ‘AI Monetization’ framework of how our coaches are{" "}
              <span className="font-bold underline">
                earning between $5,000 to $10,000 monthly
              </span>{" "}
              in coaching business!
            </h1>
          </div>
          <img
            className="max-w-[350px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65965c08d7e274e11b1fcd8f.png"
            alt='' />
          <img
            className="mt-5 sm:max-w-[600px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/63fe6ac6c7b139380a42e260.png"
            alt='' />
        </div>

        {/* -- */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-2 mb-5">
            <h1 className="text-[20px] sm:text-[30px] text-start sm:max-w-[600px] tracking-tight sm:leading-[1.2] mx-auto">
              <span className="text-[#e73904] font-bold">
                BONUS - Revolutionary 170+ AI Tools & Templates:
              </span>
              Unlock the
              <span className="underline">
                TRUE Power of A.I. and Done-For-You
              </span>
              Templates that
              <span className="font-bold underline">
                do 90% of the work for you!
              </span>
              Whether you're looking to automate tasks, create images & videos
              with AI, or simply make your life easier, these tools and
              resources have got you covered
              <span className="italic">
                (Increased Output And Quality Of Work At Scale)
              </span>
            </h1>
          </div>
          <img
            className="max-w-[350px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/659657c08619066018ad83b9.png"
            alt='' />
          <img
            className="mt-5 sm:max-w-[600px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/63fe6ac6c7b139380a42e260.png"
            alt='' />
        </div>
        {/* -- */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-2 mb-5">
            <h1 className="text-[20px] sm:text-[30px] text-start sm:max-w-[600px] tracking-tight sm:leading-[1.2] mx-auto">
              <span className="text-[#e73904] font-bold">
                BONUS - 369 SECRET PROMPTS TO EARNING $10,000+ MONTHLY:
              </span>
              How these 30 coaches used the ChatGPT Prompt™ to
              <span className="font-bold underline">
                earn over $10,000 monthly
              </span>
              <span className="italic"> (even at a beginner level!) </span>
            </h1>
          </div>
          <img
            className="max-w-[350px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65964665861906901aad4b61.png"
            alt='' />
          <img
            className="mt-5 sm:max-w-[600px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/63fe6ac6c7b139380a42e260.png"
            alt='' />
        </div>

        {/* -- */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-2 mb-5">
            <h1 className="text-[20px] sm:text-[30px] text-justify max-w-full sm:max-w-[600px] tracking-tight leading-snug mx-auto">
              <span className="text-[#e73904] font-bold">
                BONUS - A.I. HIGH TICKET CLOSING FRAMEWORK:
              </span>
              Using our customized <span className="underline">PROVEN</span>{" "}
              prompts, you can work just a few hours a day and
              <span className="font-bold underline">
                unlock a high income stream
              </span>
              while
              <span className="font-bold underline">
                enjoying a happy and fulfilling life
              </span>
              WITHOUT burning out. No more 24/7 hustle & grind!
            </h1>
          </div>
          <img
            className="max-w-[350px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65965518d7e27419e51fc8d4.png"
            alt='' />
          <img
            className="mt-5 sm:max-w-[600px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/63fe6ac6c7b139380a42e260.png"
            alt='' />
        </div>
        {/* -- */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="py-2 mb-5">
            <h1 className="text-[20px] sm:text-[30px] text-justify max-w-full sm:max-w-[600px] tracking-tight leading-snug mx-auto">
              <span className="text-[#e73904] font-bold">
                BONUS - CHATGPT AUTOMATIC SALES:
              </span>
              Customize ChatGPT to your unique business needs with tailored,
              custom instructions that are optimized for your industry,
              products, and services... allowing you to get optimized results
              and gain a competitive edge.
            </h1>
          </div>
          <img
            className="max-w-[350px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65965772539b6d079abe9b85.png"
            alt='' />
          <img
            className="mt-5 sm:max-w-[600px] w-full h-auto mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/63fe6ac6c7b139380a42e260.png"
            alt='' />
        </div>
        {/* -- */}

        {/* -- */}
        <div>
          <div className="py-2 mb-5 px-4 sm:px-6 lg:px-8">
            <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] text-justify sm:max-w-[540px] lg:max-w-[600px] mx-auto tracking-tight sm:leading-tight lg:leading-[30px]">
              <span className="text-[#e73904] font-bold">
                BONUS - CHATGPT PLUGINS:
              </span>
              Unlock even more possibilities with the best ChatGPT plugins and
              tools to streamline tasks and boost productivity.
            </h1>
          </div>
        </div>

        {/* -------------- */}

        <div className="divide-y divide-black max-w-lg mx-auto px-4 sm:max-w-xl md:max-w-2xl">
          <p className="mb-5 text-[#e73904] text-[20px] sm:text-3xl font-bold pt-5 text-center">
            Master ChatGPT while your competitors are still trying to figure it
            out!
          </p>
          <div className="pt-5 text-center">
            <h1 className="text-[20px] sm:text-3xl">
              Total Value $3,997
              <br />
              <span className="text-base sm:text-lg line-through">
                Retail Value $97
              </span>
            </h1>
          </div>
        </div>

        {/* -------------- */}
        <a href="#section1" class="btn">
          <div className="text-center px-4 py-8">
            <h1 className="text-[20px] md:text-5xl lg:text-6xl font-bold leading-tight">
              Get <span className="underline">Everything</span> For Just:
              <br /> $27
            </h1>

            <button className="mt-6 font-bold text-white bg-[#e74c3c] text-[18px] md:text-3xl px-3 sm:px-10 py-4 rounded-md transition-all hover:bg-[#c0392b] cursor-pointer">
              Get All Prompts + $1600 <br className="hidden md:inline" /> Toolkits
              in Bonuses Today!
            </button>

            <p className="mt-4 text-[17px] sm:text-lg">
              Zero risk with our 60-day money-back guarantee
            </p>
          </div>
        </a>

        {/* -------------- */}
      </div>
      <div className=" bg-[#f3f4f5] p-8 mt-[80px]">
        <p className="text-center">
          Copyright © 2023 - All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Checkout;
