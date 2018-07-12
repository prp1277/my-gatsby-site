---
title: " Med Expense Data"
date: "2018-07-11"
---

```r
medexpense_data <- read.csv("C:/Users/prp12.000/OneDrive for Business/Courses/BIA-6309-Stats-And-Machine-Learning/csv/medexpense_data.csv")
attach(medexpense_data)
options(scipen = 999)
str(medexpense_data)
```

# START SESSION


```r
library(psych)
describe(medexpense_data)
plot(age, medical_expenses)
```

Get the descriptive statistics for the dataset
Medical expenses as a function of age

# Issue 1 - Interpreting confidence intervals in Multiple Linear Regression

```r
regModel1 <- lm(medical_expenses~
                age + bmi + children)
summary(regModel1)
confint(regModel1)
```

Results:
 medical expenses = -7056 + 264 [ age ] + 300 [ bmi ] + 390 [ children ]
 Medical expenses rise as age, bmi and number of kids increases 
 T-Value = coefficient / standard error = 10.498

# Issue 2 - Dummy Variables - factoring variables

```r
## if smoker 1, nonsmoker = 0
SMOKER <- ifelse(smoker == "yes", 1, 0)
SMOKER

## male = 1, female = 0
GENDER <- ifelse(gender == "male", 1, 0)
GENDER
regModel2 <- lm(medical_expenses~
                age + bmi + children + smoker + gender)
summary(regModel2)
```

# Results:

R is able to define the strings as factors

Adjusted R2 went up
All else equal, the cost of being a smoker increases by $23812.57
All else equal, the cost of being a male is $267.17 lower than being a female

# Issue 3 - Creating New Variables

```r
if  ( BMI > 30 ) => Obese

OBESE <- ifelse(bmi > 30, 1, 0)
regModel3 <- lm(medical_expenses~
                age + OBESE + children + SMOKER + GENDER)
summary(regModel3)
```

# Results:

Being obese increases med expenses by $ 4034.56

# Issue 4 - Creating Interaction Variables
 What about an obese smoker?
 value = [ Class(obese) * Class(smoker) ]

```r
OBESE_SMOKER <- (OBESE * SMOKER)
OBESE_SMOKER 

### This satisfies 2 variables / conditions

regModel4 <- lm(medical_expenses~
                age + OBESE + children + SMOKER + GENDER + OBESE_SMOKER)
summary(regModel4)
```

## Results:
The model keeps getting more accurate with each step (Intercept Estimate)
Always make sure to include the parents when you create new children variables

TASK-> Forecast the medical expensees for a 40 yr old female non-obese smoker with no children

` = -2593 + 273[ 40 ] + 88[ 0 ] + 448[ 0 ] + 13383[ 1 ] - 635[ 0 ] + 19998[ 0 * 1 ] = 21,710`

# Issue 5 - Modeling Non-Linear Effects

## Polynomial or Quadratic Regression

Linear Function -> Y = B0 + B1X1

NonLinear function -> Y = B0 + B1X1 + B2X2

```r
AGE2 <- (age * age)
AGE2
regModel5 <- lm(medical_expenses~
                  age + AGE2 + OBESE + children + SMOKER + GENDER + OBESE_SMOKER)
summary(regModel5)
```

# Issue 6 - Model Selection - Using Regression Subsets

Medical Expenses = fn(age, AGE2, OBESE, BMI, children, 
     SMOKER, GENDER, OBESE_SMOKER)


1 variable model - 8 possible models
2 variable model - See OneNote

```r
newData <- data.frame(age, AGE2, bmi, OBESE, OBESE_SMOKER, SMOKER, GENDER, children)

library(leaps)

regModel6 <- regsubsets(medical_expenses~
                        age+AGE2+bmi+OBESE+children+SMOKER+GENDER,
                      data = newData,
                      nvmax = 7)
summary(regModel6)
```

## Best 1 variable model -> Smoker
## Best 2 variable model -> age2, smoker

```r
regSummary <- summary(regModel6)
names(regModel6)

regSummary$adjr2
```

## Judging by the adjR2 this model gets overfitted after age, obese, smoker

