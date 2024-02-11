## API to fetch Key-Date of Company

```
import axios from 'axios';

const response = await axios.get('https://api.nasdaq.com/api/quote/ACN/summary', {
  params: {
    'assetclass': 'stocks'
  },
  headers: {
    'authority': 'api.nasdaq.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'origin': 'https://www.nasdaq.com',
    'referer': 'https://www.nasdaq.com/',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});
```

```
Response :
```

## API to get Divident Details

```
import axios from 'axios';

const response = await axios.get('https://api.nasdaq.com/api/quote/ACN/dividends', {
  params: {
    'assetclass': 'stocks'
  },
  headers: {
    'authority': 'api.nasdaq.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'origin': 'https://www.nasdaq.com',
    'referer': 'https://www.nasdaq.com/',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});
```

```
Response
{
    "data": {
        "dividendHeaderValues": [
            {
                "label": "Ex-Dividend Date",
                "value": "01/17/2024"
            },
            {
                "label": "Dividend Yield",
                "value": "1.39%"
            },
            {
                "label": "Annual Dividend",
                "value": "$5.16"
            },
            {
                "label": "P/E Ratio",
                "value": "34.45"
            }
        ],
        "exDividendDate": "01/17/2024",
        "dividendPaymentDate": "02/15/2024",
        "yield": "1.39%",
        "annualizedDividend": "5.16",
        "payoutRatio": "34.45",
        "dividends": {
            "asOf": null,
            "headers": {
                "exOrEffDate": "Ex/EFF Date",
                "type": "Type",
                "amount": "Cash Amount",
                "declarationDate": "Declaration Date",
                "recordDate": "Record Date",
                "paymentDate": "Payment Date"
            },
            "rows": [
                {
                    "exOrEffDate": "01/17/2024",
                    "type": "Cash",
                    "amount": "$1.29",
                    "declarationDate": "11/15/2023",
                    "recordDate": "01/18/2024",
                    "paymentDate": "02/15/2024",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/11/2023",
                    "type": "Cash",
                    "amount": "$1.29",
                    "declarationDate": "09/28/2023",
                    "recordDate": "10/12/2023",
                    "paymentDate": "11/15/2023",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "07/12/2023",
                    "type": "Cash",
                    "amount": "$1.12",
                    "declarationDate": "05/15/2023",
                    "recordDate": "07/13/2023",
                    "paymentDate": "08/15/2023",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/12/2023",
                    "type": "Cash",
                    "amount": "$1.12",
                    "declarationDate": "03/23/2023",
                    "recordDate": "04/13/2023",
                    "paymentDate": "05/15/2023",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "01/11/2023",
                    "type": "Cash",
                    "amount": "$1.12",
                    "declarationDate": "12/16/2022",
                    "recordDate": "01/12/2023",
                    "paymentDate": "02/15/2023",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "01/09/2023",
                    "type": "Cash",
                    "amount": "$1.12",
                    "declarationDate": "12/16/2022",
                    "recordDate": "01/10/2023",
                    "paymentDate": "02/15/2023",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/12/2022",
                    "type": "Cash",
                    "amount": "$1.12",
                    "declarationDate": "09/22/2022",
                    "recordDate": "10/13/2022",
                    "paymentDate": "11/15/2022",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "07/13/2022",
                    "type": "Cash",
                    "amount": "$0.97",
                    "declarationDate": "05/13/2022",
                    "recordDate": "07/14/2022",
                    "paymentDate": "08/15/2022",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/13/2022",
                    "type": "Cash",
                    "amount": "$0.97",
                    "declarationDate": "03/17/2022",
                    "recordDate": "04/14/2022",
                    "paymentDate": "05/13/2022",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "01/12/2022",
                    "type": "Cash",
                    "amount": "$0.97",
                    "declarationDate": "N/A",
                    "recordDate": "01/13/2022",
                    "paymentDate": "02/15/2022",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/13/2021",
                    "type": "Cash",
                    "amount": "$0.97",
                    "declarationDate": "09/23/2021",
                    "recordDate": "10/14/2021",
                    "paymentDate": "11/15/2021",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "07/14/2021",
                    "type": "Cash",
                    "amount": "$0.88",
                    "declarationDate": "06/24/2021",
                    "recordDate": "07/15/2021",
                    "paymentDate": "08/13/2021",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/14/2021",
                    "type": "Cash",
                    "amount": "$0.88",
                    "declarationDate": "03/17/2021",
                    "recordDate": "04/15/2021",
                    "paymentDate": "05/14/2021",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "01/13/2021",
                    "type": "Cash",
                    "amount": "$0.88",
                    "declarationDate": "12/17/2020",
                    "recordDate": "01/14/2021",
                    "paymentDate": "02/12/2021",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/09/2020",
                    "type": "Cash",
                    "amount": "$0.88",
                    "declarationDate": "09/24/2020",
                    "recordDate": "10/13/2020",
                    "paymentDate": "11/13/2020",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "07/15/2020",
                    "type": "Cash",
                    "amount": "$0.80",
                    "declarationDate": "06/24/2020",
                    "recordDate": "07/16/2020",
                    "paymentDate": "08/14/2020",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/15/2020",
                    "type": "Cash",
                    "amount": "$0.80",
                    "declarationDate": "03/18/2020",
                    "recordDate": "04/16/2020",
                    "paymentDate": "05/15/2020",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "01/15/2020",
                    "type": "Cash",
                    "amount": "$0.80",
                    "declarationDate": "12/19/2019",
                    "recordDate": "01/16/2020",
                    "paymentDate": "02/14/2020",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/16/2019",
                    "type": "Cash",
                    "amount": "$0.80",
                    "declarationDate": "09/26/2019",
                    "recordDate": "10/17/2019",
                    "paymentDate": "11/15/2019",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/10/2019",
                    "type": "Cash",
                    "amount": "$1.46",
                    "declarationDate": "03/28/2019",
                    "recordDate": "04/11/2019",
                    "paymentDate": "05/15/2019",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/17/2018",
                    "type": "Cash",
                    "amount": "$1.46",
                    "declarationDate": "09/27/2018",
                    "recordDate": "10/18/2018",
                    "paymentDate": "11/15/2018",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/11/2018",
                    "type": "Cash",
                    "amount": "$1.33",
                    "declarationDate": "03/22/2018",
                    "recordDate": "04/12/2018",
                    "paymentDate": "05/15/2018",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/18/2017",
                    "type": "Cash",
                    "amount": "$1.33",
                    "declarationDate": "09/28/2017",
                    "recordDate": "10/19/2017",
                    "paymentDate": "11/15/2017",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/11/2017",
                    "type": "Cash",
                    "amount": "$1.21",
                    "declarationDate": "03/23/2017",
                    "recordDate": "04/13/2017",
                    "paymentDate": "05/15/2017",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/19/2016",
                    "type": "Cash",
                    "amount": "$1.21",
                    "declarationDate": "09/29/2016",
                    "recordDate": "10/21/2016",
                    "paymentDate": "11/15/2016",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/13/2016",
                    "type": "Cash",
                    "amount": "$1.10",
                    "declarationDate": "03/24/2016",
                    "recordDate": "04/15/2016",
                    "paymentDate": "05/13/2016",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/14/2015",
                    "type": "Cash",
                    "amount": "$1.10",
                    "declarationDate": "09/24/2015",
                    "recordDate": "10/16/2015",
                    "paymentDate": "11/13/2015",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/08/2015",
                    "type": "Cash",
                    "amount": "$1.02",
                    "declarationDate": "03/25/2015",
                    "recordDate": "04/10/2015",
                    "paymentDate": "05/15/2015",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/15/2014",
                    "type": "Cash",
                    "amount": "$1.02",
                    "declarationDate": "09/23/2014",
                    "recordDate": "10/17/2014",
                    "paymentDate": "11/17/2014",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/09/2014",
                    "type": "Cash",
                    "amount": "$0.93",
                    "declarationDate": "03/27/2014",
                    "recordDate": "04/11/2014",
                    "paymentDate": "05/15/2014",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/09/2013",
                    "type": "Cash",
                    "amount": "$0.93",
                    "declarationDate": "09/26/2013",
                    "recordDate": "10/11/2013",
                    "paymentDate": "11/15/2013",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/10/2013",
                    "type": "Cash",
                    "amount": "$0.81",
                    "declarationDate": "03/27/2013",
                    "recordDate": "04/12/2013",
                    "paymentDate": "05/15/2013",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/10/2012",
                    "type": "Cash",
                    "amount": "$0.81",
                    "declarationDate": "09/27/2012",
                    "recordDate": "10/12/2012",
                    "paymentDate": "11/15/2012",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/11/2012",
                    "type": "Cash",
                    "amount": "$0.675",
                    "declarationDate": "03/22/2012",
                    "recordDate": "04/13/2012",
                    "paymentDate": "05/15/2012",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/12/2011",
                    "type": "Cash",
                    "amount": "$0.675",
                    "declarationDate": "09/27/2011",
                    "recordDate": "10/14/2011",
                    "paymentDate": "11/15/2011",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/13/2011",
                    "type": "Cash",
                    "amount": "$0.45",
                    "declarationDate": "03/24/2011",
                    "recordDate": "04/15/2011",
                    "paymentDate": "05/13/2011",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/13/2010",
                    "type": "Cash",
                    "amount": "$0.45",
                    "declarationDate": "09/30/2010",
                    "recordDate": "10/15/2010",
                    "paymentDate": "11/15/2010",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "04/14/2010",
                    "type": "Cash",
                    "amount": "$0.375",
                    "declarationDate": "03/25/2010",
                    "recordDate": "04/16/2010",
                    "paymentDate": "05/14/2010",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/14/2009",
                    "type": "Cash",
                    "amount": "$0.75",
                    "declarationDate": "10/01/2009",
                    "recordDate": "10/16/2009",
                    "paymentDate": "11/16/2009",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/08/2008",
                    "type": "Cash",
                    "amount": "$0.50",
                    "declarationDate": "09/25/2008",
                    "recordDate": "10/10/2008",
                    "paymentDate": "11/17/2008",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/08/2008",
                    "type": "Cash",
                    "amount": "$0.50",
                    "declarationDate": "09/25/2008",
                    "recordDate": "10/10/2008",
                    "paymentDate": "11/17/2008",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/10/2007",
                    "type": "Cash",
                    "amount": "$0.42",
                    "declarationDate": "09/27/2007",
                    "recordDate": "10/12/2007",
                    "paymentDate": "11/15/2007",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/11/2006",
                    "type": "Cash",
                    "amount": "$0.35",
                    "declarationDate": "N/A",
                    "recordDate": "10/13/2006",
                    "paymentDate": "11/15/2006",
                    "currency": "USD"
                },
                {
                    "exOrEffDate": "10/13/2005",
                    "type": "Cash",
                    "amount": "$0.30",
                    "declarationDate": "10/06/2005",
                    "recordDate": "10/17/2005",
                    "paymentDate": "11/15/2005",
                    "currency": "USD"
                }
            ]
        }
    },
    "message": null,
    "status": {
        "rCode": 200,
        "bCodeMessage": null,
        "developerMessage": null
    }
}
```

## API to get Financial of a company

```
import axios from 'axios';

const response = await axios.get('https://api.nasdaq.com/api/company/ACN/financials', {
  params: {
    'frequency': '1'
  },
  headers: {
    'authority': 'api.nasdaq.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'origin': 'https://www.nasdaq.com',
    'referer': 'https://www.nasdaq.com/',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

```

### Here the Date contains 4 parts namely :

Income Statement
Balance Sheet
Cash Flow
Financial Ratios

```
Response:

{
    "data": {
        "symbol": "ACN",
        "tabs": {
            "incomeStatementTable": "Income Statement",
            "balanceSheetTable": "Balance Sheet",
            "cashFlowTable": "Cash Flow",
            "financialRatiosTable": "Financial Ratios"
        },
        "incomeStatementTable": {
            "asOf": null,
            "headers": {
                "value1": "Period Ending:",
                "value2": "8/31/2023",
                "value3": "8/31/2022",
                "value4": "8/31/2021",
                "value5": "8/31/2020"
            },
            "rows": [
                {
                    "value1": "Total Revenue",
                    "value2": "$64,111,745",
                    "value3": "$61,594,305",
                    "value4": "$50,533,389",
                    "value5": "$44,327,039"
                },
                {
                    "value1": "Cost of Revenue",
                    "value2": "$43,380,138",
                    "value3": "$41,892,766",
                    "value4": "$34,169,261",
                    "value5": "$30,350,881"
                },
                {
                    "value1": "Gross Profit",
                    "value2": "$20,731,607",
                    "value3": "$19,701,539",
                    "value4": "$16,364,128",
                    "value5": "$13,976,158"
                },
                {
                    "value1": "Operating Expenses",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Research and Development",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Sales, General and Admin.",
                    "value2": "$11,921,718",
                    "value3": "$10,334,358",
                    "value4": "$8,742,599",
                    "value5": "$7,462,514"
                },
                {
                    "value1": "Non-Recurring Items",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Operating Items",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Operating Income",
                    "value2": "$8,809,889",
                    "value3": "$9,367,181",
                    "value4": "$7,621,529",
                    "value5": "$6,513,644"
                },
                {
                    "value1": "Add'l income/expense items",
                    "value2": "$376,968",
                    "value3": "-$123,694",
                    "value4": "$199,079",
                    "value5": "$293,758"
                },
                {
                    "value1": "Earnings Before Interest and Tax",
                    "value2": "$9,186,857",
                    "value3": "$9,243,487",
                    "value4": "$7,820,608",
                    "value5": "$6,807,402"
                },
                {
                    "value1": "Interest Expense",
                    "value2": "$47,525",
                    "value3": "$47,320",
                    "value4": "$59,492",
                    "value5": "$33,071"
                },
                {
                    "value1": "Earnings Before Tax",
                    "value2": "$9,139,332",
                    "value3": "$9,196,167",
                    "value4": "$7,761,116",
                    "value5": "$6,774,331"
                },
                {
                    "value1": "Income Tax",
                    "value2": "$2,135,802",
                    "value3": "$2,207,207",
                    "value4": "$1,770,571",
                    "value5": "$1,589,018"
                },
                {
                    "value1": "Minority Interest",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Equity Earnings/Loss Unconsolidated Subsidiary",
                    "value2": "-$131,973",
                    "value3": "-$111,791",
                    "value4": "-$83,736",
                    "value5": "-$77,474"
                },
                {
                    "value1": "Net Income-Cont. Operations",
                    "value2": "$6,871,557",
                    "value3": "$6,877,169",
                    "value4": "$5,906,809",
                    "value5": "$5,107,839"
                },
                {
                    "value1": "Net Income",
                    "value2": "$6,871,557",
                    "value3": "$6,877,169",
                    "value4": "$5,906,809",
                    "value5": "$5,107,839"
                },
                {
                    "value1": "Net Income Applicable to Common Shareholders",
                    "value2": "$6,871,557",
                    "value3": "$6,877,169",
                    "value4": "$5,906,809",
                    "value5": "$5,107,839"
                }
            ]
        },
        "balanceSheetTable": {
            "asOf": null,
            "headers": {
                "value1": "Period Ending:",
                "value2": "8/31/2023",
                "value3": "8/31/2022",
                "value4": "8/31/2021",
                "value5": "8/31/2020"
            },
            "rows": [
                {
                    "value1": "Current Assets",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Cash and Cash Equivalents",
                    "value2": "$9,045,032",
                    "value3": "$7,889,833",
                    "value4": "$8,168,174",
                    "value5": "$8,415,330"
                },
                {
                    "value1": "Short-Term Investments",
                    "value2": "$4,575",
                    "value3": "$3,973",
                    "value4": "$4,294",
                    "value5": "$94,309"
                },
                {
                    "value1": "Net Receivables",
                    "value2": "$12,227,186",
                    "value3": "$11,776,775",
                    "value4": "$9,728,212",
                    "value5": "$7,846,892"
                },
                {
                    "value1": "Inventory",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Current Assets",
                    "value2": "$2,105,138",
                    "value3": "$1,940,290",
                    "value4": "$1,765,831",
                    "value5": "$1,393,225"
                },
                {
                    "value1": "Total Current Assets",
                    "value2": "$23,381,931",
                    "value3": "$21,610,871",
                    "value4": "$19,666,511",
                    "value5": "$17,749,756"
                },
                {
                    "value1": "Long-Term Assets",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Long-Term Investments",
                    "value2": "$197,443",
                    "value3": "$317,972",
                    "value4": "$329,526",
                    "value5": "$324,514"
                },
                {
                    "value1": "Fixed Assets",
                    "value2": "$4,167,486",
                    "value3": "$4,677,675",
                    "value4": "$4,821,624",
                    "value5": "$4,728,914"
                },
                {
                    "value1": "Goodwill",
                    "value2": "$15,573,003",
                    "value3": "$13,133,293",
                    "value4": "$11,125,861",
                    "value5": "$7,709,820"
                },
                {
                    "value1": "Intangible Assets",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Assets",
                    "value2": "$2,918,592",
                    "value3": "$2,714,439",
                    "value4": "$2,493,746",
                    "value5": "$1,689,275"
                },
                {
                    "value1": "Deferred Asset Charges",
                    "value2": "$5,006,850",
                    "value3": "$4,809,140",
                    "value4": "$4,738,575",
                    "value5": "$4,876,314"
                },
                {
                    "value1": "Total Assets",
                    "value2": "$51,245,305",
                    "value3": "$47,263,390",
                    "value4": "$43,175,843",
                    "value5": "$37,078,593"
                },
                {
                    "value1": "Current Liabilities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Accounts Payable",
                    "value2": "$12,306,659",
                    "value3": "$12,328,675",
                    "value4": "$10,723,446",
                    "value5": "$8,261,972"
                },
                {
                    "value1": "Short-Term Debt / Current Portion of Long-Term Debt",
                    "value2": "$104,810",
                    "value3": "$9,175",
                    "value4": "$12,080",
                    "value5": "$7,820"
                },
                {
                    "value1": "Other Current Liabilities",
                    "value2": "$5,597,569",
                    "value3": "$5,185,646",
                    "value4": "$4,973,341",
                    "value5": "$4,392,798"
                },
                {
                    "value1": "Total Current Liabilities",
                    "value2": "$18,009,038",
                    "value3": "$17,523,496",
                    "value4": "$15,708,867",
                    "value5": "$12,662,590"
                },
                {
                    "value1": "Long-Term Debt",
                    "value2": "$43,093",
                    "value3": "$45,893",
                    "value4": "$53,473",
                    "value5": "$54,052"
                },
                {
                    "value1": "Other Liabilities",
                    "value2": "$5,685,347",
                    "value3": "$5,915,614",
                    "value4": "$6,372,673",
                    "value5": "$5,992,144"
                },
                {
                    "value1": "Deferred Liability Charges",
                    "value2": "$1,049,234",
                    "value3": "$1,031,299",
                    "value4": "$943,716",
                    "value5": "$870,634"
                },
                {
                    "value1": "Misc. Stocks",
                    "value2": "$765,754",
                    "value3": "$640,991",
                    "value4": "$567,660",
                    "value5": "$498,637"
                },
                {
                    "value1": "Minority Interest",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Total Liabilities",
                    "value2": "$24,786,712",
                    "value3": "$24,516,302",
                    "value4": "$23,078,729",
                    "value5": "$19,579,420"
                },
                {
                    "value1": "Stock Holders Equity",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Common Stocks",
                    "value2": "$72",
                    "value3": "$72",
                    "value4": "$72",
                    "value5": "$72"
                },
                {
                    "value1": "Capital Surplus",
                    "value2": "$19,316,224",
                    "value3": "$18,203,842",
                    "value4": "$13,988,748",
                    "value5": "$12,375,533"
                },
                {
                    "value1": "Retained Earnings",
                    "value2": "-$7,062,512",
                    "value3": "-$6,678,037",
                    "value4": "-$3,408,491",
                    "value5": "-$2,565,761"
                },
                {
                    "value1": "Treasury Stock",
                    "value2": "$12,778,782",
                    "value3": "$10,679,180",
                    "value4": "$8,617,838",
                    "value5": "$7,167,227"
                },
                {
                    "value1": "Other Equity",
                    "value2": "$660,273",
                    "value3": "-$98,960",
                    "value4": "$331,287",
                    "value5": "$23,465"
                },
                {
                    "value1": "Total Equity",
                    "value2": "$25,692,839",
                    "value3": "$22,106,097",
                    "value4": "$19,529,454",
                    "value5": "$17,000,536"
                },
                {
                    "value1": "Total Liabilities & Equity",
                    "value2": "$51,245,305",
                    "value3": "$47,263,390",
                    "value4": "$43,175,843",
                    "value5": "$37,078,593"
                }
            ]
        },
        "cashFlowTable": {
            "asOf": null,
            "headers": {
                "value1": "Period Ending:",
                "value2": "8/31/2023",
                "value3": "8/31/2022",
                "value4": "8/31/2021",
                "value5": "8/31/2020"
            },
            "rows": [
                {
                    "value1": "Net Income",
                    "value2": "$6,871,557",
                    "value3": "$6,877,169",
                    "value4": "$5,906,809",
                    "value5": "$5,107,839"
                },
                {
                    "value1": "Cash Flows-Operating Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Depreciation",
                    "value2": "$2,281,085",
                    "value3": "$2,088,216",
                    "value4": "$1,891,242",
                    "value5": "$1,773,124"
                },
                {
                    "value1": "Net Income Adjustments",
                    "value2": "$1,425,016",
                    "value3": "$1,270,520",
                    "value4": "$1,061,032",
                    "value5": "$1,124,890"
                },
                {
                    "value1": "Changes in Operating Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Accounts Receivable",
                    "value2": "$87,669",
                    "value3": "-$2,411,735",
                    "value4": "-$1,471,613",
                    "value5": "$721,500"
                },
                {
                    "value1": "Changes in Inventories",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Operating Activities",
                    "value2": "-$1,112,972",
                    "value3": "-$1,162,999",
                    "value4": "-$1,433,165",
                    "value5": "-$513,553"
                },
                {
                    "value1": "Liabilities",
                    "value2": "-$160,060",
                    "value3": "$2,768,167",
                    "value4": "$2,937,107",
                    "value5": "-$76,122"
                },
                {
                    "value1": "Net Cash Flow-Operating",
                    "value2": "$9,524,268",
                    "value3": "$9,541,129",
                    "value4": "$8,975,148",
                    "value5": "$8,215,152"
                },
                {
                    "value1": "Cash Flows-Investing Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Capital Expenditures",
                    "value2": "-$528,172",
                    "value3": "-$717,998",
                    "value4": "-$580,132",
                    "value5": "-$599,132"
                },
                {
                    "value1": "Investments",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Investing Activities",
                    "value2": "-$2,094,298",
                    "value3": "-$3,542,631",
                    "value4": "-$3,729,634",
                    "value5": "-$1,295,387"
                },
                {
                    "value1": "Net Cash Flows-Investing",
                    "value2": "-$2,622,470",
                    "value3": "-$4,260,629",
                    "value4": "-$4,309,766",
                    "value5": "-$1,894,519"
                },
                {
                    "value1": "Cash Flows-Financing Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Sale and Purchase of Stock",
                    "value2": "-$2,829,334",
                    "value3": "-$2,767,314",
                    "value4": "-$2,637,349",
                    "value5": "-$1,960,539"
                },
                {
                    "value1": "Net Borrowings",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Financing Activities",
                    "value2": "-$81,856",
                    "value3": "-$69,953",
                    "value4": "-$45,096",
                    "value5": "-$44,101"
                },
                {
                    "value1": "Net Cash Flows-Financing",
                    "value2": "-$5,645,326",
                    "value3": "-$5,311,026",
                    "value4": "-$4,926,337",
                    "value5": "-$4,049,092"
                },
                {
                    "value1": "Effect of Exchange Rate",
                    "value2": "-$101,273",
                    "value3": "-$247,815",
                    "value4": "$13,799",
                    "value5": "$16,936"
                },
                {
                    "value1": "Net Cash Flow",
                    "value2": "$1,155,199",
                    "value3": "-$278,341",
                    "value4": "-$247,156",
                    "value5": "$2,288,477"
                }
            ]
        },
        "financialRatiosTable": {
            "asOf": null,
            "headers": {
                "value1": "Period Ending:",
                "value2": "8/31/2023",
                "value3": "8/31/2022",
                "value4": "8/31/2021",
                "value5": "8/31/2020"
            },
            "rows": [
                {
                    "value1": "Liquidity Ratios",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Current Ratio",
                    "value2": "129.83443%",
                    "value3": "123.32511%",
                    "value4": "125.19369%",
                    "value5": "140.17477%"
                },
                {
                    "value1": "Quick Ratio",
                    "value2": "129.83443%",
                    "value3": "123.32511%",
                    "value4": "125.19369%",
                    "value5": "140.17477%"
                },
                {
                    "value1": "Cash Ratio",
                    "value2": "50.25036%",
                    "value3": "45.04698%",
                    "value4": "52.02455%",
                    "value5": "67.20299%"
                },
                {
                    "value1": "Profitability Ratios",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Gross Margin",
                    "value2": "32.33668%",
                    "value3": "31.98598%",
                    "value4": "32.3828%",
                    "value5": "31.52964%"
                },
                {
                    "value1": "Operating Margin",
                    "value2": "13.74146%",
                    "value3": "15.20787%",
                    "value4": "15.08216%",
                    "value5": "14.69452%"
                },
                {
                    "value1": "Pre-Tax Margin",
                    "value2": "14.25532%",
                    "value3": "14.93022%",
                    "value4": "15.35839%",
                    "value5": "15.28262%"
                },
                {
                    "value1": "Profit Margin",
                    "value2": "10.71809%",
                    "value3": "11.16527%",
                    "value4": "11.68892%",
                    "value5": "11.52308%"
                },
                {
                    "value1": "Pre-Tax ROE",
                    "value2": "35.57151%",
                    "value3": "41.60014%",
                    "value4": "39.74057%",
                    "value5": "39.84775%"
                },
                {
                    "value1": "After Tax ROE",
                    "value2": "26.74503%",
                    "value3": "31.10983%",
                    "value4": "30.24564%",
                    "value5": "30.04516%"
                }
            ]
        }
    },
    "message": null,
    "status": {
        "rCode": 200,
        "bCodeMessage": null,
        "developerMessage": null
    }
}
```

## API to get Institutinal Holdings

```
import axios from 'axios';

const response = await axios.get('https://api.nasdaq.com/api/company/ACN/institutional-holdings', {
  params: {
    'limit': '15',
    'type': 'TOTAL',
    'sortColumn': 'marketValue',
    'sortOrder': 'DESC'
  },
  headers: {
    'authority': 'api.nasdaq.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'origin': 'https://www.nasdaq.com',
    'referer': 'https://www.nasdaq.com/',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

```

Ignore the Holding Transaction

```
Response

{
    "data": {
        "ownershipSummary": {
            "SharesOutstandingPCT": {
                "label": "Institutional Ownership",
                "value": "74.65%"
            },
            "ShareoutstandingTotal": {
                "label": "Total Shares Outstanding (millions)",
                "value": "627"
            },
            "TotalHoldingsValue": {
                "label": "Total Value of Holdings (millions)",
                "value": "$173,960"
            }
        },
        "activePositions": {
            "asOf": null,
            "headers": {
                "positions": "Active Positions",
                "holders": "Holders",
                "shares": "Shares"
            },
            "rows": [
                {
                    "positions": "Increased Positions",
                    "holders": "1,034",
                    "shares": "13,775,763"
                },
                {
                    "positions": "Decreased Positions",
                    "holders": "976",
                    "shares": "20,342,908"
                },
                {
                    "positions": "Held Positions",
                    "holders": "297",
                    "shares": "433,929,871"
                },
                {
                    "positions": "Total Institutional Shares",
                    "holders": "2,307",
                    "shares": "468,048,542"
                }
            ]
        },
        "newSoldOutPositions": {
            "asOf": null,
            "headers": {
                "positions": "Active Positions",
                "holders": "Holders",
                "shares": "Shares"
            },
            "rows": [
                {
                    "positions": "New Positions",
                    "holders": "199",
                    "shares": "2,242,696"
                },
                {
                    "positions": "Sold Out Positions",
                    "holders": "96",
                    "shares": "721,477"
                }
            ]
        },
        "holdingsTransactions": {
            "totalRecords": "2307",
            "institutionalHolders": "2,307 Institutional Holders",
            "sharesHeld": "468,048,542 Total Shares Held",
            "table": {
                "asOf": null,
                "headers": {
                    "ownerName": "Owner Name",
                    "date": "Date",
                    "sharesHeld": "Shares Held",
                    "sharesChange": "Change (Shares)",
                    "sharesChangePCT": "Change (%)",
                    "marketValue": "Value (In 1,000s)"
                },
                "rows": [
                    {
                        "ownerName": "Vanguard Group Inc",
                        "date": "9/30/2023",
                        "sharesHeld": "58,434,025",
                        "sharesChange": "184,541",
                        "sharesChangePCT": "0.317%",
                        "marketValue": "$21,718,174",
                        "url": "/market-activity/institutional-portfolio/vanguard-group-inc-61322"
                    },
                    {
                        "ownerName": "Blackrock Inc.",
                        "date": "9/30/2023",
                        "sharesHeld": "47,248,320",
                        "sharesChange": "-418,595",
                        "sharesChangePCT": "-0.878%",
                        "marketValue": "$17,560,783",
                        "url": "/market-activity/institutional-portfolio/blackrock-inc-711679"
                    },
                    {
                        "ownerName": "State Street Corp",
                        "date": "9/30/2023",
                        "sharesHeld": "26,126,336",
                        "sharesChange": "-517,960",
                        "sharesChangePCT": "-1.944%",
                        "marketValue": "$9,710,375",
                        "url": "/market-activity/institutional-portfolio/state-street-corp-6697"
                    },
                    {
                        "ownerName": "Morgan Stanley",
                        "date": "9/30/2023",
                        "sharesHeld": "17,032,283",
                        "sharesChange": "-1,717,637",
                        "sharesChangePCT": "-9.161%",
                        "marketValue": "$6,330,389",
                        "url": "/market-activity/institutional-portfolio/morgan-stanley-5929"
                    },
                    {
                        "ownerName": "Fmr Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "13,316,028",
                        "sharesChange": "565,505",
                        "sharesChangePCT": "4.435%",
                        "marketValue": "$4,949,168",
                        "url": "/market-activity/institutional-portfolio/fmr-llc-12407"
                    },
                    {
                        "ownerName": "Massachusetts Financial Services Co /Ma/",
                        "date": "12/31/2023",
                        "sharesHeld": "12,902,824",
                        "sharesChange": "-558,743",
                        "sharesChangePCT": "-4.151%",
                        "marketValue": "$4,795,593",
                        "url": "/market-activity/institutional-portfolio/massachusetts-financial-services-co-ma-13671"
                    },
                    {
                        "ownerName": "Geode Capital Management, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "12,088,761",
                        "sharesChange": "272,060",
                        "sharesChangePCT": "2.302%",
                        "marketValue": "$4,493,030",
                        "url": "/market-activity/institutional-portfolio/geode-capital-management-llc-396991"
                    },
                    {
                        "ownerName": "Wellington Management Group Llp",
                        "date": "9/30/2023",
                        "sharesHeld": "11,034,666",
                        "sharesChange": "720,647",
                        "sharesChangePCT": "6.987%",
                        "marketValue": "$4,101,254",
                        "url": "/market-activity/institutional-portfolio/wellington-management-group-llp-21351"
                    },
                    {
                        "ownerName": "Price T Rowe Associates Inc /Md/",
                        "date": "9/30/2023",
                        "sharesHeld": "9,878,333",
                        "sharesChange": "-1,956,277",
                        "sharesChangePCT": "-16.53%",
                        "marketValue": "$3,671,480",
                        "url": "/market-activity/institutional-portfolio/price-t-rowe-associates-inc-md-2145"
                    },
                    {
                        "ownerName": "Jpmorgan Chase & Co",
                        "date": "9/30/2023",
                        "sharesHeld": "9,856,107",
                        "sharesChange": "407,515",
                        "sharesChangePCT": "4.313%",
                        "marketValue": "$3,663,219",
                        "url": "/market-activity/institutional-portfolio/jpmorgan-chase--co-8702"
                    },
                    {
                        "ownerName": "Capital Research Global Investors",
                        "date": "9/30/2023",
                        "sharesHeld": "8,319,734",
                        "sharesChange": "647,573",
                        "sharesChangePCT": "8.441%",
                        "marketValue": "$3,092,196",
                        "url": "/market-activity/institutional-portfolio/capital-research-global-investors-767200"
                    },
                    {
                        "ownerName": "Northern Trust Corp",
                        "date": "9/30/2023",
                        "sharesHeld": "8,285,864",
                        "sharesChange": "443,004",
                        "sharesChangePCT": "5.649%",
                        "marketValue": "$3,079,607",
                        "url": "/market-activity/institutional-portfolio/northern-trust-corp-10923"
                    },
                    {
                        "ownerName": "Wells Fargo & Company/Mn",
                        "date": "12/31/2023",
                        "sharesHeld": "6,740,857",
                        "sharesChange": "122,712",
                        "sharesChangePCT": "1.854%",
                        "marketValue": "$2,505,374",
                        "url": "/market-activity/institutional-portfolio/wells-fargo--companymn-8130"
                    },
                    {
                        "ownerName": "Goldman Sachs Group Inc",
                        "date": "9/30/2023",
                        "sharesHeld": "6,033,894",
                        "sharesChange": "105,951",
                        "sharesChangePCT": "1.787%",
                        "marketValue": "$2,242,617",
                        "url": "/market-activity/institutional-portfolio/goldman-sachs-group-inc-11158"
                    },
                    {
                        "ownerName": "Bank Of New York Mellon Corp",
                        "date": "12/31/2023",
                        "sharesHeld": "6,021,352",
                        "sharesChange": "-251,502",
                        "sharesChangePCT": "-4.009%",
                        "marketValue": "$2,237,956",
                        "url": "/market-activity/institutional-portfolio/bank-of-new-york-mellon-corp-736081"
                    }
                ]
            }
        }
    },
    "message": null,
    "status": {
        "rCode": 200,
        "bCodeMessage": null,
        "developerMessage": null
    }
}
```
