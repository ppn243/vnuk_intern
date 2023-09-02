import React from "react";
import { Cards } from "../Data/Data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import CardList from "../Components/CardList";

const BookMarks = () => {
  return (
    <>
      <div className="text-center mb-20">
        <h1 className="mb-10 mt-20 font-semibold text-5xl">Your bookmarks</h1>
        <div className="border py-5 px-10 text-left w-3/5 m-auto border-blue-900 bg-slate-200 text-blue-900">
          Your bookmarked internships will be automatically removed from here
          whenever their application deadline is over or application window is
          closed
        </div>
      </div>
      <div className="m-auto w-3/4 slide-container mb-10">
        <Slide>
          {Cards.map((card, index) => {
            return (
              <div key={index} className="shadow-lg border-r border-b border-l border-t">
                <div>
                  <div className="flex p-4 justify-between leading-normal">
                    <div className="flex p-4">
                      <div className="mb-8">
                        <div className="border flex items-center px-2 py-1 mb-2">
                          <CheckCircleOutlineIcon className="text-lime-500 mr-2" />{" "}
                          Actively Hiring
                        </div>
                        <div className="text-gray-900 font-semibold text-4xl mb-1">
                          {card.label}
                        </div>
                        <p className="text-gray-400 text-xl text-thin">
                          {card.title}
                        </p>
                        <hr className="mb-5" />

                        <div>
                          <p className="text-gray-400 text-thin mb-5 text-lg flex items-center">
                            <FmdGoodIcon /> HaNoi
                          </p>

                          <div className="flex text-lg mb-10 text-gray-400">
                            <div className="flex flex-col mr-20">
                              <label>START DATE</label>
                              <p className="text-black text-thin text-xl mb-1">
                                1 Jul - 5 Jul’ 23
                              </p>
                            </div>
                            <div className="flex flex-col mr-20">
                              <label>DURATION</label>
                              <p className="text-black text-thin text-xl mb-1">
                                6 Months
                              </p>
                            </div>
                            <div className="flex flex-col mr-20">
                              <label>STIPEND</label>
                              <p className="text-black text-thin text-xl mb-1">
                                3Tr/Month
                              </p>
                            </div>
                          </div>

                          <div className="flex text-lg text-gray-400">
                            <div className="bg-gray-200 px-2 mr-5">
                              3 weeks ago
                            </div>
                            <div className="bg-gray-200 px-2 mr-5">
                              without experience
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" mr-5 flex flex-col">
                      <img
                        className="w-28 h-28 mr-8"
                        src={card.logo}
                        alt="Avatar of Jonathan Reinink"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="p-4 flex justify-end text-blue-800">
                  <TurnedInNotOutlinedIcon className="text-gray-400" />
                  <Link to={"/Intership/Details/" + card.id}>
                    View Details <KeyboardArrowRightIcon />
                  </Link>
                </div>
              </div>
            );
          })}
        </Slide>
        
      </div>
    </>
  );
};

export default BookMarks;
