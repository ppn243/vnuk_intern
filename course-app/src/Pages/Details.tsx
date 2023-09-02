import React from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../Data/Data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const card = Cards.find((c) => c.id === parseInt(id!));
  return (
    <>
      <div className="text-3xl font-bold mt-5 text-center">
        {card?.label + " Intership in Ho Chi Minh at FPT Software"}
      </div>
      <div className="shadow-md my-10 mx-5 p-14">
        <div className="flex justify-between leading-normal">
          <div className="flex">
            <div className="mb-8">
              <div className="border flex items-center px-2 py-1 mb-2">
                <CheckCircleOutlineIcon className="text-lime-500 mr-2" />{" "}
                Actively Hiring
              </div>
              <div className="text-gray-900 font-semibold text-4xl mb-1">
                {card?.label}
              </div>
              <p className="text-gray-400 text-xl text-thin">{card?.title}</p>
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
              src={card?.logo}
              alt="Avatar of Jonathan Reinink"
            />
          </div>
        </div>

        <div className="text-neutral-400 my-5">1000+ applicants</div>

        <div className="text-gray-900 font-semibold text-3xl mb-1">
          About FPT Software
        </div>
        <div className="text-sky-500 my-5">Website</div>
        <p>
          A subsidiary of FPT Corporation – the leading ICT Group in Asia, FPT
          Software is a global technology and IT services provider with
          headquarter in Vietnam.A subsidiary of FPT Corporation – the leading
          ICT Group in Asia, FPT Software is a global technology and IT services
          provider with headquarter in Vietnam.
        </p>
        <div className="border p-3 my-5">
          <div className="font-medium text-lg">Active on IT Land</div>
          <div className="flex text-base my-2 text-gray-400">
            <div className=" mr-5">Hiring since June 2022</div>
            <div className=" mr-5">3 opportunities posted</div>
            <div className=" mr-5">15.000+ candidates hired</div>
          </div>
        </div>

        <div className="text-gray-900 font-semibold text-3xl mt-10 mb-3">
          About The Program
        </div>
        <div className="px-2 mb-1">1.aaaaaaaaaaaaaaaaaaaaaa</div>
        <div className="px-2 mb-1">2.aaaaaaaaaaaaaaaaaaaaaa</div>
        <div className="px-2 mb-1">3.aaaaaaaaaaaaaaaaaaaaaa</div>
        <div className="px-2 mb-1">4.aaaaaaaaaaaaaaaaaaaaaa</div>
        <div className="px-2 mb-1">5.aaaaaaaaaaaaaaaaaaaaaa</div>

        <div className="text-gray-900 font-semibold text-4xl mt-12 mb-3">
          Required Skills
        </div>
        <div className=" mb-5">Python, C++</div>

        <div className="text-gray-900 font-semibold text-4xl mb-3 italic">
          Learn opportunities
        </div>

        <p>
          askdjakjdbkadn,amnasdjkansdlkandl,nf,sdnf,snfd,smdfn,smdnf,smdnf,smdnf,smfn,smdfn,smdfn,smdfn,smnf,smdfn,smdfn,smdfns,mdfns,mdfn,sdfnaskdjakjdbkadn,amnasdjkansdlkandl,nf,
          sdnf,snfd,smdfn,smdnf,smdnf,smdnf,smfn,smdfn,smdfn,smdfn,smnf,smdfn,smdfn,smdfns,mdfns,mdfn,sdfnaskdjakjdbkadn,amnasdjkansdlkandl,nf,sdnf,snfd,smdfn,smdnf,smdnf,smdnf,sm
          fn,smdfn,smdfn,smdfn,smnf,smdfn,smdfn,smdfns,mdfns,mdfn,sdfn
        </p>

        <div className="text-gray-900 font-semibold text-3xl mt-10 mb-3">
          Requirements
        </div>
        <div className="px-2 mb-1">
          1.Available for the work from home internship.{" "}
        </div>
        <div className="px-2 mb-1">
          2.Can start the work between 5th Jul’23 and 20th Jul’23.{" "}
        </div>
        <div className="px-2 mb-1">3.Available for duration of 4 months.</div>
        <div className="px-2 mb-1">4.Have relevant skills and interests.</div>

        <div className="text-gray-900 font-semibold text-3xl mt-10 mb-3">
          Rewards and incentives
        </div>
        <div className="px-2 mb-1">
          1.Certificates: Get a certificate of appreciation from FPT Software.
        </div>
        <div className="px-2 mb-1">
          2.Online certified courses, premium e-degrees and mighty bundles to
          the top 100 FPT Software.
        </div>
        <div className="px-2 mb-1">
          3.Corporate gifts to top-performing FPT Software.
        </div>

        <div className="text-gray-900 font-semibold text-3xl mt-10 mb-3">
          Perks
        </div>
        <div className="flex text-base my-2 text-gray-400">
          <div className="bg-gray-200 p-2 mr-5">Hiring since June 2022</div>
          <div className="bg-gray-200 p-2 mr-5">3 opportunities posted</div>
          <div className="bg-gray-200 p-2 mr-5">15.000+ candidates hired</div>
        </div>

        <div className="text-gray-900 font-semibold text-3xl mt-10 mb-3">
          Selection procedure
        </div>
        <div>
          The selection procedure will be based on the response and if required
          we will take interviews.
        </div>

        <div className="text-gray-900 font-semibold text-3xl mt-10 mb-3">
          Number of openings
        </div>
        <div>2.500</div>
        <div className="text-center">
          <Link to="Apply">
            <button className="m-auto bg-blue-900 rounded-lg px-16 hover:text-blue-900 hover:bg-white border border-blue-900 py-4 mt-20 mb-3 font-sans text-2xl text-white">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
