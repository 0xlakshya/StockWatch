import Image from "next/image";
import { Inter } from "next/font/google";

export default function Login() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className="">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Profile
          </h5>
          <p className="font-normal text-gray-700 "></p>
        </div>
      </div>
    </main>
  );
}
