import { useState, useEffect } from "react";
import { getBtcData } from "../api/coinbase";
import { closingPriceData } from "../api/coinbaseFormatter";

function HistoricalPriceChart() {
  const [historicalPrice, setHistoricalData] = useState<number[] | null>(null);
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
      {historicalPrice?.map((closePrice, i) => {
        return <div key={i}> {closePrice}</div>;
      })}
    </div>
  );
}

export default HistoricalPriceChart;
