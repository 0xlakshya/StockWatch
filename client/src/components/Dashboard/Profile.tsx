import React from "react";

function Profile(props: {
  email?: string | undefined;
  password?: string | undefined;
  user_name?: string | undefined;
  broker?: string | undefined;
  user_type?: string | undefined;
}) {
  return (
    <div className="">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-full max-w-sm mx-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Profile
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Email: {props?.email}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          User Name: {props?.user_name}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Broker: {props?.broker}
        </p>{" "}
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Account Type: {props?.user_type}
        </p>
      </div>
    </div>
  );
}

export default Profile;
