type placeOrderFormDataModel = {
  symbol: string;
  quantity: number;
  price: string;
};

type IHoldings = {
  tradingsymbol: string;
  exchange: string;
  isin: string;
  quantity: string;
  authorised_date: string;
  average_price: string;
  last_price: string;
  close_price: string;
  pnl: string;
  day_change: string;
  day_change_percentage: string;
};

type IHistorical = {
  date: string;
  price: number;
  instrument_name: string;
};
