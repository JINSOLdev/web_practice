const classmates1 = "철수"
undefined
classmates1[0]
'철'
classmates1[1]
'수'
const classmates2 = "철수&영희"
undefined
classmates2.split("&")
(2) ['철수', '영희']
const classmates3 = " 철수 & Milk"
undefined
classmates3.trim()
'철수 & Milk'
classmates3.toUpperCase()
' 철수 & MILK'
classmates3.toLowerCase()
' 철수 & milk'
const culsooNumber = "1234"
undefined
culsooNumber.padStart(10,"0")
'0000001234'
culsooNumber.padEnd(10,"0")
'1234000000'