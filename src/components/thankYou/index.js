import React, { useEffect, useState } from "react";
import Footer from "../core/footer";
import Loading from "../checkout/Loading";

const ThankYouPage = () => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("payment");
    if (data) {
      setshow(true);
    } else {
      window.history.back();
    }
  }, []);
  return (
    <>
      {!show ? (
        <Loading />
      ) : (
        <div>
          <div className="bg-[#e73904] flex items-center justify-center">
            <h1 className="text-center font-bold px-3  py-5 xl:py-[50px] text-base sm:text-lg md:text-xl lg:text-3xl xl:text-[50px] text-white">
              Congratulations - order Complete!
            </h1>
          </div>
          {/* ----- */}
          <div className="max-w-[1160px] mx-auto text-center text-base sm:text-lg md:text-xl lg:text-3xl pt-5">
            Kindly <span className="font-bold ml-3">check your email</span>! You
            should receive it within 2-5 minutes!
          </div>

          <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-[30px] pt-3">
            - OR -
          </div>
          <div className="text-center text-base sm:text-lg md:text-xl lg:text-3xl pt-3">
            You can{" "}
            <span className="font-bold text-[#188bf6] ml-2 mr-2 hover:underline">
              click here
            </span>{" "}
            to directly access your{" "}
            <span className="font-bold text-[#188bf6] ml-2 mr-2 hover:underline">
              Bonuses
            </span>
          </div>

          {/*  */}

          <div className="my-5 max-w-[1160px] mx-auto">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtu.be/RZ1g8NJGLME?si=6vlPI1-oKaJ56X7l" // Use your video's embed link
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/*  */}

          <div className="max-w-[1160px] mx-auto text-[14px] sm:text-xl md:text-2xl lg:text-3xl pt-3 px-2 text-center">
            If you've any more questions, just drop us an email at{" "}
            <span className="text-[#188bf6] hover:underline">
              support@aitoolkitsforcoaches.com
            </span>{" "}
            and we will take care of you.
          </div>

          <div className="max-w-[1160px] mx-auto text-[14px] sm:text-xl md:text-2xl lg:text-3xl pt-3  text-center my-[20px]">
            If you want to build your funnels and get more clients online, you
            can{" "}
            <span className="font-bold text-[#188bf6] ml-2 mr-2 hover:underline">
              Click The Button Below
            </span>{" "}
            to schedule a{" "}
            <span className="underline">FREE Consultation Call</span> with our
            team👇
          </div>

          <div className="flex items-center justify-center py-2 p-2">
            <div className=" shadow-2xl shadow-[#e73904]  bg-[#e73904] max-w-xs sm:max-w-sm md:max-w-md lg:w-auto h-auto rounded-3xl p-3 text-white flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
              <div>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-center">
                  BOOK A FREE CONSULTATION CALL
                  <br />
                  <p className="font-normal text-base sm:text-lg md:text-xl text-center">
                    Schedule call with us
                  </p>
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-[20px] mx-auto mt-[100px] p-3">
            <div className="w-full sm:w-[360px] img-card px-[30px] py-[20px] rounded-[15px]">
              <img
                className="mx-auto "
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6586a959096557121a878ed8.png"
                alt=""
              />
            </div>
            <div className="w-full sm:w-[360px] img-card px-[30px] py-[20px] rounded-[15px]">
              <img
                className="mx-auto "
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6587dd4609655731c593bec2.png"
                alt=""
              />
            </div>
            <div className="w-full sm:w-[360px] img-card px-[30px] py-[20px] rounded-[15px]">
              <img
                className="mx-auto "
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/6586ac0bb3a8812b084ee5d5.png"
                alt=""
              />
            </div>
          </div>

          <img
            className="mx-auto px-3 mt-[50px]"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/q6v8KZiyDpfUjDKoCW7u/media/651018c955d7d85166084339.png"
            alt=""
          />
          <img
            className="mx-auto px-3  mt-[50px]"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/3cfYZ62ndd3Fci44OcL9/media/658be46525e0d6bcc09d24ec.png"
            alt=""
          />
          <img
            className="mx-auto px-3  mt-[20px]"
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/q6v8KZiyDpfUjDKoCW7u/media/651018c9088ee71d6478686d.jpeg"
            alt=""
          />

          <div className="flex items-center justify-center py-2 mx-4 my-5 ">
            <div className="  my-4 shadow-2xl shadow-[#e73904]  bg-[#e73904] w-full sm:w-[732px] h-[111px] rounded-[39px] p-3 text-white flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f75010]">
              <div className="text-center ">
                <h1 className="font-bold text-lg sm:text-2xl md:text-3xl">
                  BOOK A FREE CONSULTATION CALL
                </h1>
                <p className="font-normal text-base sm:text-lg md:text-xl">
                  Schedule call with us
                </p>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className="max-w-[936px] rounded-[15px] mx-auto bg-[#252a2f] px-6 sm:px-[30px] py-[20px]">
              <p className="text-[#e93d3d] text-xl sm:text-[25px] font-bold text-center">
                WHY WAIT?
              </p>

              <p className="text-white text-2xl sm:text-3xl md:text-[45px] font-bold text-center">
                Discover How To Make $3k-$5k A Month Get More Leads & Sales With
                High-Converting Funnels 👇
              </p>

              <p className="text-white text-xl sm:text-2xl md:text-[35px] italic font-bold text-center">
                Schedule a Free Consultation Call!
              </p>

              {/* <div className='p-3 bg-[#e73904]  rounded-3xl animate-ping'> */}
              <div className=" bg-[#e73904] shadow-2xl shadow-[#e73904]  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f75010] bg-[#e73904] my-[30px] rounded-3xl p-3 text-white flex items-center justify-center">
                <h1 className=" font-bold text-center text-lg sm:text-3xl md:text-[30px] ">
                  BOOK A FREE CONSULTATION CALL
                </h1>
              </div>
              {/* </div> */}

              <p className="text-white text-base sm:text-lg md:text-[20px] text-center">
                Ride the A.I. wave and profit from this rare opportunity!
              </p>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ThankYouPage;
