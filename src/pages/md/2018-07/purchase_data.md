---
title: "Purchase Data"
---
# What drives purchase decision based on Income, Age and Zip
Estimate a binary choice for the outcome

```r
purchase_data <- read.csv("C:/Users/prp12.000/OneDrive for Business/Courses/BIA-6309-Stats-And-Machine-Learning/csv/purchase_data.csv")
View(purchase_data)
attach(purchase_data)
dim(purchase_data)
```

```r
## [1] 36  4
```

```r
options(scipen = 999)
library(psych)
describe(purchase_data)
```

 | X | vars | n | mean | sd median | trimmed | mad | min | max |
 |--:|-----:|--:|-----:|----------:|--------:|----:|----:|----:|
 | purchase* | 1 | 36 | 1.39 | 0.49 | 1.00 | 1.37 | 0.00 | 1.00 | 2.00 |
 | household_income | 2 | 36 | 98.23 | 18.52 | 94.46 | 97.16 | 17.37 | 62.22 | 138.01 |
 | age | 3 | 36 | 51.11 | 4.46 | 51.50 | 51.33 | 4.45 | 41.00 | 59.00 |
 | zip | 4 | 36 | 1.44 | 0.50 | 1.00 | 1.43 | 0.00 | 1.00 | 2.00 |

 range | skew | kurtosis | se |
|-----:|-----:|---------:|---:|
 purchase* | 1.00 | 0.44 | -1.86 | 0.08
 household_income | 75.79 | 0.52 | -0.47 | 3.09
 age | 18.00 | -0.47 | -0.51 | 0.74
 zip | 1.00 | 0.21 | -2.01 | .08

# Areas of Interest

| Value | Means | Std Dev |
| ----- | ----- | ------- |
| Income | 98.23 | 18.52 |
| Age | 51.11 | 4.46 |
| Zip | 1.44  | .50 |

```r
PURCHASE <- ifelse(purchase == "yes", 1,0)
PURCHASE
```

```r
##  [1] 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 1 0 0 1 1 1 1 1 0 1 1 1 0 1 1
## [36] 1
```

```r
LINEAR_REG <- lm(PURCHASE~
                   household_income + age + zip,
                 data = purchase_data)

LINEAR_REG
```

```r
##
## Call:
## lm(formula = PURCHASE ~ household_income + age + zip, data = purchase_data)
```

## Coefficients:

| (Intercept) | household_income | age | zip |
| ----------- | ---------------- | --- | --- |
| -2.37022 | 0.01385 | 0.01638 | 0.38834 |

```r
summary(LINEAR_REG)
```

## Call:

`lm(formula = PURCHASE ~ household_income + age + zip, data = purchase_data)`

## Residuals:

| Min | 1Q | Median | 3Q | Max |
| --- | -- | ------ | -- | --- |
| -0.78405 | -0.26837 | 0.01514 | 0.23781 | 0.79485

# Coefficients:

| Estimate | Std. Error | t value | Pr(>|t|) |
| -------- | ---------- | ------- | -------- |
| (Intercept) | -2.370218 | 0.885588 |-2.676 | 0.011635 * |
| household_income | 0.013853 | 0.003536 | 3.918 | 0.000441 *** |
| age | 0.016383 | 0.014633 | 1.120 | 0.271205 |
| zip | 0.388343 | 0.128459 | 3.023 | 0.004897 ** |

`Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1`

`Residual standard error: 0.382 on 32 degrees of freedom`

`Multiple R-squared:  0.4543,	Adjusted R-squared:  0.4031`

`F-statistic: 8.879 on 3 and 32 DF,  p-value: 0.0001993`

## Observation 1 - Estimating the probability of purchase

 `Purchase = -2.37 + .0139 [ 79.015 ] + .0164 [ 50 ] + .3883 [ 1 ]`
 
 `= -.06`

## Probabilities have boundaries between 0 and 1 - Regression does not
  The reason you cannot use linear regression with binary outcomes - it violates probability boundaries

`library(gvlma) # General valuation of linear model assumptions gvlma(LINEAR_REG)`

```r
Call:
 lm(formula = PURCHASE ~
household_income + age + zip,
 data = purchase_data)
```

# Coefficients:

| (Intercept) | household_income | age | zip |
| ----------- | ---------------- | --- | --- |
| -2.37022 | 0.01385 | 0.01638 | 0.38834 |

```{r}
## ASSESSMENT OF THE LINEAR MODEL ASSUMPTIONS
## USING THE GLOBAL TEST ON 4 DEGREES-OF-FREEDOM:
## Level of Significance =  0.05 
##
## Call:
##  gvlma(x = LINEAR_REG) 
##
```

| Value | p-value | Decision |
| ----- | ------- | -------- |
| Global Stat       | 2.3528 | 0.6712 | Assumptions acceptable. |
| Skewness          | 0.0124 | 0.9113 | Assumptions acceptable. |
| Kurtosis          | 0.1417 | 0.7066 | Assumptions acceptable. |
| Link Function     | 0.2965 | 0.5861 | Assumptions acceptable. |
| Heteroscedasticity | 1.9022 | 0.1678 | Assumptions acceptable. |


# T-Tests using binary outcomes
  
2 values - those that buy and those that don't buy

The people that buy are usually the ones with higher incomes
  
```r
CUSTOMER1 <- subset(purchase_data, purchase == "yes")
describe(CUSTOMER1)
```

```r
##                  vars  n   mean    sd median trimmed   mad   min    max
## purchase*           1 14   2.00  0.00   2.00    2.00  0.00  2.00   2.00
## household_income    2 14 110.25 19.26 109.22  111.13 16.25 71.89 138.01
## age                 3 14  51.50  5.43  52.00   51.75  5.19 41.00  59.00
## zip                 4 14   1.71  0.47   2.00    1.75  0.00  1.00   2.00
##                  range  skew kurtosis   se
## purchase*         0.00   NaN      NaN 0.00
## household_income 66.12 -0.23    -0.91 5.15
## age              18.00 -0.43    -1.02 1.45
## zip               1.00 -0.85    -1.36 0.13
```

```r
CUSTOMER2 <- subset(purchase_data, purchase == "no")
describe(CUSTOMER2)
```

```r
##                  vars  n  mean    sd median trimmed  mad   min    max
## purchase*           1 22  1.00  0.00   1.00    1.00 0.00  1.00   1.00
## household_income    2 22 90.59 13.59  86.89   89.73 9.59 62.22 129.46
## age                 3 22 50.86  3.85  51.50   51.17 3.71 42.00  56.00
## zip                 4 22  1.27  0.46   1.00    1.22 0.00  1.00   2.00
##                  range  skew kurtosis   se
## purchase*         0.00   NaN      NaN 0.00
## household_income 67.24  0.78     1.24 2.90
## age              14.00 -0.61    -0.58 0.82
## zip               1.00  0.95    -1.14 0.10
```
## Hypothesis - Yes and No Groups based on income

|  | Yes | No |
|:-:|:--:|:--:|
Mean | 110 | 90

```r
t.test(CUSTOMER1$household_income, CUSTOMER2$household_income)
```

```r
##
## Welch Two Sample t-test
##
## data:  CUSTOMER1$household_income and CUSTOMER2$household_income
## t = 3.3281, df = 21.221, p-value = 0.00316
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
##   7.383195 31.937896
## sample estimates:
## mean of x mean of y 
## 110.24650  90.58595
```

`NULL hypothesis - μ1 = μ2`
`Alternate       - μ1 > μ2`

`Alpha = 5%`

`Degrees of Freedom = 21`

Reject NULL hypothesis if critical T < 1.721
Reject null when incomes between gaps are statistically significant

```r
t.test(CUSTOMER1$age, CUSTOMER2$age)
```

```r
##
## Welch Two Sample t-test
##
## data:  CUSTOMER1$age and CUSTOMER2$age
## t = 0.38171, df = 21.278, p-value = 0.7065
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
##  -2.827929  4.100657
## sample estimates:
## mean of x mean of y 
##  51.50000  50.86364
```

t = .38171 -> difference in age is not significant

p = .00316

```r
t.test(CUSTOMER1$zip, CUSTOMER2$zip)
```

```r
##
## Welch Two Sample t-test
##
## data:  CUSTOMER1$zip and CUSTOMER2$zip
## t = 2.7847, df = 27.244, p-value = 0.009629
## alternative hypothesis: true difference in means is not equal to 0
## 95 percent confidence interval:
##  0.1163408 0.7667761
## sample estimates:
## mean of x mean of y 
##  1.714286  1.272727
```

# The Logistic Function

For each customer we want the probability of purchase
Logistic Regression (Logit Model)

```r
LOGIT_MODEL <- glm(PURCHASE~
                     household_income + age + zip,
                   family = binomial())
summary(LOGIT_MODEL)
```

```r
## 
## Call:
## glm(formula = PURCHASE ~ household_income + age + zip, family = binomial())
##
## Deviance Residuals: 
##     Min       1Q   Median       3Q      Max  
## -2.0050  -0.6044  -0.2146   0.5873   2.0940  
##
## Coefficients:
##                   Estimate Std. Error z value Pr(>|z|)   
## (Intercept)      -20.00050    8.59537  -2.327  0.01997 * 
## household_income   0.09112    0.03259   2.796  0.00518 **
## age                0.12669    0.12078   1.049  0.29422   
## zip                2.58431    1.05738   2.444  0.01452 * 
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
##
## (Dispersion parameter for binomial family taken to be 1)
##
##     Null deviance: 48.114  on 35  degrees of freedom
## Residual deviance: 28.320  on 32  degrees of freedom
## AIC: 36.32
##
## Number of Fisher Scoring iterations: 5
```

Purchase = -20 + .09112 [Income] + .1267 [Age] + 2.5843 [Zip]

 = -20 + .09112[ 79.015 ] + .1267[ 50 ] + 2.5843[ 1 ]

 = -3.88 -> clearly not a probability

This is `ln[ Odds of Purchase ]`

```r
logLik(LOGIT_MODEL)
```

```r
## 'log Lik.' -14.16015 (df=4)
```

## Logits are predicted values

```r
LOGITS <- data.frame(predict(LOGIT_MODEL))
LOGITS
```

```r
##    predict.LOGIT_MODEL.
## 1    -3.88244344    ## 2   -3.80207986     ## 3    -3.91598954
## 4    -3.71801616    ## 5   -4.10860284     ## 6    -3.62487657
## 7    -3.46088915    ## 8   -2.89375688     ## 9    -3.10929559
## 10   -2.57467982    ## 11  -2.91390905     ## 12   -2.12483595
## 13   -2.07392655    ## 14  -1.57189358     ## 15   -1.49942141
## 16   -1.61967354    ## 17  -1.33780290     ## 18   -0.68788673
## 19   -0.94022770    ## 20  -0.63588731     ## 21    0.16688042
## 22    0.11099538    ## 23   0.43179201     ## 24   -0.01347539
## 25    0.79969518    ## 26   0.79490995     ## 27    0.39677235
## 28    1.69012815    ## 29   1.86614277     ## 30    1.61093334
## 31    2.43714165    ## 32   2.82848549     ## 33    0.20730084
## 34    2.93721414    ## 35   0.87078163     ## 36    3.04243227
```

```r
ODDS <- data.frame(exp(LOGITS))
ODDS
```

```r
##    predict.LOGIT_MODEL.
## 1            0.02060043
## 2            0.02232429
## 3            0.01992083
## 4            0.02428209
## 5            0.01643071
## 6            0.02665239
## 7            0.03140183
## 8            0.05536781
## 9            0.04463238
## 10           0.07617821
## 11           0.05426320
## 12           0.11945256
## 13           0.12569128
## 14           0.20765161
## 15           0.22325930
## 16           0.19796332
## 17           0.26242160
## 18           0.50263716
## 19           0.39053890
## 20           0.52946548
## 21           1.18161296
## 22           1.11738975
## 23           1.54001477
## 24           0.98661499
## 25           2.22486264
## 26           2.21424160
## 27           1.48701737
## 28           5.42017524
## 29           6.46331772
## 30           5.00748275
## 31          11.44029366
## 32          16.91981625
## 33           1.23035266
## 34          18.86322273
## 35           2.38877727
## 36          20.95615231
```

```r
PROBABILITY <- data.frame(ODDS / (1 + ODDS))
PROBABILITY
```

```r
##    predict.LOGIT_MODEL.
## 1            0.02018462
## 2            0.02183680
## 3            0.01953174
## 4            0.02370645
## 5            0.01616511
## 6            0.02596048
## 7            0.03044578
## 8            0.05246305
## 9            0.04272545
## 10           0.07078587
## 11           0.05147026
## 12           0.10670623
## 13           0.11165697
## 14           0.17194661
## 15           0.18251183
## 16           0.16524990
## 17           0.20787160
## 18           0.33450335
## 19           0.28085435
## 20           0.34617681
## 21           0.54162355
## 22           0.52772039
## 23           0.60630150
## 24           0.49663120
## 25           0.68990927
## 26           0.68888462
## 27           0.59791194
## 28           0.84424101
## 29           0.86601133
## 30           0.83354093
## 31           0.91961605
## 32           0.94419586
## 33           0.55164041
## 34           0.94965570
## 35           0.70490831
## 36           0.95445468
```
# These must be between 0 and 1
 Check to make sure that's the case


```r
describe(PROBABILITY)
```

```r
##    vars  n mean   sd median trimmed  mad  min  max range skew kurtosis
## X1    1 36 0.39 0.34   0.31    0.37 0.41 0.02 0.95  0.94 0.36    -1.46
##      se
## X1 0.06
```
Min = .02; Max = .95 -> we're in the clear

# Using Fitted Command

Fitted skips the a) Fit Model b) Exponentiate Logit value and c) probability


```r
PROBS <- data.frame(fitted(LOGIT_MODEL))
PROBS
```

```r
##    fitted.LOGIT_MODEL.
## 1           0.02018462
## 2           0.02183680
## 3           0.01953174
## 4           0.02370645
## 5           0.01616511
## 6           0.02596048
## 7           0.03044578
## 8           0.05246305
## 9           0.04272545
## 10          0.07078587
## 11          0.05147026
## 12          0.10670623
## 13          0.11165697
## 14          0.17194661
## 15          0.18251183
## 16          0.16524990
## 17          0.20787160
## 18          0.33450335
## 19          0.28085435
## 20          0.34617681
## 21          0.54162355
## 22          0.52772039
## 23          0.60630150
## 24          0.49663120
## 25          0.68990927
## 26          0.68888462
## 27          0.59791194
## 28          0.84424101
## 29          0.86601133
## 30          0.83354093
## 31          0.91961605
## 32          0.94419586
## 33          0.55164041
## 34          0.94965570
## 35          0.70490831
## 36          0.95445468
```

# Creating a Confusion Matrix
Predicted class vs Actual class


```r
PREDICTED_CLASS <- ifelse(PROBABILITY > .50, "YES", "NO")
PREDICTED_CLASS
```

```r
##    predict.LOGIT_MODEL.
## 1  "NO"                
## 2  "NO"                
## 3  "NO"                
## 4  "NO"                
## 5  "NO"                
## 6  "NO"                
## 7  "NO"                
## 8  "NO"                
## 9  "NO"                
## 10 "NO"                
## 11 "NO"                
## 12 "NO"                
## 13 "NO"                
## 14 "NO"                
## 15 "NO"                
## 16 "NO"                
## 17 "NO"                
## 18 "NO"                
## 19 "NO"                
## 20 "NO"                
## 21 "YES"               
## 22 "YES"               
## 23 "YES"               
## 24 "NO"                
## 25 "YES"               
## 26 "YES"               
## 27 "YES"               
## 28 "YES"               
## 29 "YES"               
## 30 "YES"               
## 31 "YES"               
## 32 "YES"               
## 33 "YES"               
## 34 "YES"               
## 35 "YES"               
## 36 "YES"
```

```r
COMPARISON_DATA <- data.frame(PREDICTED_CLASS, purchase)
COMPARISON_DATA
```

```r
##    predict.LOGIT_MODEL. purchase
## 1                    NO       no
## 2                    NO       no
## 3                    NO       no
## 4                    NO       no
## 5                    NO       no
## 6                    NO       no
## 7                    NO       no
## 8                    NO       no
## 9                    NO       no
## 10                   NO       no
## 11                   NO       no
## 12                   NO       no
## 13                   NO      yes
## 14                   NO       no
## 15                   NO      yes
## 16                   NO       no
## 17                   NO       no
## 18                   NO       no
## 19                   NO       no
## 20                   NO       no
## 21                  YES      yes
## 22                  YES       no
## 23                  YES       no
## 24                   NO      yes
## 25                  YES      yes
## 26                  YES      yes
## 27                  YES      yes
## 28                  YES      yes
## 29                  YES       no
## 30                  YES      yes
## 31                  YES      yes
## 32                  YES      yes
## 33                  YES       no
## 34                  YES      yes
## 35                  YES      yes
## 36                  YES      yes
```

```r
TABLE <- table(COMPARISON_DATA)
TABLE
```

```r
##                     purchase
## predict.LOGIT_MODEL. no yes
##                  NO  18   3
##                  YES  4  11
```

#<-- Linear Disciminant Analysis -->


```r
library(DiscriMiner)
```

```r
## Warning: package 'DiscriMiner' was built under R version 3.5.1
```

```r
LDA_MODEL <- linDA((purchase_data)[,2:4], purchase)
summary(LDA_MODEL)
```

```r
##                Length Class  Mode   
## functions       8     -none- numeric
## confusion       4     table  numeric
## scores         72     -none- numeric
## classification 36     factor numeric
## error_rate      1     -none- numeric
## specs           6     -none- list
```

```r
LDA_MODEL$functions
```

```r
##                            no         yes
## constant         -111.5490226 -132.459978
## household_income    0.6078224    0.708697
## age                 3.0042086    3.123511
## zip                11.1948111   14.022674
```

# Creates 2 seperate regression equations -> Purchase and No purchase 
 `No Purchase = -111.55 + .6078[Income] + 3 [Age] + 11.19[Zip] = NO`
   
   `No = -111.55 + .6078[ 79.015 ] + 3[ 50 ] + 11.19[ 1 ]= 98`

 `Purchase = -132.46 + .7087[Income] + 3.12[Age] + 14.02[Zip] = YES`
   
   `Yes = 132.46 + .7087[ 79.015 ] + 3.12 [ 50 ] + 14.02[ 1 ] = 94`

 No score 98 > 94 => No Purchase


```r
LDA_MODEL$scores
```

```r
##           no       yes
## 1   97.88331  93.73592
## 2   98.41941  94.36099
## 3   91.18223  87.06057
## 4   96.82109  92.87670
## 5   79.10183  74.87169
## 6   93.12423  89.32485
## 7   98.53637  94.87664
## 8  115.27425 112.11669
## 9  105.20002 101.88764
## 10 104.88059 102.10589
## 11 108.66253 105.54551
## 12 120.40367 118.09738
## 13 101.74379  99.58633
## 14 121.93320 120.26004
## 15 124.57576 122.96188
## 16 119.45537 117.75026
## 17  95.85892  94.62120
## 18 121.78544 121.05772
## 19 123.98790 123.03501
## 20 132.49543 131.81662
## 21 133.96482 134.12056
## 22 120.63743 120.85702
## 23 127.09564 127.62847
## 24 125.85200 125.96704
## 25 133.86809 134.76633
## 26 148.51746 149.35985
## 27 113.90744 114.52722
## 28 137.64900 139.55400
## 29 143.14138 145.19934
## 30 130.64340 132.52359
## 31 151.26866 153.91688
## 32 143.08380 146.27004
## 33 116.52929 116.99352
## 34 117.89994 121.45800
## 35 125.27352 126.43038
## 36 122.92004 126.55268
```

```r
LDA_MODEL$classification
```

```r
##  [1] no  no  no  no  no  no  no  no  no  no  no  no  no  no  no  no  no 
## [18] no  no  no  yes yes yes yes yes yes yes yes yes yes yes yes yes yes
## [35] yes yes
## Levels: no yes
```

```r
LDA_MODEL$confusion
```

```r
##         predicted
## original no yes
##      no  18   4
##      yes  2  12
```

```r
LDA_MODEL$error_rate
```

```r
## [1] 0.1666667
```

# This models error rate is lower than the first
 This imposes a straight jacket of linearity - you're better off using logistic regression and checking with LDA
