import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { API } from "@/config";
import toast from "react-hot-toast";

interface DashboardContextModel {
  holdings: IHoldings[] | null;
  historical_prices: IHistorical[] | null;
  placeOrder: (data: placeOrderFormDataModel) => void;
}

export const DashboardContext = createContext<DashboardContextModel | null>(
  null
);

export function useDashboard() {
  return useContext(DashboardContext);
}
export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const auth = useAuth();
  const [holdings, setHoldings] = useState<IHoldings[] | null>(null);
  const [historical, setHistorical] = useState<IHistorical[] | null>(null);
  const fetchData = async () => {
    if (
      auth?.isAuthenticated &&
      localStorage.getItem("token") &&
      !auth?.authLoading
    ) {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data: holdingsData } = await axios.get(
          `${API}/portfolio/holdings`
        );
        const { data: historicalData } = await axios.get(
          `${API}/portfolio/historical_prices`
        );
        setHoldings(holdingsData.data);
        setHistorical(historicalData.data);
      } catch (e: any) {
        console.log("error in fetching data ", e);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [auth?.isAuthenticated]);

  const placeOrder = async (payload: placeOrderFormDataModel) => {
    try {
      const { data } = await axios.post(`${API}/order/place_order`, payload);
      toast.success("Order placed!");
      return data;
    } catch (e: any) {
      console.log("error in fetching data ", e);
    }
  };

  const value = {
    historical_prices: historical,
    holdings,
    placeOrder,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
