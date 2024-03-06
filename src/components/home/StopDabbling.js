import React from "react";
import Button from "./Button";

const StopDabbling = () => {
  const data = [
    "16,000+ Sales Funnel Prompts (including copywriting)",
    "Facebook™ Ad Prompts",
    "Instagram™ Ad Prompts",
    "TikTok™ Ad Prompts",
    "YouTube™ Ad Prompts",
    "2000+ Email Marketing Prompts",
    "Ecommerce Prompts",
    "Lead Generation Prompts",
    "Affiliate Marketing Prompts",
    "1400 + Social Media Marketing Prompts",
    "Business Prompts",
    "Influencer Marketing Prompts",
    "Twitter™ Prompts",
    "LinkedIn™ Prompts",
    "SEO Prompts",
    "Outreach Message Prompts",
    "3600 + Closing Sales Prompts(including closing script)",
    "1000 + Landing Page Prompts",
    "1000 + Conversion Rate Optimization Prompts",
    "2200 + Productivity Prompts(you'll save time on using proven ChatGPT prompts)",
    "950 + Customer Support Prompts",
    "1300 + Product Management Prompts for your most repeated task",
    "1000 + Human Resources Prompts",
    "Proven tricks to unlock ChatGPT fully",
    "Exact steps + examples to get reliable results & scale",
  ];
  return (
    <div className=" shadow-lg border max-w-[819px] mx-auto text-center rounded-lg py-[30px] px-[10px] sm:px-[50px] my-6">
      <p className="text-[18px] sm:text-[24px] text-[#e93d3d] text-center font-bold">
        Stop dabbling with ChatGPT!
      </p>

      <h1 className="text-[20px] sm:text-[34px] text-center font-extrabold max-w-[90%] sm:max-w-[890px] mx-auto leading-normal sm:leading-[50px] tracking-tight sm:tracking-[-1px] uppercase">
        Copy & paste <span className="underline">our proven prompts</span>, so
        you can save countless hours and scale with AI.
      </h1>

      <img
        className="mx-auto w-[400px]"
        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/658410e93489e40db864181a.gif"
      />

      {/* ----------------- */}

      <div className=" max-w-[650px] mx-auto text-left">
        <ul>
          {data.map((item) => (
            <div className="flex py-2">
              <span className="text-[#e93d3d] text-[18px] sm:text-[30px] mr-2 font-bold">
                {" "}
                ✓{" "}
              </span>
              <li className="text-[18px] sm:text-[30px] font-bold">{item}</li>
            </div>
          ))}
        </ul>
      </div>

      <div className="max-w-[650px] mx-auto mt-5">
        <h1 className="bg-[#e73904] text-white text-[20px] sm:text-[22px] md:text-[26px] font-bold px-4 py-2">
          + FAST ACTION BONUSES
        </h1>
      </div>

      {/* --------------- */}

      <div>
        <div className="py-2 mb-[20px]">
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] text-justify sm:max-w-[90%] md:max-w-[600px] mx-auto tracking-[-1px] leading-[1.2] md:leading-[30px] px-4">
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
      </div>

      <div>
        <div className="py-2 mb-[20px]">
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] text-justify mx-auto px-4 sm:px-6 md:px-8 lg:max-w-[600px] tracking-tight sm:tracking-normal md:tracking-[-1px] leading-[1.3] sm:leading-[1.4] md:leading-[30px]">
            <span className="text-[#e73904] font-bold">
              BONUS - Revolutionary 170+ AI Tools & Templates:
            </span>{" "}
            Unlock the{" "}
            <span className="underline">
              TRUE Power of A.I. and Done-For-You
            </span>{" "}
            Templates that{" "}
            <span className="font-bold underline">
              do 90% of the work for you!
            </span>{" "}
            Whether you're looking to automate the tasks, create images and
            videos with AI, or simply make your life easier, these tools and
            resources have got you covered{" "}
            <span className="italic">
              (Increased Output And Quality Of Work At Scale)
            </span>
            .
          </h1>
        </div>
      </div>
      {/* -- */}
      <div>
        <div className="py-2 mb-[20px]">
          <h1 className="text-[18px] sm:text-[24px] md:text-[30px] text-justify mx-auto px-4 sm:px-6 md:px-8 lg:max-w-[600px] tracking-tight sm:tracking-normal md:tracking-[-1px] leading-[1.3] sm:leading-[1.4] md:leading-[30px]">
            <span className="text-[#e73904] font-bold">
              BONUS - 369 SECRET PROMPTS TO EARNING $10,000+ MONTHLY:
            </span>{" "}
            How these 30 coaches used the ChatGPT Prompt™ to{" "}
            <span className="font-bold underline">
              earn over $10,000 monthly
            </span>{" "}
            <span className="italic">(even at a beginner level!)</span>.
          </h1>
        </div>
      </div>

      <div>
        <div className="py-2 mb-[20px]">
          <h1 className="text-[20px] sm:text-[24px] md:text-[30px] text-justify sm:max-w-[90%] md:max-w-[600px] mx-auto">
            <span className="text-[#e73904] font-bold">
              BONUS - A.I. HIGH TICKET CLOSING FRAMEWORK:
            </span>{" "}
            Using our customized <span className="underline">PROVEN</span>{" "}
            prompts, you can work just a few hours a day And{" "}
            <span className="font-bold underline">
              unlock a high income stream
            </span>{" "}
            while{" "}
            <span className="font-bold underline">
              enjoying a happy and fulfilling life
            </span>{" "}
            WITHOUT burning out. No more 24/7 hustle & grind!
          </h1>
        </div>
      </div>

      {/* -- */}
      <div>
        <div className="py-2 mb-[20px]">
          <h1 className="text-[20px] sm:text-[24px] md:text-[30px] text-justify sm:max-w-[90%] md:max-w-[600px] mx-auto">
            <span className="text-[#e73904] font-bold">
              BONUS - CHATGPT AUTOMATIC SALES:
            </span>{" "}
            Customize ChatGPT to your unique business needs with tailored,
            custom instructions that are optimized for your industry, products,
            and services... allowing you to get optimized results and gain a
            competitive edge.
          </h1>
        </div>
      </div>

      {/* -- */}
      <div>
        <div className="py-2 mb-[20px]">
          <h1 className="text-[24px] sm:text-[30px] text-justify max-w-[90%] sm:max-w-[600px] tracking-[-1px] leading-[30px] mx-auto">
            <span className="text-[#e73904] font-bold">
              BONUS - CHATGPT PLUGINS:
            </span>{" "}
            Unlock even more possibilities with the best ChatGPT plugins and
            tools to streamline tasks and boost productivity.
          </h1>
        </div>
      </div>

      {/* -------------- */}

      <div className="max-w-[90%] sm:max-w-[659px] mx-auto">
        <p className="mb-5 text-[#e73904] text-[20px] sm:text-[26px] font-bold pt-5">
          Master ChatGPT while your competitors are still trying to figure it
          out!
        </p>
      </div>

      {/* -------------- */}

      <Button></Button>

      <p>Zero risk with our 60-day money-back guarantee</p>
      {/* -------------- */}
    </div>
  );
};

export default StopDabbling;
