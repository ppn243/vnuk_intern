import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const ResumeSections = [
  "EDUCATION",
  "JOBS",
  "INTERSHIPS",
  "POSITIONS OF RESPONSIBILITY",
  "COURSES",
  "PERSONAL PROJECTS",
  "SKILLS",
  "PORTFOLIO/ WORK SAMPLES",
  "ACCOMPLISHMENTS/ ADDITIONAL DETAILS",
];

const Resume = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="mb-5 font-semibold text-4xl">Your preferences</h1>
        <div className="border py-3 px-6 text-left w-3/4 m-auto border-blue-900 bg-slate-200 text-blue-900">
          <ErrorOutlineIcon /> This is the resume that the employer will see.
          Please complete your resume to increase your chances of hiring.
        </div>
      </div>
      <div className="m-auto w-3/4">
        <div className="shadow-2xl rounded-2xl border my-10 p-14">
          <h1 className="mb-2 font-semibold text-5xl">Viet Dang Hoang</h1>
          <div className="mb-2 text-gray-400">dahovi6102002@gmail.com</div>
          <div className="mb-2 text-gray-400">+84 123456789</div>
          <div className="mb-10 text-gray-400">Da Nang</div>

          <div className="grid grid-cols-10">
            <div className="col-span-2">
              {ResumeSections.map((section) => (
                <>
                  <div className="text-gray-400 mb-10">{section}</div>
                </>
              ))}
            </div>
            <div className="col-span-5 pl-40">
              {ResumeSections.map((section) => (
                <>
                  <div className="text-blue-900 font-medium mb-10">
                    <AddIcon /> {"Add " + section}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="BookMarks">
            <button className=" bg-blue-900 rounded-lg px-16 hover:text-blue-900 hover:bg-white border border-blue-900 py-2 my-10 mb-3 font-sans text-xl text-white">
              Proceed to application
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resume;
