import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Cards } from "../Data/Data";

const CardList = () => {
  return (
    <>
      {Cards.map((card, index) => {
        return (
          <div
            key={index}
            className="shadow-lg border-r border-b border-l border-t mb-10"
          >
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
                        <div className="bg-gray-200 px-2 mr-5">3 weeks ago</div>
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
    </>
  );
};

export default CardList
