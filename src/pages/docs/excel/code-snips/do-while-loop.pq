/*-----------------------------------------------------------------------------
    DoWhile Emulation or Pagination
    This is the DoWhile
-----------------------------------------------------------------------------*/
= List.Generate( 
    ()=>
    [Result= try GetData(1) otherwise null, Page = 1],
    each [Result] <> null,
    each [Result] = try GetData([Page]+1) otherwise null, Page = [Page]+1],
    each [Result]
)
= {page as number} as table =>
Let
    Source = Web.Page(Web.Contents("https://boxofficemojo.com/yearly/chart/?page="" & Number.ToText(page) & "&view=releasedate&view2=domestic&yr=2016&p=.htm")),
    Data1 = Source{1}[Data],
    RemoveBottom = Table.RemoveLastN(Data1,3)