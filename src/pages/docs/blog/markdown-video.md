---
title: "Markdown Link Tutorial" 
date: "2018-08-10"
tags: ["YouTube ", "Excel ", "Markdown ", "Blog "]
---

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/FH_Ivm0MvrU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

## Background Information

I've been using Excel for years. In college, I majored in Finance and Minored in Accounting, then graduated and started working in the Financial Services industry. If you're not familiar with the Financial Services industry I'll share 2 secrets with you:  

1. _The world runs on Microsoft Excel_ and <br/>
2. _Excel can do damn near anything_.

> [Case](https://www.slideshare.net/ntweisen/20-unique-uses-of-excel-spreadsheets) and [point](https://chandoo.org/wp/unusual-excel-uses/)

As I attempt to learn how to program I have a tendency to revert back to Excel as my go to GUI / IDE.

## Set-Up

<center><img src="https://prp1277.github.io/static/hyperlink-list-379263a4d593dcab892865a798a87f70.JPG" alt="hyperlink-list" width="500" height="300"></center>

Setting up your workbook for this tutorial is extremely simple. All you need to do is create a list of hyperlinks in your workbook. It doesn't matter where they come from, all that matters is that they are formatted to have a text to display and an underlying address.

<center><img src="https://prp1277.github.io/static/display-vs-address-761415ed384c49d525fe0ba0e0e4f4b9.JPG" alt="edit-hyperlink" width="500" height="300"></center>

> This is equivalent to an `<a href="" alt=""/>` in HTML

## Defining the Problem

Now we have a column populated by underlined-blue text, indicating that they are hyperlinks. Sure, we can click them, but they aren't much use in a markdown document formatted this way. We'll have to separate the `Address` from the `Text to display`. 

In smaller lists that's not a big deal, but this is a pretty long list. Moreover, this is a common, everyday task I've seared into my brain:
> `Copy Link > Paste into OneNote > ctrl+k > ctrl+v`

Although the task is nearly identical in Excel, it's going to take forever to click through them one by one: 
> `ctrl+k > ctrl+c > ctrl+R > tab > ctrl+v > enter`

### Ready to jam that pen through your ear yet?
**Good.**

<center><img src="https://media.giphy.com/media/bWM2eWYfN3r20/giphy.gif" alt="no-time"></center>

We have the keystrokes down to an art, why don't we use the macro recorder to take a peek under Excel's hood.

<center><img src="https://prp1277.github.io/static/md-presentation-0afa8a9c5989eb8b06765d096e007773.gif" alt="md-gif"></center>

> _Note: I recorded the Absolute References in small window and opted not to include it_

## Reviewing the Recording

### Part 1 - Absolute References

```visual-basic
    Sub Macro1()
'
        Range("A2").Select              '|First Link
        Selection.Hyperlinks(1).Delete  '|
        Range("B2").Select              '|
        ActiveSheet.Paste               '|_
        Range("A3").Select              '|Second Link
        Selection.Hyperlinks(1).Delete  '|
        Range("B3").Select              '|
        ActiveSheet.Paste               '|_
        Range("A4").Select              '|Third Link
        Selection.Hyperlinks(1).Delete  '|
```

### Part 2 - Relative References

```visual-basic
        ActiveCell.Offset(0, 1).Range("A1").Select
        ActiveSheet.Paste
        ActiveCell.Offset(1, -1).Range("A1").Select
        Selection.Hyperlinks(1).Delete
        ActiveCell.Offset(0, 1).Range("A1").Select
        ActiveSheet.Paste
        ActiveCell.Offset(1, -1).Range("A1").Select
        Selection.Hyperlinks(1).Delete
        ActiveCell.Offset(0, 1).Range("A1").Select
        ActiveSheet.Paste
    End Sub

```

###

[Mp4 to Gif](https://www.onlineconverter.com/convert/11c5599d606be7ef5e3fc70d1e5ff2110e)
<!--
## Developing the Solution
In his book _Excel 2013: Power Programming with VBA_, John Walkenbach stresses the importance of using Excel's built-in macro recorder.
> 