---
title: Api Calls
date: "2018-06-14"
---
# Making API Calls in React

## The Goal:
Return the Quote, News and Chart for Apple and Facebook from the [IEX Trading Api](https://api.iextrading.com).

## The Tools:
[Ticker.json](https://prp1277.github.io/static/Ticker-258c7f6e5370e98d12b56867f35785b8.json) - JSON file with a list of symbols supported by the API.

      "Tickers": {
        "Symbol":"Company Name"
        }

[The Request](https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5) -
`https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5`

[.http request](https://prp1277.github.io/static/apicall-c0da56ed7b29b8008f93d03b7e05e235.http) - File used to make the request using VSCode

### Additional Resources

* [Stack Overflow](https://stackoverflow.com/questions/47993521/react-how-to-reach-objects-in-json-file)
* [JSON Parse](https://stackoverflow.com/questions/45015/safely-turning-a-json-string-into-an-object)

> Disclosure: I am still working through this process. I thought it would be easier to document the different results in a markdown post for future reference.

## Using JavaScript's XMLHttpRequest

```js
var request = new XMLHttpRequest;

request.open(get,`https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5`);
request.setRequestHeader(`Content-Type`, `application/json`);
request.setRequestHeader(`Accept`, `application/json`);

request.onreadystatechange = function() {
    if (this.readyState===4) {
        console.log('Status:', this.status)
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

request.send
```

## Using Node.js GET Method

```js
var request = require('request');

request({
    method: GET,
    url: "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}, function (error, response, body) {
            console.log('Status', response.statusCode);
            console.log('Headers', JSON.stringify(response.headers));
            console.log('Response', body);
        });
```

## Another React Attempt

```js
class ApiCall extends React.Component{
    render() {
        return(
            <div className="api-call">
            <h1> List for {this.props.name}</h1>
              <ul>
                  <li>aapl</li>
                  <li>goog</li>
                  <li>amzn</li>
                </ul>
            </div>
        );
    }
}
```
