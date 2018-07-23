---
title: "My Favorite Macro"
date: "2018-07-20"
tags: [ "VBA" ]
---

## Keep it Simple

One of the most frustrating things to deal with as an analyst is a poorly constructed workbook. Most of the time these are the kinds of spreadsheets that someone has put some serious blood, sweat and tears into. Unfortunately, the person that made the sheet is probably not thinking about long-term usability.

```vb
Sub QuickFormat()
'Clear Formatting from all cells
    Application.ScreenUpdating = False
    Workbooks(Workbooks.Count).Activate

    With Cells
        .HorizontalAlignment = xlLeft
        .VerticalAlignment = xlBottom
        .WrapText = False
        .Orientation = 0
        .AddIndent = False
        .IndentLevel = 0
        .ShrinkToFit = False
        .ReadingOrder = xlContext
        .MergeCells = False
        .Columns.AutoFit
    End With
End Sub
```