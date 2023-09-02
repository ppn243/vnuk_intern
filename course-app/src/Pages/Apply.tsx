import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const ApplySections = [
  {
    title: "Gender",
    choices: [
      {
        option: "Female",
        textColor: "text-gray-900",
      },
      {
        option: "Male",
        textColor: "text-gray-900",
      },
      {
        option: "Others",
        textColor: "text-gray-900",
      },
    ],
  },
  {
    title: "Language you know",
    choices: [
      {
        option: "Vietnamese",
        textColor: "text-gray-900",
      },
      {
        option: "English",
        textColor: "text-gray-900",
      },
      {
        option: "Japanese",
        textColor: "text-gray-900",
      },
      {
        option: "+ Add more languages",
        textColor: "text-blue-900",
        font: "font-semibold",
        icon: undefined,
      },
    ],
  },
  {
    title: "Type",
    choices: [
      {
        option: "College students",
        textColor: "text-gray-900",
      },
      {
        option: "Fresher",
        textColor: "text-gray-900",
      },
    ],
  },
  {
    title: "Type",
    choices: [
      {
        option: "BE",
        textColor: "text-gray-900",
      },
      {
        option: "BA",
        textColor: "text-gray-900",
      },
      {
        option: "UI/UX",
        textColor: "text-gray-900",
      },
      {
        option: "Find more courses",
        textColor: "text-blue-900",
        font: "font-semibold",
        icon: <KeyboardArrowDownIcon />,
      },
    ],
  },
];

const Syears: number[] = [];
const Eyears: number[] = [];
for (let i = 1990; i <= 2023; i++) {
  Syears.push(i);
  Eyears.push(i + 10);
}

const Apply = () => {

  const onSelected = (event:any) => {
        var classList = event.target.classList
        if(classList.contains("text-white")){
            classList.remove("text-white", "bg-blue-900")
        }else
        classList.add("text-white", "bg-blue-900")
  }

  return (
    <>
      <div className="text-center">
        Hi there!
        <h1 className="mt-5 font-semibold text-4xl">Let's get started</h1>
      </div>
      <div className="m-auto w-2/4">
        <div className="shadow-2xl rounded-2xl border my-10 p-14">
          <div className="flex justify-between mb-16">
            <div className="w-1/2 pr-3">
              <div className="font-semibold mb-3 text-xl">First name</div>
              <input
                type="text"
                id="first_name"
                className=" h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
            <div className="w-1/2 pl=3">
              <div className="font-medium mb-3 text-xl">Last name</div>
              <input
                type="text"
                id="last_name"
                className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>
          </div>

          <div className="mb-16">
            <div className="font-semibold mb-3 text-xl">Email</div>
            <input
              type="text"
              className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Eg. example@gmail.com"
            ></input>
          </div>

          <div className="mb-16">
            <div className="font-semibold mb-3 text-xl">Contact number</div>
            <div className="flex justify-between">
              <div className="w-1/6 pr-3">
                <input
                  type="text"
                  id="first_name"
                  className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value="+84"
                  readOnly
                ></input>
              </div>
              <div className="w-5/6 pl=3">
                <input
                  type="text"
                  id="last_name"
                  className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="123456789"
                ></input>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="font-semibold mb-2 text-xl">Current city</div>
            <p className="text-gray-500">
              To connect you with opportunities closer to you
            </p>
            <input
              type="text"
              className="h-14 mt-2 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Current location"
            ></input>
          </div>

          {ApplySections.map((section) => (
            <>
              <div className="mb-16">
                <div className="font-semibold mb-4 text-xl">
                  {section.title}
                </div>

                <div className="flex flex-wrap">
                  {section.choices.map((choice) => (
                    <>
                      <span onClick={(event)=>onSelected(event)}
                        className={
                          "p-5 text-xl rounded-full border ml-5 " +
                          choice.textColor +
                          " " +
                          choice.font
                        }
                      >
                        {choice.option} {choice.icon}
                      </span>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}

          <div className="mb-16">
            <div className="font-semibold mb-3 text-xl">College name</div>
            <input
              type="text"
              className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Eg. VNUK Institute for Research & Executive Education"
            ></input>
          </div>

          <div className="mb-16">
            <div className="font-semibold mb-3 text-xl">
              Stream <span className="text-gray-400">(Optional)</span>
            </div>
            <input
              type="text"
              className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Eg. Computer Science and Engineering"
            ></input>
          </div>

          <div className="flex justify-between mb-3">
            <div className="w-1/2 pr-3">
              <div className="font-semibold mb-3 text-xl">Start year</div>
              <select
                id="first_name"
                className=" h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                {Syears.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
            <div className="w-1/2 pl=3">
              <div className="font-medium mb-3 text-xl">End year</div>
              <select
                id="last_name"
                className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                {Eyears.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="Preferences">
            <button className=" bg-blue-900 rounded-lg px-16 hover:text-blue-900 hover:bg-white border border-blue-900 py-2 my-10 mb-3 font-sans text-xl text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Apply;
