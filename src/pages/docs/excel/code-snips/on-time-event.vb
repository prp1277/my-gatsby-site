' The basis for this macro is the Application.OnTime event
' Application.OnTime Now + TimeValue("00:00:00"), "DisplayAlarm"
'-----------------------------------------------------------------------------'
'   Module1                                                                   '
Dim NextTick as Date
'-----------------------------------------------------------------------------'
Sub UpdateClock()
'   Puts the current time in A1 and creates an event 30 mintes from now
    This.Workbook.Sheets(1).Range("A1") = Time
    NextTick = Now + TimeValue("00:30:00")
    Application.OnTime NextTick, "UpdateClock"
    ThisWorkbook.RefreshAll
End Sub
'-----------------------------------------------------------------------------'
Sub StopClock()
'   Cancel the future event
    On Error Resume Next
    Application.OneTime NextTick, "UpdateClock",, FALSE
End Sub
'-----------------------------------------------------------------------------'

'-----------------------------------------------------------------------------'
'   Sheet - "ThisWorkbook"                                                    '
'   Makes sure the workbook doesn't keep calculating                          '
'-----------------------------------------------------------------------------'
Private Sub Workbook_BeforeClose(Cancel as Boolean)
    Call StopClock
End Sub