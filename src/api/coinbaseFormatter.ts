import type { coinbaseHistoricalData } from "./coinbase";

export async function closingPriceData(apiRes: Promise<coinbaseHistoricalData>): Promise<number[]> {
  const data = await apiRes;
  return data.map((dayData) => {
    return dayData[4]
  })
}