import React from "react";
import {Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
import WelcomeImage from "../Images/Welcome.png";
import Chorme from "../Images/CHORME_LOGO.png";
import FPT from "../Images/FPT_LOGO.png";
import VINFAST from "../Images/VINFAST_LOGO.png";
import CarLOGO from "../Images/Logo-Zalo-Arc 9.png";
import WelcomeCourse from "../Images/WelcomeCourse.png";
import BamBooLogo from "../Images/BamBooLogo.png"
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Cards = [
  {
    label: "Wordpress Development",
    title: "Mercedes - Benz",
    logo: CarLOGO,
  },
  {
    label: "PhP Development",
    title: "Google",
    logo: Chorme,
  },
  {
    label: "Unity Development",
    title: "Fpt software",
    logo: FPT,
  },
  {
    label: "3D Design",
    title: "Vin group",
    logo: VINFAST,
  },
];

const LOGOS = [VINFAST, FPT, BamBooLogo, Chorme, CarLOGO]

const Home = () => {

  return (
    <>
      <div>
        <img
          src={WelcomeImage}
          style={{ width: "100%", height: "80vh" }}
          alt="welcom img"
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "40%",
            width: "600px",
          }}
          className="lg:flex"
        >
          <input
            className="m-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Search"
            type="text"
            placeholder="Search"
          />
          <button className="bg-blue-900 hover:bg-white text-white font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded">
            Search
          </button>
        </div>

        <div className="text-center pt-10">
          <h2 className="font-bold text-xl text-blue-900 py-7">
            TOP INTERSHIPS
          </h2>
        </div>

        <div className="items-center gap-8 grid grid-rows-2 grid-cols-2 mx-28">
          {Cards.map((card) => {
            return (
              <div className="col-span-1 drop-shadow-2xl border-r border-b border-l border-t">
                <div className="">
                  <div className="flex p-4 justify-between leading-normal">
                    <div className="flex p-4">
                      <img
                        className="w-28 h-28 mr-8"
                        src={card.logo}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div className="mb-8">
                        <div className="text-gray-900 font-semibold text-xl mb-1">
                          {card.title}
                        </div>
                        <p className="text-gray-400 text-thin">{card.label}</p>
                        <hr className="mb-1" />

                        <div>
                          <p className="text-gray-400 text-thin mb-1">HaNoi</p>
                          <p className="text-gray-400 text-thin mb-1">
                            3Tr/Month
                          </p>
                          <p className="text-gray-400 text-thin mb-1">
                            6 Months
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-400 mr-5 flex flex-col">
                      <TurnedInNotOutlinedIcon />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="p-4 flex justify-end text-blue-800">
                  <a>
                    View Details <KeyboardArrowRightIcon />
                  </a>
                </div>
              </div>
            );
          })}
          ;
        </div>
        <div className="p-4 flex justify-end text-blue-800">
          <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded">
            See All Interships
          </button>
        </div>

        <div className="text-center pt-10">
          <h2 className="font-bold text-2xl text-blue-900 py-7 ">Courses</h2>
          <div className="items-center gap-8 grid grid-cols-6 mx-28">
            <img
              className="col-span-4"
              src={WelcomeCourse}
              alt="welcome course"
              width={"100%"}
            />
            <div className="col-span-2 text-center">
              <p className="overflow-hidden font-thin text-xs text-gray-400">
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
                aasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkkaasdfmakjjjjjjjjjjjjjjjjjasdjcadadlkcadmakjjjjjjjjjjjjjjjjjjjjkk
              </p>
              <div className="mt-5">
                <button
                  style={{ width: "80%" }}
                  className=" bg-blue-900 hover:bg-white text-white font-xs hover:text-blue-900 py-3 px-4 border border-blue-900 rounded"
                >
                  Register For Course
                </button>
                <br />
                <br />
                <button
                  style={{ width: "80%" }}
                  className="bg-blue-900 hover:bg-white text-white font-xs hover:text-blue-900 py-3 px-4 border border-blue-900 rounded"
                >
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-10">
          <h2 className="font-bold text-2xl text-blue-900 py-7 ">Top Companies</h2>
          <div className="flex justify-between mx-32 my-14">
            {LOGOS.map(logo =>{
                return <img src={logo} alt="company logo" width={"5%"}/>
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
