import React from "react";
import Footer from "../core/footer";
import Accordion from "./Accordion";
import OrderSummary from "./OrderSummary";
import StopDabbling from "./StopDabbling";
import BonusSection from "./BonusSection";
import ProductComparison from "./ProductComparison";
import InstantlyUnlock from "./InstantlyUnlock";
import AICoachmaker from "./AICoachmaker";
import Accordion2 from "./Accordion2";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Replace '/your-target-route' with the path you want to navigate to
    navigate("/checkout");
  };
  return (
    <div className="">
      <div className="bg-black text-white font-bold sm:text-[14px] md:text-[20px] lg:text-[25px] text-center py-3">
        🎉 GET 90% OFF TODAY FOR MARCH!
        <br />
        <span className="text-[#39ff14]"> + MORE BONUSES AT CHECKOUT!🎁</span>
      </div>

      <div className="bg-[#e73904] mb-12 sm:mb-20 md:mb-32 lg:mb-50">
        <div className="max-w-[1130px] mx-auto text-center text-white py-4 sm:py-7">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[36px]">
            Here's <span className="underline">everything</span> you need to...
          </h1>

          <h1 className="text-3xl font-semibold leading-tight py-3 sm:text-4xl sm:leading-snug md:text-5xl md:leading-normal lg:text-[56px] lg:leading-[60px]">
            Instantly Unlock{" "}
            <span className="underline">Latest 16,000+ Prompts</span> To Train
            ChatGPT Be Your <b>Personal Digital Intern</b> That{" "}
            <b>Semi-Passively</b> Adds 15-30 Buyers A Day To Your List...
          </h1>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px]">
            Without Ever Spending Hours Trying To Crack Your Offer & Create
            Contents...
          </h1>
          <img
            className="mx-w-full sm:mx-w-[900px] lg:mx-w-[1160px] mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/658415d73489e429f466089c.png"
            alt=""
          />

          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[23px] font-bold italic">
            {" "}
            **YOU CAN <span className="underline">NOT</span> FIND THESE ON
            CHATGPT!
          </h1>

          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[836px] rounded-full mx-auto text-center text-white bg-[#333333] py-2 sm:py-3 md:py-4 mt-3 mb-2">
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold"
              onClick={handleButtonClick}
            >
              Get All Prompts + $1600 in Bonuses today!
            </h1>

            <h2 className="text-sm sm:text-base md:text-lg lg:text-[15px]">
              NO QUESTION ASKED MONEY BACK GUARANTEE
            </h2>
          </div>

          <img
            className="mx-auto max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            src="https://selllikecrazybook.com/wp-content/uploads/2019/10/stock-levels.gif"
            alt=""
          />
        </div>
      </div>

      <div className="mx-4">
        <div className=" shadow-lg border max-w-[819px] mx-auto text-center rounded-[15px]  py-4 my-5">
          <div className="text-center px-4">
            <h1 className="text-8xl  sm:text-[30px] lg:text-[100px]">🔥</h1>
            <h1 className="text-xl sm:text-2xl md:text-[24px] font-bold text-[#e73904]">
              Limited Time Sale – 90% OFF
            </h1>
            <h1
              className="text-2xl sm:text-3xl md:text-[36px] font-bold uppercase mx-auto mt-4 md:mt-6"
              style={{ maxWidth: "644px" }}
            >
              GET The Best{" "}
              <span className="underline text-[#e73904]"> "Done-For-You"</span>{" "}
              AI ChatGPT PROMPTs + Toolkits for Business & experts on the
              Internet!
            </h1>
            <img
              className="max-w-full h-auto mx-auto mt-4 md:mt-6"
              src="https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65965c5c539b6d682bbea643.gif"
              alt=""
            />
          </div>

          <div className=" max-w-[650px] mx-auto text-left px-4">
            <ul>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  1000+ Sales Funnel Prompts (including copywriting)
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">Facebook™ Ad Prompts</li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  Instagram™ Ad Prompts
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">TikTok™ Ad Prompts</li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">YouTube™ Ad Prompts</li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  2000+ Email Marketing Prompts
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">Ecommerce Prompts</li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  Lead Generation Prompts
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  Affiliate Marketing Prompts
                </li>
              </div>

              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  1400+ Social Media Marketing Prompts
                </li>
              </div>

              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold"> Business Prompts </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  Influencer Marketing Prompts{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold"> Twitter™ Prompts </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold"> LinkedIn™ Prompts </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold"> SEO Prompts </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  Outreach Message Prompts{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  3600+ Closing Sales Prompts (including closing script){" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  1000+ Landing Page Prompts{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  1000+ Conversion Rate Optimization Prompts{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  2200+ Productivity Prompts (you'll save time on using proven
                  ChatGPT prompts){" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  950+ Customer Support Prompts{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  1300+ Product Management Prompts for your most repeated task{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  1000+ Human Resources Prompts{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  Proven tricks to unlock ChatGPT fully{" "}
                </li>
              </div>
              <div className="flex py-2">
                <span className="text-[#e93d3d] text-[30px] mr-2 font-bold">
                  {" "}
                  ✓{" "}
                </span>
                <li className="text-[30px] font-bold">
                  {" "}
                  Exact steps + examples to get reliable results & scale{" "}
                </li>
              </div>
            </ul>
          </div>

          {/* ------------button------------------ */}

          <div class="max-w-[650px] mx-auto my-5 px-4 sm:px-6 lg:px-8">
            <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-[#e73904] border-b-2 pb-5 mb-5">
              Master ChatGPT while your competitors are still trying to figure
              it out!
            </h1>
            <div>
              <h1 class="text-lg sm:text-xl md:text-2xl">Total Value $3,997</h1>
              <h1 class="line-through text-lg sm:text-xl md:text-2xl">
                Retail Value $97
              </h1>
            </div>

            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
              Get Everything For Just:
            </h1>
            <h1 class="text-xl sm:text-2xl md:text-3xl lg:py-3 font-bold text-[#e73904]">
              $27!
            </h1>

            <Button></Button>

            <div class="text-sm sm:text-base mt-4">
              If you curious to know how to consistently get paid to get new
              clients, here's the secret...
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[650px] mx-auto mt-[60px] text-center px-4">
        <h1 className="text-lg md:text-xl lg:text-2xl text-[#e73904] font-bold">
          HERE'S A SHOCKING TRUTH...
        </h1>
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
          😱 20 hours
        </h1>
        <h1 className="text-md md:text-lg lg:text-xl">
          👆 That’s how much time per week an average online business or experts
          can save per week by utilizing AI & ChatGPT to its full potential… 🎉
        </h1>
      </div>

      <div className="px-3">
        <img
          className="mx-auto  my-[30px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6583b4e5cd21c24bad7068b7.png"
          alt=""
        />

        <div className="max-w-[575px] mx-auto text-[24px]">
          <p>
            Imagine reinvesting that time into more client sessions, refining
            your business models, or even just enjoying well-deserved personal
            time.
          </p>
          <p className="my-[35px]">
            ChatGPT isn't just about automating tasks...
          </p>
          <p className="my-[35px]">
            It's about revolutionizing the way you approach online and
            marketing...
          </p>
          <p>
            Creating more impact while enjoying a better
            <br />
            <b> work-life balance.</b>
          </p>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto flex flex-wrap justify-center items-center">
        <img
          className="max-w-[555px] max-h-[1300px] w-full md:w-auto"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65c36096805e4ba43839530a.png"
          alt=""
        />
        <img
          className="max-w-[555px] max-h-[1300px] w-full md:w-auto "
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65c36099805e4b8eb539530b.png"
          alt=""
        />
      </div>

      <img
        className="mx-auto my-[50px]"
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65c326320e904bd20f30186d.png"
        alt=""
      />

      <div className="bg-[#f8f8f8]  py-[40px]">
        <div className="max-w-[585px] bg-white rounded-[20px] mx-auto px-7 py-6 drop-shadow-2xl">
          <img
            className="max-h-[120px] mx-auto rounded-[50%]"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65cde119c646e4771d011b05.png"
            alt=""
          />
          <p className="text-center text-[24px] my-[10px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[28px] my-[10px] font-bold">
            Jack Benson
            <br />
            Online Business with $20M+ in sales
          </p>
          <p className="text-center text-[18px] font-medium mb-[30px]">
            "Great stuff! Highly recommend! This product is a game-changer! In
            our online business, we rigorously evaluate countless creatives
            every month. Initially, we were intrigued by ChatGPT, but often, the
            outcomes were just average. However, once we started using these
            specific prompts given, we noticed a dramatic improvement in
            quality. The efficiency it brought allowed us to save numerous hours
            each week!"
          </p>
          <img
            className="mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65c2f72863440b6db8141ac2.png"
            alt=""
          />
        </div>
      </div>

      <h1 className="text-[30px] font-bold text-center mt-[40px]">
        Backed By $10M In Sales Generated
        <br />
        Just Using{" "}
        <span className="text-[#e73904] underline underline-offset-4">
          ChatGPT
        </span>{" "}
        to Create Your Sales Funnels
        <br />
        That Literally Print Money...
      </h1>
      <div className="px-3">
        <img
          className="mx-auto mt-[10px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HYXcsVKvx47tAl5wEEaq/media/657d9ade917281ee7877da4f.gif"
          alt=""
        />

        <img
          className="mx-auto my-[20px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HYXcsVKvx47tAl5wEEaq/media/6577e7d0c906e6477f084f05.png"
          alt=""
        />
        <p className="text-[21px] text-[#e73904] italic font-medium text-center">
          143 CALLS @ $56.58 COST PER CALL
        </p>

        <img
          className="mx-auto my-[20px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HYXcsVKvx47tAl5wEEaq/media/6577e7d0ea9b90ffbb7841c5.png"
          alt=""
        />
        <p className="text-[21px] text-[#e73904] italic font-medium text-center">
          202 LEADS @ $19.07 COST PER LEAD
        </p>

        <img
          className="mx-auto my-[20px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HYXcsVKvx47tAl5wEEaq/media/6577e7d0c906e6ff7b084f08.png"
          alt=""
        />
        <p className="text-[21px] text-[#e73904] italic font-medium text-center">
          106 LEADS @ $8.13 COST PER LEAD
        </p>

        <img
          className="mx-auto my-[20px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HYXcsVKvx47tAl5wEEaq/media/6577e7d0ea9b9059597841c3.png"
          alt=""
        />
        <p className="text-[21px] text-[#e73904] italic font-medium text-center">
          158 LEADS @ $2.41 COST PER LEAD
        </p>

        <h1 className="text-[32px] font-bold text-center mt-[40px] max-w-[1100px] mx-auto">
          And Yes, It's "Like An Eskimo Selling Ice Cubes In The Sahara On The
          Hottest Day Of The Year" Good—Seriously!
        </h1>

        <img
          className="mx-auto my-[10px]"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65855b40b3a88184de4c5d29.png"
          alt=""
        />
      </div>

      <div className="bg-[#f8f8f8] py-10 md:py-20 mt-12 md:mt-20">
        <div className="max-w-[1160px] mx-auto leading-[45px] px-5">
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl text-white bg-[#e73904] p-2 md:p-4">
            <strong>Here's A Sneak Peek Of What You're Getting...👇</strong>
          </h1>
          {/*  */}

          <div className="my-5 max-w-[1160px] mx-auto">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Use your video's embed link
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/*  */}
        </div>
        <Accordion />

        <Button></Button>
      </div>

      <img
        className="mx-auto mt-[70px]"
        src="https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/b5b39dfa-3097-4e1e-8612-98a845432271.png"
        alt=""
      />

      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold max-w-[1100px] mx-auto leading-tight md:leading-snug lg:leading-[50px] tracking-tight mb-10 md:mb-20">
        We Are On A Mission To Help{" "}
        <span className="underline text-[#e93d3d]">
          Everyday People Like You Succeed…
        </span>
      </h1>

      <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold max-w-[890px] mx-auto leading-snug md:leading-normal lg:leading-[50px] tracking-tight uppercase">
        This{" "}
        <span className="underline text-[#e93d3d]">
          {" "}
          AI MARKETING PROMPTS + TOOLKITS{" "}
        </span>{" "}
        has helped 1,637+ ONLINE FREELANCERS to launch a freedom business...
      </h1>
      <h1 className="text-lg md:text-xl lg:text-2xl text-center font-bold leading-snug md:leading-normal lg:leading-[50px] tracking-tight underline uppercase mt-2">
        ...and change their lives forever!
      </h1>

      {/* ------------------- */}

      <div className="flex flex-wrap gap-[20px] justify-center max-w-[1160px] mx-auto mt-[100px]">
        <div className="w-full sm:w-[360px] img-card px-[30px] py-[40px] rounded-[15px]">
          <img
            className="mt-[-45px] w-[70%] mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6586a959096557121a878ed8.png"
            alt=""
          />
          <p className="text-center text-[24px] mt-[30px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[16px] mb-5">
            Simon C. <b>closed a $7,400 deal</b> after 7 days learning ChatGPT.
          </p>
        </div>
        <div className="w-full sm:w-[360px] img-card px-[30px] py-[40px] rounded-[15px]">
          <img
            className="mt-[-45px] w-[75%] mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6587dd4609655731c593bec2.png"
            alt=""
          />
          <p className="text-center text-[24px] mt-[30px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[16px] mb-5">
            Joshua R. was in a foreign country with no income and{" "}
            <b>closed $1,000 in the first week</b> after mastering all A.I.
            toolkits.
          </p>
        </div>
        <div className="w-full sm:w-[360px] img-card px-[30px] py-[40px] rounded-[15px]">
          <img
            className="mt-[-45px] w-[70%] mx-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6586ac0bb3a8812b084ee5d5.png"
            alt=""
          />
          <p className="text-center text-[24px] mt-[30px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[16px] mb-5">
            Jessy went from zero to <b>$12,000 a month</b> with ChatGPT.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-center max-w-[1160px] mx-auto mt-[100px]">
        <div className="w-full sm:w-[360px] img-card px-[30px] py-[40px] rounded-[15px]">
          <img
            className="mt-[-45px] mx-auto w-[70%] sm:w-auto"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6586abb6b3a8816a8e4ee5d0.png"
            alt=""
          />
          <p className="text-center text-[24px] mt-[30px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[16px] mb-5">
            Lucy, ex-engineer hit her first <b>$10,000</b> within 3 short
            months.
          </p>
        </div>
        <div className="w-full sm:w-[360px] img-card px-[30px] py-[40px] rounded-[15px]">
          <img
            className="mt-[-45px] mx-auto w-[70%] sm:w-auto"
            src="https://elearningindustry.com/wp-content/uploads/2020/11/the-best-way-to-structure-a-zoom-lesson.png"
            alt=""
          />
          <p className="text-center text-[24px] mt-[30px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[16px] mb-5">
            David makes an <b>extra $10k a month</b> while still working as a
            university lecturer.
          </p>
        </div>
        <div className="w-full sm:w-[360px] img-card px-[30px] py-[40px] rounded-[15px]">
          <img
            className="mt-[-45px] mx-auto w-[70%] sm:w-auto"
            src="https://i.ibb.co/s2K5XzD/Untitled.jpg"
            alt=""
          />
          <p className="text-center text-[24px] mt-[30px]">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="text-center text-[16px] mb-5">
            Aaliyah J. makes <b>$15,000 a month</b> and enjoys more time with
            her son.
          </p>
        </div>
      </div>

      <h1 className="text-[36px] sm:text-[48px] text-center font-bold leading-[50px] mt-[50px]">
        Get <span className="underline">Everything</span> For Just: <br />
        <span className="text-[#e73904] text-[28px] sm:text-[36px]">$27</span>
      </h1>
      <Button></Button>

      <p className="text-center mt-[10px] mb-[50px]">
        This will be the final time we are doing one!
      </p>
      <h1 className="text-center text-[24px] sm:text-[32px] font-bold max-w-[900px] mb-[40px] mx-auto">
        Unlock the Full Capabilities of ChatGPT With Our Tested-For-You Prompts
      </h1>
      <div className="max-w-[575px] mx-auto text-[20px] sm:text-[24px] mb-[30px]">
        <p>Excited about ChatGPT but feel it didn’t match expectations?</p>
        <p className="my-[20px] sm:my-[35px]">
          You're not alone. However, the current ChatGPT is just a beta, a
          glimpse of AI's potential.
        </p>
        <p className="my-[20px] sm:my-[35px]">
          Surprisingly, 93% of businesses aren't using ChatGPT effectively.
        </p>
        <p>
          Fully harnessing AI's capabilities requires precise, data-driven
          prompts.
        </p>
      </div>

      <img
        className="mx-auto"
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6583ee36cd21c2fb3370a802.png"
        alt=""
      />

      <div className="max-w-[575px] mx-auto text-[24px] mb-[30px]">
        <p className="my-[35px]">
          Even a slight word shift can make or break your results. After all,
          this is a piece of code – not a human!
        </p>
        <p className="my-[35px]">
          That’s why we did all the trial and error for you, so you can simply
          copy, paste, and scale 👇
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 max-w-[1160px] mx-auto">
        <div className="w-full md:w-[545px] rounded-[20px] p-[30px] bg-[#555555] text-center">
          <h1 className="text-white text-[24px] font-bold underline">
            How everyone is doing it:
          </h1>
          <p className="text-white text-[24px] mt-[20px]">
            ❌ Try a few prompts, then quit
          </p>
          <p className="text-white text-[24px]">
            ❌ Thinking ChatGPT is only for writing and summarizing
          </p>
          <p className="text-white text-[24px]">
            ❌Unreliable results, varied quality
          </p>
        </div>
        <div className="w-full md:w-[545px] rounded-[20px] p-[30px] bg-[#e73904] text-center">
          <h1 className="text-white text-[24px] font-bold underline">
            🌟 How you'll do it using our prompts:
          </h1>
          <p className="text-white text-[24px] mt-[20px]">
            ✅ Go deep with the exact questions to ask
          </p>
          <p className="text-white text-[24px]">
            ✅ Using ChatGPT for marketing strategy, creative ideation,
            compelling writing, and a measurable lift in performance
          </p>
          <p className="text-white text-[24px]">
            ✅ Training the AI to compound your results
          </p>
        </div>
      </div>

      <BonusSection />

      <img
        className="mx-auto mt-9"
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/65850bb7096557ec78843ad0.png"
        alt=""
      />

      <ProductComparison />

      <InstantlyUnlock />

      <StopDabbling />

      <div className="flex flex-wrap justify-center max-w-[1160px] mx-auto my-[50px]">
        <div className="w-full sm:w-[545px] px-4 sm:px-0 mx-auto mb-8 sm:mb-0">
          <img
            className="mx-auto max-w-[290px] sm:max-w-[400px] "
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6584047ab07792088de12df0.png"
            alt=""
          />
          <p className="text-center text-[18px] sm:text-[24px] font-bold mt-4">
            70% of high performing marketers claimed they have a fully defined
            AI strategy
            <span className="font-normal">(eConsultancy*).</span>
          </p>
        </div>
        <div className="w-full sm:w-[545px] px-4 sm:px-0 mx-auto">
          <img
            className="mx-auto max-w-[290px] sm:max-w-[400px]"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6584047ab07792088de12df0.png"
            alt=""
          />
          <p className="text-center text-[18px] sm:text-[24px] font-bold mt-4">
            70% of high performing marketers claimed they have a fully defined
            AI strategy
            <span className="font-normal">(eConsultancy*).</span>
          </p>
        </div>
      </div>

      <AICoachmaker />

      <p className="text-center text-[23px] font-bold mt-[40px]">
        Order Summary
      </p>
      <img
        className="mx-auto mt-[10px]"
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HYXcsVKvx47tAl5wEEaq/media/657d9ade917281ee7877da4f.gif"
        alt=""
      />
      <OrderSummary />

      <h1 className="text-center text-[32px] font-bold ">
        You're Covered By Our No Questions Asked 60-Day Guarantee
      </h1>

      <img
        className="mx-auto max-w-[250px]"
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TKyEPyTWLdBiy80M6dQT/media/642040a59ccfe053aca635f6.webp"
        alt=""
      />

      <p className="text-center text-[23px] max-w-[1130px] mx-auto mt-3 mb-8">
        If for any reason you want your money back, just send us a message and
        we'll give you 100% of your money back plus let you keep access to your
        purchase. We fully stand behind the quality of our product.
      </p>

      <Button></Button>
      <p className="text-center">
        Zero risk with our 60-day money-back guarantee
      </p>

      <div className="bg-[#212529] py-[50px] mt-[50px]">
        <Accordion2 />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
