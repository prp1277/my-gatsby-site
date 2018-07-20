---
title: "Assignment 1"
date: "2018-07-06"
tags: [ "R" , "Assignment" , "BIA 6309" ]
---
# ASSIGNMENT 1

[Sharpe Data](/BIA-6309-Stats-And-Machine-Learning/csv/sharpe_data.csv)

## I. Questions Below

One of the central tenets of modern financial theory is that return and risk are related – high risk assets (stocks, bonds, mutual funds, etc.) will generate high returns.

In one of the earliest papers to test the return/risk proposition, Nobel prize winner William Sharpe assembled return and risk data for 34 mutual funds (“Mutual Fund Performance”, Journal of Business, January 1966) and ran a linear regression to estimate overall return/risk performance of the mutual fund industry.

### a) What is the dependent variable here? Independent variable?

The dependent variable here is return; the independent variable is risk.

### b) What is the mean, median and standard deviation of the variables in the data set?

```r
> library(psych)
> describe(sharpe_data)

                  vars  n  mean   sd median trimmed   mad  min  max range  skew
mutual_fund_name*    1 34 17.50 9.96  17.50   17.50 12.60  1.0 34.0  33.0  0.00
return               2 34 13.64 2.44  14.20   13.54  2.89 10.0 18.6   8.6  0.18
risk                 3 34 17.07 4.29  16.85   17.09  5.11  9.2 25.5  16.3 -0.02
                  kurtosis   se
mutual_fund_name*    -1.31 1.71
return               -1.06 0.42
risk                 -1.10 0.74
```

### c) Run a linear regression to determine the exact relationship between return and risk. Does the attached data validate financial theory?

```r
> summary(REGMODEL1)

Call:
lm(formula = return ~ risk)

Residuals:
    Min      1Q  Median      3Q     Max
-3.6411 -0.9904  0.0420  0.7523  3.3162

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  5.54094    0.96861   5.721 2.44e-06 ***
risk         0.47451    0.05508   8.616 7.60e-10 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 1.358 on 32 degrees of freedom
Multiple R-squared:  0.6988,	Adjusted R-squared:  0.6893
F-statistic: 74.23 on 1 and 32 DF,  p-value: 7.605e-10
```

**The Regression implies that:**

```r
return = 5.54 + .47 (risk)
# Note that 5.54 and .47 should be interpreted as 5.54% and .47%.
```

The estimated equation above implies that if risk is 1 (i.e. 1%), return will be

`5.54 + .47 (1) = 6.01 (i.e. 6.01%)`

The positive sign on risk implies that as risk increases, return also increases validating the notion that return and risk are positively related.The fact that the coefficient sign on risk is positive does not, by itself, indicate statistical significance.

To assess statistical significance, look at the p-values ( i.e. Pr( > | t | ) column in R output ).

**A p-value lower than .05 (5%) typically implies that the estimated coefficient is statistically significant. Both the Intercept and risk variables here have p-values that are extremely low. Both intercept and risk are extremely significant.**

(2.44 e-06 means move the decimal point to 6 places before 2.44 or .00 00 0244. Similarly, 7.60 e-10 means .000 000 000 760).

### d) If risk increases by 3%, what is the predicted return according to the regression?

```r
## Suppose risk is 10 (%), predicted return is:
return = 5.54 + .47 (10) = 10.24 (%)

## Suppose risk goes up by 3% from 10% to 13%. Predicted return is then:
return = 5.54 + .47 (13) = 11.65 (%)
```

The increase in return is then `11.65% – 10.24% = 1.41%`. Notice that the intercept term has no effect.

Thus, if risk goes up by 3%, return increases by `.47(3) = 1.41%`.  

Clearly, as risk goes up, return also goes up, validating the return/risk relationship postulated by finance theory.

### e) What is the R2 of the regression - interpret this value.

The R2 in the regression is a measure of explanatory power. The R2 value of .70 implies that 70% of the variation in returns is explained by the intercept and risk variables.
The other 30% could be explained by variables that were not included in the model such as GDP changes, inflation, interest rate changes, etc.

### f.) Analysis of variance (i.e. ANOVA) decomposes the Total Sum of Squares into its component parts such as Regression Sum of Squares and Residual Sum of Squares. What are these values? How are these values related to R2?

ANOVA (Analysis of Variance) decomposes variance into its constituent parts. Total Sum of Squares can be decomposed into Regression Sum of Squares and Residual Sum of Squares.

Note that Regression Sum of Squares is sometimes called “Explained Sum of Squares” while Residual Sum of Squares is sometimes called “Error Sum of Squares”.

`Total Sum of Squares = Regression Sum of Squares + Residual Sum of Squares`

```r
> anova(REGMODEL1)
Analysis of Variance Table

Response: return
          Df  Sum Sq Mean Sq F value    Pr(>F)
risk       1 136.888 136.888  74.227 7.605e-10 ***
Residuals 32  59.014   1.844
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
```

The TSS, RSS decomposition is not completely obvious in the R output. Regression Sum of Squares is about 136.88 while Residual Sum of Squares is 59.014.

Thus:

`Total Sum of Squares = Regression Sum of Squares + Residual (Error Sum of Squares)`

```r
= 137 + 59
= 196
```

The goal of an explanatory model is to maximize R2. This can be achieved if we minimize the Residual Sum of Squares. 

`R2 = [Regression Sum of Squares / Total Sum of Squares]`

```r
= [ 137 / 196 ]  
.70
```

OR

`R2 = 1 - [Residual (Error) Sum of Squares / Total Sum of Squares]`

```r
= 1 – [ 59 / 196 ]
.70
```

**The lower the Residual (Error) Sum of Squares the higher the R2 and the greater the explanatory power of the model.**

### g) How can you interpret the intercept in this regression?

If risk were zero, return would be 5.54.

Thus, the intercept value of 5.54% can be interpreted as the return you get when there is no risk. In finance, this is called the “risk free rate”.

The standard example of a risk free rate is the rate of return on 3 month, US Treasury bills. Three month T-bills are guaranteed by the U.S. Treasury and thus have no risk.  

### h) “Massachusetts Investors – Growth Stock”, one of the mutual funds in the data set has a return of 18.60% and risk of 22.7%. Is this fund under-performing or over-performing according to the linear regression equation?

The regression equation is:

`return = 5.54 + .47 (risk)`

Massachusetts Investors – Growth Stock has an actual return of 18.60% and a risk of 22.70%.

According to the regression equation, the predicted return for a fund that has a risk of 22.70% is:

```r
Predicted return = 5.54 + .47 (22.70)
= 16.21 (i.e. 16.21%)
```

**Since the actual return (18.60%) is greater than the predicted return (16.21%), Massachusetts Investors- Growth Stock is over performing.**

```r
###############R CODE FOR SHARPE DATA###################
attach(sharpe_data)
names (sharpe_data)
dim (sharpe_data)
str (sharpe_data)
summary(sharpe_data)
plot(risk, return)
cor(risk, return)
#############################
REGMODEL1<-lm(return~risk)
summary(REGMODEL1)
anova(REGMODEL1)
abline(REGMODEL1)
fitted(REGMODEL1)
```

## II. Chapter 3 of the text (“Introduction to Statistical Learning”) covers Linear Regression. The worked out example in Chapter 3 of this book uses the Advertising data set. The data set explains Sales as a function of TV, radio and newspaper advertising. Use R to run the following models:

```r
########ADVERTISING DATA ANALYSIS################
attach(advertising_data)
dim(advertising_data)
names(advertising_data)
summary(advertising_data)
```

### a) Sales = β0 +  β1  (TV)

```r
REG1<-lm(sales ~ TV)
summary(REG1)
anova(REG1)
```

### b) Sales = β0 +  β1  (radio)

```r
REG2<-lm(sales ~ radio)
summary(REG2)
anova(REG2)
```

### c) Sales = β0 +  β1  (newspaper)

```r
REG3<-lm(sales ~ newspaper)
summary(REG3)
anova(REG3)
```

### d) Sales = β0 +  β1 (TV ) + β2  (Radio) + β3  (Newspaper)

```r
REG4<-lm(sales ~ TV + radio + newspaper)
summary(REG4)
anova(REG4)
```

### e) What is the correlation between Sales, TV, Radio and Newspaper advertising?

```r
cor(advertising_data)
```

> Make sure you create new R files whenever you work with a new data set. You will get incorrect results if you use the same names for different data sets.

## III. The Dow Jones Industrial Average (DJIA) and the Standard & Poor’s 500 (S&P 500) indexes are used as measures of overall movement in the stock market. The DJIA is based on the price movements of 30 large companies; the S&P 500 is a broader index composed of 500 stocks. The closing price for the DJIA and the S&P 500 for 15 weeks, beginning with January 6, 2012, follow (Barron’s web site, April 17, 2012).

### a) Develop a scatter chart for these data with DJIA as the independent variable. What does the scatter chart indicate about the relationship between DJIA and S&P 500?

The scatter chart with DJIA as the independent variable looks thus:

This scatter chart indicates there may be a positive linear relationship between DJIA and S&P 500. Since both indexes are used as measures of overall movement in the stock market, a positive relationship is expected.

### b) Develop an estimated regression equation with S&P 500 as a function of DJIA. What is the estimated regression equation?

```r
> summary(REG_MODEL)

Call:
lm(formula = sp500 ~ djia)

Residuals:
    Min      1Q  Median      3Q     Max
-16.415  -6.378  -1.154   6.133  18.140

Coefficients:
              Estimate Std. Error t value Pr(>|t|)
(Intercept) -669.02124  130.73358  -5.117 0.000198 ***
djia           0.15727    0.01015  15.488 9.29e-10 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 9.608 on 13 degrees of freedom
Multiple R-squared:  0.9486,	Adjusted R-squared:  0.9446
F-statistic: 239.9 on 1 and 13 DF,  p-value: 9.292e-10
```

The estimated simple linear regression equation is:

`S&P 500 = -669 + 1573 DJIA`

### c) How much of the variation in the sample values of S&P 500 does the model estimated above explain? How much is Total Sum of Squares? Regression Sum of Squares? Error (Residual) Sum of Squares?

`R2 = .95`. Thus, the regression model explains approximately 95% of the variation in the values of S&P 500 in the sample.

```r
> anova(REG_MODEL)
Analysis of Variance Table

Response: sp500
          Df  Sum Sq Mean Sq F value    Pr(>F)
djia       1 22145.6 22145.6  239.89 9.292e-10 ***
Residuals 13  1200.1    92.3
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

# Regression (Explained) Sum of Squares = 22,145.6
# Residual (Error) Sum of Squares = 1200.1
# Total Sum of Squares = 23,345.7
# Note that [Regression Sum of Squares / Total Sum of Squares]
# = [22,145.6 / 23,345.7] = .95
```

### d) What is the relationship between the correlation coefficient and R2 in this model?

The correlation between the S&P 500 and DJIA is .97.

The square of this value `[CORR2 = .972 = .95]`. The square of correlation thus equals R2. _This relationship is however valid only for simple linear regression._

### e) Suppose that the closing price for the DJIA is 13,500. Estimate the closing price for the S&P 500 according to the regression model.

Using this regression model, when DJIA is 13,500 the predicted S&P 500 is:

`S&P 500 = -669 + .1573 (13,500) = 1,454 points`

### f) Should we be concerned that the DJIA value of 13,500 used to predict the S&P 500 value in part [e] above, is beyond the range of the DJIA data used to develop the estimated regression equation?

The maximum DJIA in the sample is 13,233.

Thus, when the DJIA value of 13,500 is used to predict the S&P 500 value, the regression model has been extrapolated beyond the experimental region of the data.

**Thus, one should be concerned about the reliability of this prediction.**

```r
attach(djia_sp500_data)
names(djia_sp500_data)
#######################
plot(djia, sp500)
REG_MODEL<-lm(sp500~djia)
summary(REG_MODEL)
abline(REG_MODEL)
anova(REG_MODEL)
cor(djia, sp500)
```

## IV. Answer question 2.1 on page 49 of Data Mining for Business Analytics
ANSWERS TO 2.1 PAGE 49

**a) Supervised Learning**

This is supervised learning because there is a distinct outcome variable - whether the loan was approved or not.
(The appropriate model for binary decisions of this nature is Logistic Regression).  

**b) Unsupervised Learning**

This is unsupervised learning because there is no obvious outcome variable.
(The appropriate model for this is Association Mining).

**c) Supervised Learning**

This is supervised learning, because for there is a clear outcome variable – the network data packet is a virus or not.

**d) Unsupervised Learning**

This is unsupervised learning because there is no clear outcome. Typically, Cluster Analysis or Association Mining is used to create segments.

**e) Supervised Learning**

This is supervised learning since the outcome variable is bankruptcy or not.
(The appropriate model for binary decisions of this nature is Logistic Regression).  

**f) Supervised Learning**

This is supervised learning because the outcome variable of interest is repair timings.
(One could use Linear Regression to estimate repair timings).

**g) Supervised Learning**

This is supervised learning since mail is sorted based on distinct zip codes.

**h) Unsupervised Learning**

This is unsupervised learning since discount coupons are typically printed based on purchases of similar customers segments.
(The appropriate model for this is Association Mining).

## V. Answer question 2.7 on page 50 of “Data Mining for Business Analytics”
ANSWERS TO 2.7 PAGE 50

Since 5% (.05) of the values are missing and these missing values are spread randomly, it can be assumed that the probability that a record is completely intact (i.e. has no missing value) is 95% (.95).

```r
# The probability that two records are completely intact is .95 x .95 = .9025.
# The probability that all 50 records are completely intact 
=.95 x .95 x .95 x ……. .95 = [ .95 ] 50 = .0769
```  

Thus, only 7.69% of the records are completely intact. If the analyst decides to keep only intact records, he would have to discard nearly 92% of the records which would result in a loss of valuable information.

**This is the reason that “imputation” is used to handle missing values.**
