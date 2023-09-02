import React from "react";
import CardList from "../Components/CardList";
import AdminImg from "../Images/admin.jpg";

const AdminBookMarks = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/5 text-center bg-blue-900">
          <h1 className="text-white my-10 text-4xl font-extrabold">IT LAND</h1>
          <img
            src={AdminImg}
            alt="admin image"
            className="rounded-full h-40 m-auto mb-1"
          />
          <div className="text-white">ADMIN</div>

          <div className="bg-white text-right mt-20 py-3 px-3">
            <div className="text-blue-900 text-xl border font-bold">Internships</div>
          </div>
        </div>
        <div className="w-4/5">
          <div className="w-4/5 m-auto mt-20">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBookMarks;
