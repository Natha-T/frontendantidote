"use client";
import React from "react";
import { useState } from "react";
export default function DaiV() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="bg-slate-500 rounded-md ">
      <div className="group rounded-md shadow-xl p-8 flex text-center items-center justify-between bg-slate-500 w-full">
        <div className="flex items-center gap-2">
          <a>
            <svg
              className="w-14 h-12"
              viewBox="0 0 559 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M279.154 1.17835L348.029 71.7136L174.595 245.147L105.72 176.272L279.154 1.17835Z"
                fill="#F0B90B"
                stroke="#F0B90B"
              />
              <path
                d="M383.712 105.736L452.587 176.272L174.595 454.264L105.72 385.388L383.712 105.736Z"
                fill="#F0B90B"
                stroke="#F0B90B"
              />
              <path
                d="M70.0373 210.295L138.913 280.83L70.0373 349.705L1.16174 280.83L70.0373 210.295Z"
                fill="#F0B90B"
                stroke="#F0B90B"
              />
              <path
                d="M488.27 210.295L557.145 280.83L279.154 558.822L210.278 489.946L488.27 210.295Z"
                fill="#F0B90B"
                stroke="#F0B90B"
              />
            </svg>
          </a>
          <div>
            <p className="text-xl text-white font-semibold">BUSD</p>
            <p className="text-gray-300">BUSD</p>
          </div>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">BUSD</p>
          <p className="text-gray-300">Balance</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">BUSD</p>
          <p className="text-gray-300">Deposited</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">0 ANTI</p>
          <p className="text-gray-300">Earned</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">8 %</p>
          <p className="text-gray-300">APY</p>
        </div>
        <div className="">
          <button
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="btn bg-[#95b677] dropdown hover:bg-lime-300 p-4 rounded-md"
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.16992 10.7021L0.529297 4.06152C0.0703125 3.60254 0.0703125 2.86035 0.529297 2.40625L1.63281 1.30273C2.0918 0.84375 2.83398 0.84375 3.28809 1.30273L7.99512 6.00977L12.7021 1.30273C13.1611 0.84375 13.9033 0.84375 14.3574 1.30273L15.4609 2.40625C15.9199 2.86523 15.9199 3.60742 15.4609 4.06152L8.82031 10.7021C8.37109 11.1611 7.62891 11.1611 7.16992 10.7021Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          "w-full divide-x-2  px-6 pt-10 text-white flex justify-between" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div className="w-1/2  pb-6 text-end p-4">
          <label className="w-full">
            <h1 className="pb-1">Balance: 0 USDT</h1>
            <input
              type="number"
              className="w-full p-2  rounded-lg text-black border placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:ring-lime-200 focus:border-transparent border-gray-300"
            />
          </label>
          <fieldset className="space-y-1 w-full pt-4 dark:text-gray-100">
            <input
              type="range"
              className="w-full accent-lime-400"
              min="1"
              max="5"
            />
            <div
              aria-hidden="true"
              className="w-full flex justify-between px-1"
            >
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </fieldset>
          <div className="flex justify-center pt-10">
            <button className=" px-4 py-3 bg-[#95b677] rounded-md">
              APPROVE
            </button>
          </div>
        </div>
        <div className="w-1/2 text-end  pb-6 p-4">
          <label className="w-full">
            <h1 className="pb-1">Deposit: 0 USDT</h1>
            <input
              type="number"
              className="w-full p-2  rounded-lg text-black border placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:ring-lime-200 focus:border-transparent border-gray-300"
            />
          </label>
          <fieldset className="space-y-1 w-full pt-4 dark:text-gray-100">
            <input
              type="range"
              className="w-full accent-lime-400"
              min="1"
              max="5"
            />
            <div
              aria-hidden="true"
              className="w-full flex justify-between px-1"
            >
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </fieldset>
          <div className="flex justify-center gap-6 pt-10">
            <button className=" px-4 py-3 bg-[#95b677] rounded-md">
              WITHDRAW
            </button>
            <button className=" px-4 py-3 bg-[#95b677] rounded-md">
              CLAIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
