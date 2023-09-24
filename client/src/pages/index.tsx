import { useAuth } from "@/contexts/AuthContext";
import { useDashboard } from "@/contexts/DashboardContext";
import PlaceOrder from "../components/Dashboard/PlaceOrder";
import Profile from "@/components/Dashboard/Profile";
import HoldingsTable from "../components/Dashboard/HoldingsTable";
import HistoricalGraph from "@/components/Dashboard/HistoricalGraph";

export default function Home() {
  const auth = useAuth();
  const dashboard = useDashboard();
  return (
    <main className={` grid grid-cols-[400px,1fr]   gap-10 flex-wrap mx-5  `}>
      <Profile {...auth?.user} />
      <div
        className={`${
          !dashboard?.holdings && "animate-pulse "
        } p-6 bg-white border border-gray-200 rounded-lg shadow`}
      >
        <HoldingsTable data={dashboard?.holdings} />
      </div>

      <div
        className={`${
          !dashboard?.holdings && "animate-pulse "
        } p-6 bg-white border border-gray-200 rounded-lg shadow`}
      >
        <PlaceOrder submitOrder={dashboard?.placeOrder} />
      </div>

      <div
        className={`${
          !dashboard?.historical_prices && "animate-pulse "
        } p-6 bg-white border border-gray-200 rounded-lg shadow`}
      >
        <HistoricalGraph data={dashboard?.historical_prices} />
      </div>
    </main>
  );
}
