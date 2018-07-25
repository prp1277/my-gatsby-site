---
title: "Cleaning Data"
date: "2018-05-30"
tags: [ "R " , "Assignment " , "BIA 6309 " ]
---

# Import Data into Workspace

Use read.csv and make sure the data is attached

After it is attached, get the structure and summary

```r
clean_data <- read.csv(
  "C:/Users/prp12.000/OneDrive for Business/Courses/BIA-6309-Stats-And-Machine-Learning/csv/clean_data.csv"
  )
attach(clean_data)           # Make sure to attach it after importing
str(clean_data)              # Check the structure of the data set
summary(clean_data)          # Get the summary stats
```

# Exploratory Analysis

Describe the data

```r
library(psych)
describe(clean_data)         # SE = Standard Error  

hist(medical_expenses)       # Make a histogram with the data
                             # Frequency lowers as expenses rise
plot(medical_expenses, age)
cor(medical_expenses, age)   # Screwed up axis
cor(age, medical_expenses,
    use = "complete.obs"
)                            # Complete Observation
cor(medical_expenses, age,
    use = "complete.obs"
)
```

# Create new variable

```r
CORRELATION_DATA <- data.frame(
  medical_expenses, age, bmi
)                            # Assign value to the data frame to make it easier to reference
View(CORRELATION_DATA)

CORRELATION_MATRIX <- cor(
  CORRELATION_DATA,
  use = "complete.obs"
  )                          # Create a matrix based on the complete observation of dataframe

View(CORRELATION_MATRIX)     # End First Session
```
