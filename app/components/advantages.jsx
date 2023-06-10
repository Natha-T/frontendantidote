import React from "react";

export default function Advantages() {
  return (
    <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          Community-driven project
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          The team is committed to working with the community to shape the
          future of the project.
        </p>
      </div>
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          Transparent project
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          The team will be open about their plans and will keep the community
          updated on their progress.The team will be open about their plans and
          will keep the community updated on their progress.
        </p>
      </div>
      <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          Decentralized project
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          The team will not have control over the project after it is launched.
          The community will be in control of the project.
        </p>
      </div>
    </div>
  );
}
