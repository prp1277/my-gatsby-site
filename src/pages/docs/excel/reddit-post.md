---
title: "Get & Transform An RSS Feed"
date: "2018-08-08"
tags: ["Excel", "Power Query", "VBA"]
---

## Problem: Using Parameters

I have a workbook that is set up as an Excel Table as follows:

| Markdown Formula       |    News    | URL                                        |
| :--------------------- | :--------: | :----------------------------------------- |
| ="["&A2&"]"&"("&B2&")" |    All     | https://www.investing.com/rss/news.rss     |
| ="["&A3&"]"&"("&B3&")" | Technology | https://www.investing.com/rss/news_288.rss |
| ="["&A4&"]"&"("&B4&")" | Technology | https://www.investing.com/rss/news_288.rss |

The markdown syntax column is there so I can create a links / cheat sheets page on Github that's similar to this [Open Data Catalog Repository](https://github.com/axibase/open-data-catalog/tree/master/data-hosts), but I'd like the ability to refresh the queries and bring in the most recent news.

I've read Ken Puls' [blog post](https://www.excelguru.ca/blog/2014/11/26/building-a-parameter-table-for-power-query/) where he creates the `fnGetParameters()` function and I think something like that might work if I added a `category` column and a few lines of VBA to refresh each category periodically:

```visual-basic
'Attribute VB_Name = "Module1"
Dim NextTick as Date
'------------------------------------------------------------------------------
Sub UpdateClock()
'   Puts the current time in A1 and creates an event 30 mintes from now
    This.Workbook.Sheets(1).Range("A1") = Time
    NextTick = Now + TimeValue("00:30:00")
    Application.OnTime NextTick, "UpdateClock"
'   I would adjust the next line for each category
    ThisWorkbook.RefreshAll
End Sub
'------------------------------------------------------------------------------
Sub StopClock()
'   Cancel the future event
    On Error Resume Next
    Application.OneTime NextTick, "UpdateClock",, FALSE
End Sub
'------------------------------------------------------------------------------
'------------------------------------------------------------------------------
'   Attribute VB_Name = "ThisWorkbook"
'   Makes sure the workbook doesn't keep calculating
Private Sub Workbook_BeforeClose(Cancel as Boolean)
    Call StopClock
End Sub
```

I'm already using the VBA in a workbook that pulls data from Excel's new `Stocks` data-type API and it's [working wonderfully](https://www.youtube.com/watch?v=W_14DoSfGIM), but I'd like to have the latest news as well as my account balances. The URLs in this case happen to be .rss files, but this could be applied to any interactions with APIs that have multiple endpoints.

I'm open to any and all suggestions and am familiar enough to understand solutions in VBA, #M, JavaScript and R.
