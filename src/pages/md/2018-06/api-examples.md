---
title: "Api Examples"
path: "/md/2018-06/api-examples"
published: "false"
date: "2018-06-20"
---

## Background Information

One of the main reasons that I am interested in Data Science is because I am anticipating the gap between Finance and Technology closing in. I witnessed this first-hand as I was working in Mutual Fund Accounting. Generally speaking, this was my daily workflow:

 1. Open OneNote to view daily tasks
 2. Follow hyperlink to a folder on the network drive
 3. Make a few adjustments to dates / values
 4. Save and close the file in a fixed format - i.e. "2018-06-25-Interest-Rates.xls"
 5. Open a Template File and click a macro button
 6. Once the macro is finished running, save it and go back to step 1

I have no complaints about the nature of the work. It was extremely interesting and exactly what I went to school for. I got to track the markets and was responsible for calculating the Net Asset Values of 5 - 10 funds each day. I may be downplaying the complexity of our day-to-day jobs, but the point is: the person on our team that was indispensible was Luke, the VBA specialist.

After making that realization, I made it my goal to learn Excel in as much detail as possible. I watched YouTube videos, read books, listened to podcasts and participated in forums dedicated to Excel. I went from keyboard shortcuts to functions and formulas and even started learning VBA and Power Query #M. Some time passed and one thing snowballed into another and I found myself enrolled in the Data Science Program at Rockhurst University.

> The only problem is that Data Scientists use R, not Excel

## Retooling with R

Creating a _program? a script?_ to get financial information from an API into RStudio.

[Source:](https://api.iextrading.com/1.0/stock/aapl/stats)
`https://api.iextrading.com/1.0/stock/aapl/stats`

The first data source we'll be interacting with. It returns Apple's key statistics in json format, which we'll import into RStudio.

## Getting Started

The first thing we need to do is set up our environment in R. Although IEX doesn't require authentication, we'll use the _user_agent_ function anyway.

```r
library(httr)
library(jsonlite)

# Initialize Environment
# URL = https://api.iextrading.com/1.0/stock/aapl/stats

ua <- user_agent("https://api.iextrading.com/1.0/stock/")
ua
```

Next, we'll assign a few variables and start designing our function:

```r
# <-- Start Function -->
iex_api <- function(path){
  url <- modify_url(
      "https://api.iextrading.com/",
      path = "1.0/stock/aapl/stats"
      )
  
  # Get the url in json formatting. If it returns anything
  # else, stop and show the error message "API..."
  resp <- GET(url, ua)
  if(http_type(resp) !="application/json"){
    stop(
        "API did not return a json file",
         call. = FALSE
         )
  }
```

Next, we'll create another function to specify the response:

```r
# Use jsonlite package to parse the data from json into
#   a vector  
  parsed <- jsonlite::fromJSON(
      content(resp, "text"),
      simplifyVector = FALSE
  )
  
# Another error-handling function - if the response
#   fails, tell us why and cancel the call
  if(status_code(resp) !=200){
    stop(
      sprintf(
        "IEX API Request Failed [%s]\n%s\n<%s>",
        status_code(resp),
        parsed$message,
        parsed$documentation_url
      ),
      call. = FALSE
    )
  } # Define the structure of the response
  structure(list
  (
      content = parsed,
      path = "1.0/stock/aapl/stats",
      response = resp
      ),
      class = "iex_api"
    )
}
```

Now that we have defined our function and specified the format of the response, it's time to get the result:

```r
# <-- Print the Result -->
print.iex_api <- function(x, ...){    # From x to ..n
  cat("<IEX", x$path, ">n", sep = "") # Concatenate string
  str(x$content)                      # Use x as index
  invisible(x)                        # Hide x in result
}
# Run the script!
```