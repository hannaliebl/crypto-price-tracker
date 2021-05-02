import { useState, useEffect } from "react";
import { getBtcData } from "../api/coinbase";
import { closingPriceData } from "../api/coinbaseFormatter";

import type { HistoricalPriceData } from "../api/coinbaseFormatter";

function HistoricalPriceChart() {
  const [historicalPrice, setHistoricalData] = useState<
    HistoricalPriceData[] | null
  >(null);
  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const historicalData = getBtcData();
        const foo = await closingPriceData(historicalData);
        console.log("foo", foo);
        setHistoricalData(foo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistoricalData();
  }, []);
  return (
    <div>
      {historicalPrice?.map((closePriceData, i) => {
        return (
          <div key={i}>
            {" "}
            {closePriceData.date}: {closePriceData.closing}
          </div>
        );
      })}
    </div>
  );
}

export default HistoricalPriceChart;
