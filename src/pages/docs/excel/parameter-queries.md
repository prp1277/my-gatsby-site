---
title: "Parameter Queries in Power Query"
date: "2018-08-08"
tags: ["Excel", "Power Query"]
---

## Creating Dynamic Queries

Code from Ken Puls' [XLGuru blog]("https://www.excelguru.ca/blog/2014/11/26/building-a-parameter-table-for-power-query/").

```lisp
(ParameterName as text) =>
let
    ParamSource = Excel.CurrentWorkbook(){[Name="Parameters"]}[Content],
    ParamRow = Table.SelectRows(ParamSource, each([Parameter] = ParameterName)),
    Value = if Table.IsEmpty(ParamRow)=true then null
    else Record.Field(ParamRow{0}, "Value")
in
    Value
```

```lisp
let
    Source = Excel.CurrentWorkbook(){[Name="MyTable"]}[Content],
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"MyTable", type text}}),
    #"Added Custom" = Table.AddColumn(#"Changed Type", "File Path", each fnGetParameter("File Path")),
    #"Added Custom1" = Table.AddColumn(#"Added Custom", "First Date", each fnGetParameter("Start Date")),
    #"Changed Type1" = Table.TransformColumnTypes(#"Added Custom1",{{"File Path", type text}, {"First Date", type date}})
in
    #"Changed Type1"
```
