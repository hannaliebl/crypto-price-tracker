// https://docs.pro.coinbase.com/#get-historic-rates

// The granularity field must be one of the following values: {60, 300, 900, 3600, 21600, 86400}. 
// Otherwise, your request will be rejected. These values correspond to timeslices representing 
// one minute, five minutes, fifteen minutes, one hour, six hours, and one day, respectively.

// If data points are readily available, your response may contain as many as 300 candles and some 
// of those candles may precede your declared start value.

// The maximum number of data points for a single request is 300 candles. If your selection of 
// start/end time and granularity will result in more than 300 data points, your request will 
// be rejected. If you wish to retrieve fine granularity data over a larger time range, you 
// will need to make multiple requests with new start/end ranges.

// Each bucket is an array of the following information:

// time - bucket start time (unix time epoch)
// low - lowest price during the bucket interval
// high - highest price during the bucket interval
// open - opening price (first trade) in the bucket interval
// close - closing price (last trade) in the bucket interval
// volume - volume of trading activity during the bucket interval

const BASE_API = "https://api.pro.coinbase.com/products/";

export type coinbaseHistoricalData = number[][]

// for now, just last 300 days
export async function getBtcData(): Promise<coinbaseHistoricalData> {
  return await (
    await fetch(
      `${BASE_API}BTC-USD/candles?granularity=86400`
    )
  ).json();
}