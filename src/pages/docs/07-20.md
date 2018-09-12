---
title: "My Favorite Macros"
date: "2018-07-20"
tags: [ "VBA ", "Excel ", "Tip " ]
---

## Keep it Simple

The collection of these three macros are kept in my Personal Macro Workbook, so they are available in every workbook that I open. That said, it's important to make sure that they are ambiguous in their references.

To learn more about Personal Macro Workbooks, I suggest [this article](https://www.myonlinetraininghub.com/create-a-personal-macro-workbook-personal-xlsb) by Phillip Treacy


## Clear the Workbook's Formatting

I created this macro to deal with ugly spreadsheets. Merged cells, wrapped text, funky alignments - all GONE.

```visual-basic
Sub QuickFormat()
    'Clear Formatting from all cells
    'ctrl+shift+m
    
    Application.ScreenUpdating = False

    With ActiveSheet.Cells            'Clear any cell formatting
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
    With ActiveSheet.Cells.Font        'Clear any font formatting
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
```

## Convert Text to Hyperlinks

This macro takes a cell with regular text and converts it to a clickable hyperlink (assuming a valid address).

```visual-basic
Sub ConvertToHyperlink()
    'Keyboard Shortcut Ctrl + Shift + H
    
    ActiveSheet.Hyperlinks.Add Anchor:=Excel.Selection, Address:= _
        ActiveCell.Value, TextToDisplay:=ActiveCell.Value
        
End Sub
```

# Paste Hyperlink Right

This is the newest addition to my macro workbook, and I have to admit, it may be my favorite one. Paired with the Quick Format macro above, you can easily paste an html page into Excel, have it formatted and strip the links in seconds.

```visual-basic
Sub PasteLinkRight()
    ' This macro works as if you used ctrl + r
    ' Except it strips the hyperlink and pastes as text
    ' Ctrl + Shift + R

    Dim Lnk As String
    Lnk = ActiveCell.Offset(0, -1).Hyperlinks(1).Address

    With ActiveCell
        .Activate
        .Value = Lnk
        .Offset(0, -1).Hyperlinks(1).Delete
    End With
End Sub
```

### Tips or Suggestions?

Send me an [email](Mailto:prp1277@gmail.com) with your thoughts! 