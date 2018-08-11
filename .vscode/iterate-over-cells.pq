// src: https://www.reddit.com/r/PowerBI/comments/8ls3fo/iterating_over_each_cell_in_a_column_in_power/

// Set-up Parameters for websites
let
    Parameter = Excel.CurrentWorkbook(){[Name="Table3"]}[Content],
    URL= Parameter{1}[Value],
    Source = Web.Page(Web.Contents(URL)),
    Data0 = Source{0}[Data],
    #"Changed Type" = Table.TransformColumnTypes(Data0,{{"Date", type date}, {"Open", type number}, {"High", type number}, {"Low", type number}, {"Close", type number}, {"Volume", type number}, {"Market Cap", type number}}),
    #"Removed Columns" = Table.RemoveColumns(#"Changed Type",{"Market Cap", "Open", "High", "Low"}),
    #"Sorted Rows" = Table.Sort(#"Removed Columns",{{"Date", Order.Ascending}})
in
    #"Sorted Rows" 

// Iterate through each cell in Table3
let
Source = Excel.CurrentWorkbook(){[Name="Table3"]}[Content],
    #"Added Custom" = Table.AddColumn(Source, "Web.Page", each Web.Page(Web.Contents([URL]))),
    #"Added Custom1" = Table.AddColumn(#"Added Custom", "Tables", each [Web.Page][Data]{0}),
    #"Added Custom2" = Table.AddColumn(#"Added Custom1", "Table.PromoteHeaders", each Table.PromoteHeaders([Tables])),
    #"Removed Other Columns" = Table.SelectColumns(#"Added Custom2",{"URL", "Table.PromoteHeaders"}),
    #"Expanded Table.PromoteHeaders" = Table.ExpandTableColumn(#"Removed Other Columns", "Table.PromoteHeaders", {"Full name", "Toronto Football Club", "Montreal Impact (English)#(cr)#(lf)#(lf)Impact de Montréal (French)"}, {"Full name", "Toronto Football Club", "Montreal Impact (English)#(cr)#(lf)#(lf)Impact de Montréal (French)"})
in
    #"Expanded Table.PromoteHeaders"