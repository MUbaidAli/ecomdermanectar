"use client";

function page() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {" "}
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            DASHBOARD
          </span>
        </h1>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="mt-4">Statistics</div>
          <hr />
          <div className="mt-4">Statistics</div>

          <hr />
          <div className="h-full mb-4 rounded bg-gray-50 dark:bg-gray-800">
            ProductTable
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
