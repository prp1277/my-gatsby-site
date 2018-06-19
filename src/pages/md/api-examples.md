---
title: Api Calls
date: "2018-06-14"
---
# Making API Calls in React

## The Goal:

Return the Quote, News and Chart for Apple and Facebook from the [IEX Trading Api](https://api.iextrading.com).

## The Tools:

[Ticker.json](https://prp1277.github.io/static/Ticker-258c7f6e5370e98d12b56867f35785b8.json) - json file with a list of symbols supported by the API.

```json
      "Tickers": {
        "Symbol":"Company Name"
        }
```

[The Request](https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5)

`https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5`

[.http request](https://prp1277.github.io/static/apicall-c0da56ed7b29b8008f93d03b7e05e235.http) - File used to make the request using VSCode

### Additional Resources

* [Stack Overflow](https://stackoverflow.com/questions/47993521/react-how-to-reach-objects-in-json-file)
* [JSON Parse](https://stackoverflow.com/questions/45015/safely-turning-a-json-string-into-an-object)
* [jsfiddle.net](http://doc.jsfiddle.net/use/echo.html)

> Disclosure: I am still working through this process. I thought it would be easier to document the different results in a markdown post for future reference.

## Using JavaScript's XMLHttpRequest

```javascript
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

```javascript
var request = require('request');

request({
    method: GET,
    url: "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5",
        headers: {
            contentType: 'application/json',
            Accept: 'application/json'
        }}, function (error, response, body) {
            console.log('Status', response.statusCode);
            console.log('Headers', JSON.stringify(response.headers));
            console.log('Response', body);
        });
```

## From jsfiddle.net

```js
new Request.JSONP({
    url: 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5',
    data: {
        text: 'some text',
        par1: 'another text'
    },
    onSuccess: function(response) {
        show_response(response, $('post'));
    }
}).send();

show_response = function(obj, result) {
    $H(obj).each(function(v, k) {
        new Element('li', {
            text: k + ': ' + v
        }).inject(result);
    });
    result.highlight();
};

```

## Using R and RStudio

> [Source](https://github.com/r-lib/httr/blob/master/vignettes/quickstart.Rmd)

```r

# Walking through API interaction using R and httr
## Useful arguments:
### modify_url -      POST(modify_url("https://httpbin.org", path = "/post"))
### query arguments - POST("https://httpbin.org/post", query = list(foo = "bar"))
### headers -         POST("https://httpbin.org/post", add_headers(foo = "bar"))
### body as form -    POST("https://httpbin.org/post", body = list(foo = "bar"), encode = "form")
### body as json -    POST("https://httpbin.org/post", body = list(foo = "bar"), encode = "json")

library(httr)

ua <- user_agent("https://github.com/prp1277/lib")
ua

github_api <- function(path){
  url <- modify_url("https://api.github.com", path = path)
  
  # Import the response in json format or throw an error
  resp <- GET(url, ua)
  if (http_type(resp) !="application/json"){
    stop("API did not return json", call. = FALSE)
  }
  
  # Parse the response for json content. If there's a 200 error, tell why
  parsed <- jsonlite::fromJSON(content(resp, "text"), simplifyVector = FALSE)
  
  if (status_code(resp) != 200) {
    stop(
      sprintf(
        "GitHub API Request Failed [%s]\n%s\n<%s>",
        status_code(resp),
        parsed$message,
        parsed$documentation_url
      ),
      call. = FALSE
    )
  }
  
  structure(
    list(
      content = parsed,
      path = path,
      response = resp
    ),
    class = "github_api"
  )
} # End function(path)


print.github_api <- function(x, ...) {
  cat("<GitHub", x$path, ">\n", sep = "")
  str(x$content)
  invisible(x)
}

github_api("/users/prp1277")

rate_limit <- function() {
  req <- github_api("/rate_limit")
  core <- req$content$resources$core
  
  reset <- as.POSIXct(core$reset, origin = "1970-01-01")
  cat(core$remaining, " / ", core$limit,
      " (Resets at ", strftime(reset, "%H:%M:%S"), ")\n", sep = "")
}

rate_limit()

```