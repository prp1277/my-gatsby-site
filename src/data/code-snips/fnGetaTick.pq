
/*---------------------------------------------------------------------------
Function 
fnGetaTick |u|Small_Trunks
-----------------------------------------------------------------------------*/
let
    Source =(pTicker as any)=> 
    let
        Source = Json.Document(.Contents("https://api.iextrading.com/1.0/stock/market/batch?symbols="&pTicker&"&types=quote,stats,financials,company,peers")),
        #"Converted to Table" = Record.ToTable(Source),
        #"Expanded Value" = Table.ExpandRecordColumn(#"Converted to Table", "Value",{"quote","stats","financials","company","peers"},{"quote", "stats", "financials", "company", "peers"})
    in
        #"Expanded Value"
in
    Source

/*---------------------------------------------------------------------------
Parameter
pTicker - |u|Small_Trunks
-----------------------------------------------------------------------------*/
"MSFT" meta [IsParameterQuery=true, Type="Any", IsParameterQueryRequired=true]

/*-----------------------------------------------------------------------------
Query Sample 
Transform from content - |u|Small_Trunks
-----------------------------------------------------------------------------*/
let Source = Json.Document(Web.Contents("https://api.iextrading.com/1.0/stock/market/batch?symbols="&pTicker&"&types=quote,stats,financials,company,peers")),
    #"Converted to Table" = Record.ToTable(Source),
    #"Expanded Value" = Table.ExpandRecordColumn(#"Converted to Table","Value",{"quote","stats","financials","company","peers"}{"quote","stats","financials","company","peers"})
in
    #"Expanded Value"

/*---------------------------------------------------------------------------
Final Output
QrySrc - |U|Small_Trunks
-----------------------------------------------------------------------------*/
let
    Source = Excel.CurrentWorkbook(){[Name="TickerParams"]}[Content],
    #"Invoked Custom Function" = Table.AddColumn(Source, "fnGetaTick", each fnGetaTick([ticker])),
    #"Expanded fnGetaTick" = Table.ExpandTableColumn(#"Invoked Custom Function", "fnGetaTick"{"quote", "stats", "financials", "company", "peers"},{"quote", "stats", "financials", "company", "peers"})
    #"Removed Columns" = Table.RemoveColumns(#"Expanded fnGetaTick",{"ticker"})
in
    #"Removed Columns"

/*---------------------------------------------------------------------------
Using Recursion - |u|itsnotaboutthecell
-----------------------------------------------------------------------------*/
(stockChoices as list) =>
let
    Source = Json.Document(Web.Contents("https://api.iextrading.com/1.0/stock/market/batch?&symbols=" & Text.From(Text.Combine(stockChoices, ",")) & "&types=quote,stats,financials,company,peers")),
    #"Converted to Table" = Record.ToTable(Source),
    #"Expanded Value" = Table.ExpandRecordColumn(#"Converted to Table", "Value",{"quote", "stats", "financials", "company", "peers"},{"quote", "stats", "financials", "company", "peers"})
in
    #"Expanded Value"

/*---------------------------------------------------------------------------
Using Recursion
Create Table from Values - |u|itsnotaboutthecell
-----------------------------------------------------------------------------*/
let
    Source = #table(type table [Ticker = text],
    {{"ADC"},{"ALK"},{"GOOGL"},{"GOOG"},{"AMP"},{"AGR"},{"BOH"},{"BMRC"},{"NTB"},{"BANR"},{"ABX"},{"BHLB"},{"BRO"},{"CDNS"},{"CNI"},{"CCBG"},{"CBI"},{"CSGP"},{"CR"},{"DGICA"},{"DGICB"},{"EFSC"},{"FBK"},{"FRBA"},{"FE"},{"HAL"},{"HAS"},{"HSII"},{"HLX"},{"HXL"},{"HMST"},{"IBCP"},{"IBTX"},{"KMB"},{"LII"},{"LECO"},{"MSA"},{"MC"},{"NBTB"},{"ONB"},{"OPB"},{"OI"},{"PMBC"},{"PSK"},{"RUSHA"},{"RUSHB"},{"SLM"},{"SANM"},{"SALT"},{"BSRR"},{"SFNC"},{"SUI"},{"TCF"},{"AMTD"},{"TNC"},{"TVTY"},{"TRST"},{"WSFS"},{"WHR"},{"WWD"},{"ZION"},{"MMM"},{"ATI"},{"ABG"},{"ASTE"},{"AUDC"},{"BCBP"},{"BIIB"},{"BHBK"},{"CIT"},{"CAC"},{"CAT"},{"CNC"},{"KO"},{"GLW"},{"CYBE"},{"LLY"},{"FNB"},{"FITB"},{"FCF"},{"FFWM"},{"FBC"},{"FCX"},{"GPK"},{"HOG"},{"HBCP"},{"HUBB"},{"HBAN"},{"IPI"},{"JBLU"},{"LMT"},{"MBFI"},{"MAS"},{"MDR"},{"EDU"},{"NEE"},{"NEP"},{"PCAR"},{"PEBO"},{"PII"}})
in 
Source