---
title: "GGPLOT Intro"
date: "2018-05-30"
tags: [ "R", "Assignment" , "BIA 6309" ]
---

# [Source](http://r4ds.had.co.nz/data-visualisation.html)

# Set up a Template

```r
mpg
ggplot(
    data = mpg      # ggplot(data = <DATA>) +
  ) + geom_point( # <GEOM_FUNCTION>(# mapping = aes(<MAPPINGS>))
            mapping = aes(
               x = displ,
               y = hwy
    )
)
```

# Using colors

```r
ggplot(data = mpg) + geom_point(
    mapping = aes (
        x = displ,
        y = hwy,
        color = class
    )
)
```

# Using Size instead of color

```r
ggplot(data = mpg) +
geom_point(
    mapping = aes (
        x = displ,
        y = hwy,
        size = class
    )
)
```

# Using alpha

```r
ggplot(data = mpg) +
  geom_point(
      mapping = aes (
          x = displ,
          y = hwy,
          alpha = class
    )
)
```

# Using Shape - Only shows 6 at a time

```r
ggplot(data = mpg) +
  geom_point(
      mapping = aes (
          x = displ,
          y = hwy,
          shape = class
        )
)
```

# Lesson: x and y locations of a point are aesthetics themselves and can be used to display information

# Setting Aesthetic Properties

```r
ggplot(data = mpg) +
  geom_point(
      mapping = aes(
       x = displ,
       y = hwy
       ),
       color ="blue"
    )
# Note that color is not an argument and is outside of the bracket
```

# Using Facets - subplots that each display one subset of the data 

```r
ggplot(
    data = mpg
    )
    + geom_point(
        mapping = aes(
            x = displ,
            y = hwy
            ))
            + facet_wrap(
                ~ class,
                nrow = 2
            )
```

# Format each into a grid

```r
ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy)) +
  facet_grid(drv ~ cyl)
    # Note: Usually put variable with more unique levels in columns
```

# <- Exercises ->

```r
ggplot(data = mpg) +
  geom_point(mapping = aes(x = drv, y = cyl))

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy)) +
  facet_grid(drv ~ .)

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy)) +
  facet_grid(. ~ cyl)

ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy)) + 
  facet_wrap(~ class, nrow = 2)
```

# Changing the geom function
# Scatterplot

```r
ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy))

# Smooth line
ggplot(data = mpg) +
  geom_smooth(mapping = aes(x = displ, y = hwy))

# Split lines based on drivetrain
ggplot(data = mpg) +
  geom_smooth(mapping = aes(x = displ, y = hwy, linetype = drv))
# f - front wheel, 4 - 4 wheel and r - rear wheel

# [ggplot extensions](https://www.ggplot2-exts.org)
# [ggplot cheatsheet](http://rstudio.com/cheatsheets)
# ggplot will automatically group data for each unique value of the grouping variable

# Seperate drivetrains by color
ggplot(data = mpg) +
  geom_smooth(
    mapping = aes(x = displ, y = hwy, color = drv),
    show.legend = FALSE
  )

# Adding multiple geoms to the same plot (Scatter and line)
ggplot(data = mpg) + 
geom_point(mapping = aes(x = displ, y = hwy)) +
  geom_smooth(mapping = aes(x = displ, y = hwy))

# Layering / mapping data 
ggplot(data = mpg, mapping = aes(x = displ, y = hwy)) + 
  geom_point() +
  geom_smooth()

# Extending mapping for a single layer only 
ggplot(data = mpg, mapping = aes(x = displ, y = hwy)) +
  geom_point(mapping = aes(color = class )) +
  geom_smooth()
```

```r
# Specifying data in each layer - local data overrides global for that layer only
ggplot(data = mpg, mapping = aes(x = displ, y = hwy)) +
  geom_point(mapping = aes(color = class)) +
  geom_smooth(data = filter(mpg, class == "subcompact"), se = FALSE)

# Some things to note:
    # Bar charts, histograms and frequency polygons bin data then plot bin counts
    # Smoothers fit a model to the data and plot predictions from the model
    # boxplots compute a summary of the distribution then display a specifically formatted box
# Bins are basically the same thing as creating measures in PBI or DAX
# Each geom has a default - manually override to change
```

```r
ggplot(data = diamonds) + 
  stat_summary(
    mapping = aes(x = cut, y = depth),
    fun.ymin = min,
    fun.ymax = max,
    fun.y = median
  )

# Color / Fill - Fill is more useful
ggplot(data = diamonds) + 
  geom_bar(mapping = aes(x=cut, color = cut))

# Color only outlines and looks dumb - use fill
ggplot(data = diamonds) + 
  geom_bar(mapping = aes(x = cut, fill = cut))

# Adding another variable to fill
ggplot(data = diamonds) + 
  geom_bar(mapping = aes (x = cut, fill = clarity))

# Positioning data 
# Position = "identity" places objects exactly where it falls on graph - not good for bars
ggplot(data = diamonds, mapping = aes ( x = cut, fill = clarity )) +
  geom_bar(alpha = 1/5, position = "identity")
ggplot(data = diamonds, mapping = aes (x=cut, color = clarity)) +
  geom_bar(fill=NA, position = "identity")

# Position = "fill" makes each set of stacked bars the same height which makes comparing proportions easier
ggplot(data = diamonds) + 
  geom_bar(mapping = aes(x = cut, fill = clarity), position = "fill")

# Position = "dodge" places each object directly beside one another
ggplot(data = diamonds) +
  geom_bar(mapping = aes(x = cut, fill = clarity), position = "dodge")

# Using jitter to add some random noise
ggplot(data = mpg) +
  geom_point(mapping = aes(x = displ, y = hwy), position = "jitter")

# Jitter trade-off -> makes graph less accurate on small scale,
#   but more revealing at large scales 

# Coordinate Systems
# Default - Cartesian 
# x and y positions act independently to determine location of each point
ggplot(data = mpg, mapping = aes(x = class, y = hwy)) + 
  geom_boxplot()

# Flip the coordinates - good for long labels or boxplots
ggplot(data = mpg, mapping = aes(x = class, y = hwy)) + 
  geom_boxplot() +
  coord_flip()

# QuickMap - used for spatial data / maps
nz <- map_data("nz")

ggplot(nz, aes(long, lat, group = group)) +
  geom_polygon(fill = "white", colour = "black")

ggplot(nz, aes(long, lat, group = group)) +
  geom_polygon(fill = "white", colour = "black") +
  coord_quickmap()

# Polar Coordinates
bar <- ggplot(data = diamonds) + 
  geom_bar(
    mapping = aes (x = cut, fill = cut),
    show.legend = FALSE,
    width = 1
  ) +
  theme(aspect.ratio = 1) +
  labs(x = NULL, y = NULL)

bar + coord_flip()
bar + coord_polar()

# Updating our Template - 7 Parameters in <BRACKETS>
# ggplot(data = <DATA>) +
#   <GEOM_FUNCTION>(
#     mapping = aes(<MAPPINGS>),
#     stat = <STAT>,
#     position = <POSITION>
#   ) + 
#   <COORDINATE_FUNCTION> +
#   <FACET_FUNCTION>
  
  # Review / Steps
  #    1. Start with a dataset
  #    2. Compute counts or other stats
  #    3. Represent each observation, graphically
  #    4. Map the fill to the stat
  #    5. Place geoms in coordinate system
  #    6. Map x and y values to axis

#-- Workflow Basics --#
# [Source](http://r4ds.had.co.nz/workflow-basics.html)
# Assignment Statements - "object name gets value"
#   object_name <- value

# Keyboard shortcut (Alt + -) inserts <-
# function_name(arg1 = val1, arg2 = val2, ...)
seq(1,10)

# Assign a value to an object
x <- "Hello World"
x

# Instead of immediately checking the value, print it to the screen
(y <- seq(1,10, length.out = 5))

# Variables will also be shown in the Environment Pane

# Alt + Shift + K -> show shortcuts 
# Ctrl + Shift + C -> Comment / Uncomment lines
```