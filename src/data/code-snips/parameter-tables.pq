/*-----------------------------------------------------------------------------
https://www.excelguru.ca/blog/2014/11/26/building-a-parameter-table-for-power-query/
-----------------------------------------------------------------------------*/

(ParameterName as text) =>
let
    ParamSource = Excel.CurrentWorkbook(){[Name="Parameters"]}[Content],
    ParamRow = Table.SelectRows(ParamSource, each([Parameter] = ParameterName)),
    Value = if Table.IsEmpty(ParamRow)=true then null
    else Record.Field(ParamRow{0}, "Value")
in
    Value


let
    Source = Excel.CurrentWorkbook(){[Name="MyTable"]}[Content],
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"MyTable", type text}}),
    #"Added Custom" = Table.AddColumn(#"Changed Type", "File Path", each fnGetParameter("File Path")),
    #"Added Custom1" = Table.AddColumn(#"Added Custom", "First Date", each fnGetParameter("Start Date")),
    #"Changed Type1" = Table.TransformColumnTypes(#"Added Custom1",{{"File Path", type text}, {"First Date", type date}})
in
    #"Changed Type1"

// If you have a list that you want to use as a parameter
each List.ContainsAny(ListQuery, {[ValueField]})
