import { useAuth } from "@/contexts/AuthContext";
import { useDashboard } from "@/contexts/DashboardContext";
import PlaceOrder from "../components/Dashboard/PlaceOrder";

export default function Home() {
  const auth = useAuth();
  const dashboard = useDashboard();
  return (
    <main className={` grid grid-cols-[400px,1fr]   gap-10 flex-wrap mx-5  `}>
      <div className="">
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-full max-w-sm mx-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Profile
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Email: {auth?.user?.email}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            User Name: {auth?.user?.user_name}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Broker: {auth?.user?.broker}
          </p>{" "}
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Account Type: {auth?.user?.user_type}
          </p>
        </div>
      </div>

      <div
        className={`${
          !dashboard?.holdings && "animate-pulse "
        } p-6 bg-white border border-gray-200 rounded-lg shadow`}
      >
        {dashboard?.holdings?.map((i) => (
          <h1 key={i.tradingsymbol}>{i.tradingsymbol}</h1>
        ))}
      </div>

      <div
        className={`${
          !dashboard?.holdings && "animate-pulse "
        } p-6 bg-white border border-gray-200 rounded-lg shadow`}
      >
        <PlaceOrder submitOrder={dashboard?.placeOrder} />
      </div>
      <div className="bg-gray-800">
        <h1>s</h1>
      </div>
    </main>
  );
}
