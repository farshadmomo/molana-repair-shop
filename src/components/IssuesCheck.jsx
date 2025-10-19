import React from "react";
import CarIssueForm from "./CarIssueForm";

const IssuesInput = () => {
  return (
    <div className="flex flex-col items-center">
      <CarIssueForm />
      <h2 className="text-2xl font-bold mb-4">مشکلات خودرو</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <label className="block mb-2">برند خودرو</label>
        <input
          type="text"
          placeholder="مثال: تویوتا، هیوندای"
          className="border rounded p-2 w-64"
        />
        <label className="block mb-2">کیلومتری فعلی</label>
        <input
          type="text"
          placeholder="مثال: 150000"
          className="border rounded p-2 w-64"
        />
        <label className="block mb-2">سال ساخت خودرو</label>
        <input
          type="text"
          placeholder="مثال: 2015"
          className="border rounded p-2 w-64"
        />
      </div>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        ارسال
      </button>
    </div>
  );
};

export default IssuesInput;
