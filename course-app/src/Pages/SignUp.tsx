import React from "react";
import { SignUpModal } from "../Components/Modals";

const SignUp = () => {
  return <>
        <div className="flex flex-col text-center">
            <h1 className="font-black text-5xl mb-6">Sign-up and <span className="text-blue-900">appy for free</span></h1>
            <p className="text-lg">100.000+ companies are hiring on IT LAND </p>
        </div>
        <div className="my-14 shadow-xl w-1/3 mx-auto border p-10">
            <SignUpModal />
        </div>
  </>;
};

export default SignUp;
