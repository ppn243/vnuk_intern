import React, { useState } from "react";
import CoursesWelcome from "../Images/courses_welcome.png";
import courseImage1 from "../Images/anh to.png";
import courseImage2 from "../Images/Group 143.png";
import courseImage3 from "../Images/image 14.png";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const category = [
  "Recommended for Viet",
  "Programming",
  "Business & Management",
  "Design",
  "Data Science",
  "Core Engineering",
  "Creative Arts",
  "Language",
  "Online courses",
];

const courses = [
  {
    title: "UI/UX design",
    image: courseImage1,
  },
  {
    title: "Python",
    image: courseImage2,
  },
  {
    title: "C/C++",
    image: courseImage2,
  },
  {
    title: "Mobile Development",
    image: courseImage2,
  },
  {
    title: "Mobile Tester",
    image: courseImage3,
  },
];

const Courses = () => {
  const [selectedCate, setCate] = useState("Recommended for Viet");
  return (
    <>
      <img
        alt="courses_welcome"
        src={CoursesWelcome}
        className="w-full h-2/5"
      />
      <div className="mt-10 mx-6">
        <div className="flex items-center">
          <h4>CERTIFICATION COURSES</h4>
          <div className="py-1 px-3 mx-5 bg-sky-200 text-blue-600">
            4 - 8 weeks
          </div>
        </div>
        <h2 className="mt-5 border-l-8 px-5 text-3xl border-blue-900 font-bold">
          FASTEST WAT TO BUILD YOUR CV
        </h2>
        <div className="mt-8">
          <span className="mr-5 font-medium">Learn at your own schedule</span>
          <span className="mr-5 font-medium">Practical learning</span>
          <span className="mr-5 font-medium">
            Government - certified online training
          </span>
        </div>
        <div className="flex mt-16 justify-between">
          <div className="w-1/5 py-2 bg-slate-100">
            <h4 className="font-semibold text-xl px-5 my-7">Categories</h4>
            {category.map((category) => (
              <>
                {category === selectedCate ? (
                  <h4
                    className="font-medium my-5 px-5 border-l-4 bg-blue-200 py-3 flex justify-between items-center border-l-blue-900"
                  >
                    {category}
                    <KeyboardArrowRightIcon />
                  </h4>
                ) : (
                  <h4
                    onClick={() => setCate(category)}
                    className="font-medium my-5 px-5"
                  >
                    {category}
                  </h4>
                )}
              </>
            ))}
          </div>
          <div className="w-4/5 px-7">
            <h4 className="font-semibold text-xl my-7">{selectedCate}</h4>
            <div className="flex mt-5 flex-wrap">
              {courses.map((course) => (
                <>
                  <div
                    className="shadow-md border rounded ml-3 mb-8"
                    style={{ width: "30%" }}
                  >
                    <img src={course.image} alt="course image" />
                    <div className="px-3">
                      <div className="my-5 text-neutral-300">6 weeks</div>
                      <div className="text-lg font-semibold">
                        {course.title}
                      </div>
                      <div className="text-neutral-300 mt-3 mb-9">
                        <span className="mr-5">
                          <StarIcon className="text-yellow-300" /> 4.3
                        </span>{" "}
                        <span>8.895 learners</span>
                      </div>
                    </div>
                    <div className="bg-blue-300 px-3 py-3 rounded-b-lg">
                      <div className="text-blue-900 font-bold">
                        Know more <KeyboardArrowRightIcon />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
