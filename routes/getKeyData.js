const axios = require("axios");

async function getKeyData(symbol) {
  try {
    const response = await axios.get(
      `https://api.nasdaq.com/api/quote/${symbol}/summary`,
      {
        params: {
          assetclass: "stocks",
        },
        headers: {
          authority: "api.nasdaq.com",
          accept: "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          origin: "https://www.nasdaq.com",
          referer: "https://www.nasdaq.com/",
          "sec-ch-ua":
            '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    );
  } catch (error) {
    console.log("Error" + error);
  }
}
