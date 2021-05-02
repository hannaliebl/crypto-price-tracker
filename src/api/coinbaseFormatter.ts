import type { coinbaseHistoricalData } from "./coinbase";

export type HistoricalPriceData = {
  closing: number,
  date: number
}

export async function closingPriceData(apiRes: Promise<coinbaseHistoricalData>): Promise<HistoricalPriceData[]> {
  const data = await apiRes;
  return data.map((dayData) => {
    return { closing: dayData[4], date: dayData[0] }
  })
}