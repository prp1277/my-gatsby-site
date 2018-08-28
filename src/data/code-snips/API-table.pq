let
Parameter = Excel.CurrentWorkbook(){[Name="Parameters"]}[Content],
URL = Parameter{0}[Value],
Source = Json.Document(Web.Contents(URL)),
    #"Converted to Table" = Record.ToTable(Source)
in
    #"Converted to Table"