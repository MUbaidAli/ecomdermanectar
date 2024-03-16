import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import SuperComponent from "./SuperComponent";
import { ToastContainer } from "react-toastify";
import Loading from "../app/loading";
function DashLayout({ label, children }) {
  return (
    <div>
      {/* <Header />
  <SideNav /> */}

      <div className="w-full h-screen flex  bg-gray-50 overflow-hidden">
        <AdminSidebar />
        <div className="w-full h-full ">
          <AdminNavbar />
          <div className="p-4 sm:ml-64">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {" "}
              <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                {label}
              </span>
            </h1>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 overflow-y-auto h-[450px]">
              <div className=" flex justify-center align-center flex-wrap ">
                {children}
              </div>
              {/* <div className="mt-4">Statistics</div>
              <hr />
              <div className="mt-4">Statistics</div>

              <hr />
              <div className="h-full mb-4 rounded bg-gray-50 dark:bg-gray-800">
                ProductTable
              </div> */}
            </div>
          </div>
          {/* <div className="w-full md:w-[70%] h-5/6  flex flex-wrap items-start md:justify-end justify-center overflow-y-auto  px-4 py-2 md:ml-[28%]">
            {categoryLoading || productLoading ? (
              <Loading />
            ) : (
              <SuperComponent />
            )}
          </div> */}
          {/* <div className="w-full md:w-[70%] h-5/6  flex flex-wrap items-start md:justify-end justify-center overflow-y-auto  px-4 py-2 md:ml-[28%]">
            {categoryLoading || productLoading ? (
              <Loading />
            ) : (
              <SuperComponent />
            )}
          </div> */}
        </div>
        <ToastContainer />
      </div>

      {/* <div className="p-4 sm:ml-64">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {" "}
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            {label.toUpperCase()}
          </span>
        </h1>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div>{children}</div>
          <div className="mt-4">Statistics</div>
          <hr />
          <div className="mt-4">Statistics</div>

          <hr />
          <div className="h-full mb-4 rounded bg-gray-50 dark:bg-gray-800">
            ProductTable
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default DashLayout;
