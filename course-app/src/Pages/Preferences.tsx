import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const PreferencesSections = [
  {
    title: "Popular career interests",
    choices: [
      {
        option: "Data Entry",
        textColor: "text-gray-900",
      },
      {
        option: "Digital Marketing",
        textColor: "text-gray-900",
      },
      {
        option: "Web Development",
        textColor: "text-gray-900",
      },
      {
        option: "Telecalling",
        textColor: "text-gray-900",
      },
      {
        option: "Graphic Design",
        textColor: "text-gray-900",
      },
      {
        option: "UI/UX Design",
        textColor: "text-gray-900",
      },
      {
        option: "Operations",
        textColor: "text-gray-900",
      },
      {
        option: "Video Editing",
        textColor: "text-gray-900",
      },
      {
        option: "Data Science",
        textColor: "text-gray-900",
      },
      {
        option: "Software Testing",
        textColor: "text-gray-900",
      },
      {
        option: "Accounts",
        textColor: "text-gray-900",
      },
      {
        option: "Programming",
        textColor: "text-gray-900",
      },
    ],
  },
  {
    title: "Currently looking for",
    choices: [
      {
        option: "Jobs",
        textColor: "text-gray-900",
      },
      {
        option: "Interships",
        textColor: "text-gray-900",
      },
    ],
  },
  {
    title: "Work mode",
    choices: [
      {
        option: "In-office",
        textColor: "text-gray-900",
      },
      {
        option: "Work from home",
        textColor: "text-gray-900",
      },
    ],
  },
];

const Preferences = () => {
  const onSelected = (event: any) => {
    var classList = event.target.classList;
    if (classList.contains("text-white")) {
      classList.remove("text-white", "bg-blue-900");
    } else classList.add("text-white", "bg-blue-900");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mb-5 font-semibold text-4xl">Your preferences</h1>
        Help us match you with the best career opportunities
      </div>
      <div className="m-auto w-2/4">
        <div className="shadow-2xl rounded-2xl border my-10 p-14">
          <div className="mb-16">
            <div className="font-semibold mb-3 text-xl">College name</div>
            <input
              type="text"
              className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="🔎 Areas you want to work in or learn about"
            ></input>
          </div>

          {PreferencesSections.map((section) => (
            <>
              <div className="mb-16">
                <div className="font-semibold mb-4 text-xl">
                  {section.title}
                </div>

                <div className="flex flex-wrap">
                  {section.choices.map((choice) => (
                    <>
                      <span
                        onClick={(event) => onSelected(event)}
                        className={
                          "p-5 text-xl rounded-full border ml-5 " +
                          choice.textColor
                        }
                      >
                        {choice.option}
                      </span>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}

          <div className="mb-16">
            <div className="font-semibold mb-3 text-xl">
              Preferred city for in-office opportunities{" "}
              <span className="text-gray-400">(Optional)</span>
            </div>
            <input
              type="text"
              className="h-14 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="🔎 About location"
            ></input>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="Resume">
            <button className=" bg-blue-900 rounded-lg px-16 hover:text-blue-900 hover:bg-white border border-blue-900 py-2 my-10 mb-3 font-sans text-xl text-white">
              Find me opportunities
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Preferences;
