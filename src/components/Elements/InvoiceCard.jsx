import React from "react";
import rightArrow from "../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { InvoiceStatus } from "./InvoiceStatus";

export const InvoiceCard = ({ invoice }) => {
  return (
    <>
      {/* Big Screen */}
      <Link
        to={`invoice?${invoice.id}`}
        className="hidden md:flex cursor-pointer duration-100 ease-in-out hover:border border-purple-500 py-4 shadow-sm px-6 dark:bg-[#1E2139] bg-white rounded-lg items-center justify-between"
      >
        <div className="flex items-center">
          <h2 className="dark:text-white">
            <span className="text-[#7e88c3]">#</span>
            {invoice.id}
          </h2>

          <h2 className="text-sm text-gray-400 font-light ml-6">
            Due {invoice.paymentDue}
          </h2>

          <h2 className="text-sm text-gray-400 font-light ml-10">
            {invoice.clientName}
          </h2>
        </div>

        <div className="flex items-center">
          <h1 className="text-xl mr-8 dark:text-white">£ {invoice.total}</h1>
          <InvoiceStatus type={invoice.status} />
          <img src={rightArrow} className="ml-4" />
        </div>
      </Link>

      {/* Phone Screen */}
      <Link
        to={`invoice?${invoice.id}`}
        className="md:hidden flex cursor-pointer hover:border border-purple-500 py-4 shadow-sm px-6 dark:bg-[#1E2139] bg-white rounded-lg items-center justify-between"
      >
        <div className="flex flex-col">
          <h2 className="dark:text-white">
            <span className="text-[#7e88c3]">#</span>
            {invoice.id}
          </h2>

          <h2 className="text-sm text-gray-400 font-light mt-3">
            Due {invoice.paymentDue}
          </h2>
          <h1 className="text-xl dark:text-white">£ {invoice.total}</h1>
        </div>

        <div className="flex flex-col min-w-[130px]">
          <h2 className="text-sm mb-4 text-gray-400 font-light text-center lg:text-right">
            {invoice.clientName}
          </h2>
          <InvoiceStatus type={invoice.status} />
        </div>
      </Link>
    </>
  );
};
