+++
title = "We are constantly and unknowningly catching Buses"
description = """\
Life contains many time patterns. The pattern which occurs when \
we catch a bus happens to be one of the most frequent and useful ones.\
"""

date = 2021-06-05

[taxonomies]
tags = ["patterns", "everyday life", "time management"]

[extra]
keywords = ["patterns", "everyday", "traffic", "loops", "eventloop"]
category = "societal"
+++

Every day everyone has to make a decision on what to do with their time. Do we
reserve time to relax or reflect? Some extra time studying or working? Some time
for that hobby project you have been putting of for weeks if not months now? We
are constantly making and adjusting plans, both conciously and subconsiously.
And since most of us are also constantly looking to squeeze out as much of our
time as possible &mdash; wanting to spend on items we deem more important
&mdash; it seems only natural that we again both consiously and subconsiously
analyse what effect the investments of our hours actually offers in return. I
want to have a look at one of the patterns which keeps coming back in these
analysis, why we rarely notice it and what we can learn from it. I am going to
start of with when I first noticed this pattern and what effect that had on me.

## Speedrunners & Buses

Every so often I find something which completely absorbs me. A few years ago,
this turned out to be _speedrunning_. The act of completing certain tasks as fast
as possible. Over the last years, this has become especially prevalent in the
videogaming community. It turns out that _speedrunning_ shows a lot of parallels
to how we conduct ourselves in our everyday lives. Maybe not as extreme, but one
often has to go to the extremes to draw lessons about the modest. What I found
especially intreguing is the combination of skill, extreme problem solving and
chance which is so commonplace within this community of _speedrunners_.
Sometimes people go to extreme lengths to shave of an extra hundredth of a
second.

<!--
https://www.reddit.com/r/oddlysatisfying/comments/lyoybp/so_imagine_a_bus_super_mario_bros_1_visual/

In the original Super Mario Bros., there is a game function only important to speedrunners called a "framerule". Here's how it's usually explained:

Imagine that the flag at the end of the level is a bus stop. A bus arrives to take Mario to the next level every 21 frames (about 0.32 seconds). If you miss it, you will have to wait for the next "bus", meaning a time loss of 0.32 seconds.

The video here is demonstrating that no matter when you hit the flagpole (left), you will always enter the next level at a set interval determined by the framerule (right).
-->

At the time I was looking at the speedrunning world record for the old Super
Mario Bros and all the tricks and glitches in the game's code some person had
used to set that new record. And it turned out that getting a world record of
one hunderdth of a second was completely impossible. It turned out that as can
be seen in {{ figure_ref(n=1) }}, that you could only finish every level every
\~0.35 seconds. This means (if we assume the interval to be exactly 0.35
seconds), it didn't matter that if you finished first level at 17 seconds
seconds and 51 millisecond or at 17 seconds and 84 milliseconds because you would
start the second level at exactly the same time. Or that if you finish the level
that 17 seconds and 49 milliseconds over 17 seconds and 51 milliseconds. You
would actually not gain 2 milliseconds but 35 milliseconds. In terms of
speedrunning this makes a huge difference.

{% figure(href='./mario-framerule.gif', alt='Super Mario Bros Framerule') %}
A visualization of the Super Mario Bros "Framerule" by `u/Flibidy_Dibidy` on
[reddit](https://www.reddit.com/r/oddlysatisfying/comments/lyoybp/so_imagine_a_bus_super_mario_bros_1_visual/)
{% end %}

So what is actually going on here? I already kind of hinted at what is happening
by using the word "interval". Every 21 frames &mdash; which over ~60 frames
every second roughly equals 0.35 seconds &mdash; the game determines if we have
finished the level and decides whether to start to procedure to move onto the
next level. This is analogous of a bus stopping at the end of the level every 21
frames: ready to you to the next level. Every 21 frames you can either just miss
a bus and catch the next one, or just in time make this bus. I am very much not
the first one to make you use this anology. The original speedrunner even talked
about catching the bus. Even more importantly, the game not only checks whether
the player has finished the level, this same 21 frames interval is used
everywhere in the original mario game bros game.

## Time patterns

When we look at how we use our how we might use our time, there is many flavours
of relationships between used time and the value of our time investement. We can
have a linear relationship: the more time we invest, the more value we might
create. This can for example be having a 'clocking-in clocking-out' job, where
you clock in when you start working and clock out when you stop working. Here,
if you work 5 minute more you will earn 5 times as much as working 1 minute
more. This can be seen in {{ figure_ref(n=2) }} Another relationship &mdash;
in fact one of the most common relationships &mdash; is diminishing returns.
A term copied from economics, which in essence comes down to "the more time
you invest the harder it becomes to gain value".  It can be seen as time
getting tired. Similarly one example is the value of your work over time
whilst you are getting tired. This can be seen in {{ figure_ref(n=3) }}. There
are many others of these patterns.

{% figure(href='./linear-correlation.png', alt='Linear Correlation') %}
A linear relationship between time and money.
{% end %}

{% figure(href='./diminishing-returns.png', alt='Diminishing Returns') %}
A diminishing returns relationship between time and work.
{% end %}

In the real world, things are often a lot more messy. Many of these patterns
might me added together. But one of the biggest different
