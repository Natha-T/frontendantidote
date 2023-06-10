"use client";
import React from "react";
import { useState } from "react";
export default function UsdtV() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="bg-slate-500 rounded-md ">
      <div className="group rounded-md shadow-xl p-8 flex text-center items-center justify-between bg-slate-500 w-full">
        <div className="flex items-center gap-2">
          <a>
            <svg
              className="w-14 h-12"
              viewBox="0 0 644 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_402_6)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M117.872 2.75003L0.493068 249.304C0.0464085 250.221 -0.0951351 251.257 0.0891367 252.26C0.273408 253.264 0.773829 254.181 1.51722 254.88L318.529 558.653C319.429 559.517 320.629 559.999 321.876 559.999C323.124 559.999 324.323 559.517 325.224 558.653L642.235 254.899C642.979 254.2 643.479 253.282 643.663 252.279C643.848 251.276 643.706 250.24 643.259 249.323L525.881 2.76899C525.502 1.94096 524.893 1.23951 524.126 0.748479C523.359 0.257447 522.467 -0.00239741 521.557 8.20204e-07H122.234C121.319 -0.0113817 120.42 0.242203 119.646 0.730166C118.872 1.21813 118.256 1.91962 117.872 2.75003Z"
                  fill="#50AF95"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M362.605 274.623C360.329 274.794 348.571 275.496 322.341 275.496C301.479 275.496 286.667 274.87 281.47 274.623C200.847 271.077 140.669 257.042 140.669 240.238C140.669 223.435 200.847 209.419 281.47 205.816V260.646C286.742 261.025 301.839 261.916 322.701 261.916C347.736 261.916 360.272 260.873 362.529 260.665V205.854C442.982 209.438 503.027 223.473 503.027 240.238C503.027 257.004 443.001 271.039 362.529 274.604L362.605 274.623ZM362.605 200.183V151.119H474.882V76.299H169.193V151.119H281.451V200.164C190.207 204.355 121.589 222.43 121.589 244.088C121.589 265.747 190.207 283.803 281.451 288.013V445.239H362.586V287.956C453.621 283.765 522.126 265.709 522.126 244.07C522.126 222.43 453.678 204.374 362.586 200.164L362.605 200.183Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_402_6">
                  <rect width="643.753" height="560" fill="white" />
                </clipPath>
              </defs>
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
