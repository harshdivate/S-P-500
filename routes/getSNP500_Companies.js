const puppeteer = require("puppeteer");
const { insertSNP500 } = require("./db.js");

const url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";

async function getSNP() {
  const browser = await puppeteer.launch({
    headless: false,
  });

  try {
    const page = await browser.newPage();
    await page.goto(
      "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies",
      {
        waitUntil: "domcontentloaded",
      }
    );
    await page.waitForSelector("#constituents");
    const data = await page.$eval("#constituents tbody", (tableRow) => {
      return [...tableRow.querySelectorAll("tr")].map((tableData) => {
        return [...tableData.querySelectorAll("td")].map((data) => {
          return data.textContent.trim();
        });
      });
    });
    for (let i = 0; i < data.length; i++) {
      const organization = data[i];
      const dataObject = {
        symbol: organization[0],
        name: organization[1],
        sector: organization[2],
        headQuater: organization[4],
        cik: organization[6],
        founded: organization[7],
      };
      const result = await insertSNP500(dataObject);
    }
    browser.close();
  } catch (error) {
    browser.close();
    console.log("Error" + error);
  }
}

getSNP();
