Option Explicit
'-----------------------------------------------------------------------------'
Sub QuickFormat()
'   Clear Formatting from all cells
'   ctrl+shift+m
    
    Application.ScreenUpdating = False

'   First, clear the formatting from the cells
    With ActiveSheet.Cells
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

'   Then, adjust the font according to your preference
    With ActiveSheet.Cells.Font
        .Name = "Calibri"
        .Size = 11
        .Strikethrough = False
        .Superscript = False
        .Subscript = False
        .OutlineFont = False
        .Shadow = False
        .TintAndShade = 0
        .ThemeFont = xlThemeFontMinor
    End With
    
    Application.ScreenUpdating = True

End Sub

'-----------------------------------------------------------------------------'
Sub ConvertToHyperlink()
'   Keyboard Shortcut Ctrl + Shift + H
    
    ActiveSheet.Hyperlinks.Add Anchor:=Excel.Selection, Address:= _
        ActiveCell.Value, TextToDisplay:=ActiveCell.Value
        
End Sub

'-----------------------------------------------------------------------------'
Sub RemoveHyperlinks()
    
    With Cells
        .ClearHyperlinks
        .ClearFormats
        .Font.Color = Default
    End With
    
    Range("A1").Select
    Selection.Columns.AutoFit

End Sub

'-----------------------------------------------------------------------------'
Sub PasteLinkRight()
'   This macro works as if you used ctrl + r
'   Except it strips the hyperlink and pastes as text
'   Ctrl + Shift + R

    Dim Lnk As String
    Lnk = ActiveCell.Offset(0, -1).Hyperlinks(1).Address

    With ActiveCell
        .Activate
        .Value = Lnk
        .Offset(0, -1).Hyperlinks(1).Delete
    End With

End Sub
'-----------------------------------------------------------------------------'