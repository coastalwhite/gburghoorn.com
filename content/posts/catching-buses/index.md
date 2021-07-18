+++
title = "We are constantly and unknowingly catching buses and that's a good thing"
description = """\
Life contains many time patterns. The pattern which occurs when \
we (attempt) to catch a bus happens to be one of the most frequent and useful ones for \
managing our time."""

date = 2021-07-18
updated = 2021-07-18

[taxonomies]
tags = ["patterns", "everyday life", "time management"]

[extra]
keywords = ["patterns", "everyday", "traffic", "loops", "eventloop"]
category = "societal"
+++

Every day, everyone has to decide what to do with their time. Do we reserve time
to relax or reflect? Some extra time studying or working? Some time for that
hobby project you have been putting of for weeks, if not months now? We are
constantly making and adjusting plans, both consciously and subconsciously. A
lot of us are constantly looking to squeeze out as much of our time as possible.
Probably, we want to spend time on items we deem important, which can include
relaxation but also studying a new skill. It seems only natural that we analyze
what effect the investment of our hours actually offers in return. I want to
have a look at one of the patterns which keeps coming back in these analyses,
why rarely noticing it can cause problems and what we can learn from noticing
it. I am going to start of with when I first noticed this pattern and what
effect that had on me.

## Speedrunners & Buses

Every so often I find something which completely absorbs me. A few years ago,
this turned out to be *speedrunning*. The act of completing certain tasks as
fast as possible may seem mundane to some. But over the last years, this has
become particularly prevalent in the video gaming community. It turns out that
speedrunning shows many parallels to how we conduct ourselves in our everyday
lives. One often has to go to the extremes to draw lessons about the modest.
What I found especially intriguing is the combination of skill, exceptional
problem-solving and the presence of chance which is so commonplace within this
community of speedrunners. Sometimes people go to remarkable lengths to shave of
an extra hundredth of a second.

<!--
https://www.reddit.com/r/oddlysatisfying/comments/lyoybp/so_imagine_a_bus_super_mario_bros_1_visual/

In the original Super Mario Bros., there is a game function only important to speedrunners called a "framerule". Here's how it's usually explained:

Imagine that the flag at the end of the level is a bus stop. A bus arrives to take Mario to the next level every 21 frames (about 0.32 seconds). If you miss it, you will have to wait for the next "bus", meaning a time loss of 0.32 seconds.

The video here is demonstrating that no matter when you hit the flagpole (left), you will always enter the next level at a set interval determined by the framerule (right).
-->

At the time, I was interested in the speedrunning world record for the old Super
Mario Bros game and all the tricks and computer glitches in the game's code some
individual had used to set a record. As this person would explain, it was
impossible to get a record one hundredth of a second faster than him. Similarly,
he was unable to be one hundredth of a second faster than the previous record.
It turned out that, as can be seen in {{ figure_ref(n=1) }}, that you could only
finish every level every ~0.35 seconds. Let us assume that it is exactly 0.35
seconds. This means it will not matter if you finish a level in 17.51 seconds or
in 17.84 seconds because you would start the next level at the same time. This
might not seem like a big deal, but to speedrunners &mdash; to which every
millisecond is a massive deal &mdash; this was a giant hurdle to cross.
Similarly, if you finish the level in 17.49 seconds instead of 17.51 seconds,
you would actually not gain 20 milliseconds but 350 milliseconds. 

{% figure(href='./mario-framerule.gif', alt='Super Mario Bros Framerule') %}
A visualization of the Super Mario Bros "Framerule" by <em>u/Flibidy_Dibidy</em> on
<a href="https://www.reddit.com/r/oddlysatisfying/comments/lyoybp/so_imagine_a_bus_super_mario_bros_1_visual/">reddit.com</a>
{% end %}

So, what is actually going on here? The game draws roughly 60 pictures (also
known as frames) on the screen per second, which we will perceive a smooth video
(game). Every 21 frames &mdash; which over ~60 frames every second roughly
equals 0.35 seconds &mdash; the game will determine whether we have finished the
level at that point. Depending on whether we have then finished the level, it
will decide whether to start the procedure to move onto the next level. This is
analogous to a bus stopping at the end of the level every 21 frames: ready to
take you to the next level. I am very much not the first one to make use of this
analogy. The original speedrunner even talked about catching the bus. Whilst
real-world buses might not arrive every few milliseconds, we might also not be
looking to save milliseconds. It turns out that this pattern between time and
value created is quite common.

# Time patterns

When we look at how we might use our time, there are many flavors of
relationships between used time and the value of our time investment. We can
have a linear relationship: the more time we invest, the more value we might
create. This can for example be having a &lsquo;clocking-in clocking-out&rsquo;
job, where you clock in when you start working and clock out when you stop
working. Here, if you work 5 minutes, you will earn 5 times as much as working 1
minute. This can be seen in {{ figure_ref(n=2) }}. Another relationship &mdash;
in fact one of the most common relationships &mdash; is diminishing returns.  A
term borrowed from economics, which in essence comes down to &ldquo;the more time
you invest, the harder it becomes to gain value&rdquo;. It can be seen as you
over time getting tired. Similarly, one of the best examples is the value of
your work over time whilst you are getting tired. A graphical representation can
be seen in {{ figure_ref(n=3) }}. There are many others of these patterns.

{% figure(href='./linear-correlation.png', alt='Linear Correlation') %}
A linear relationship between time and money.
{% end %}

{% figure(href='./diminishing-returns.png', alt='Diminishing Returns') %}
A diminishing returns relationship between time and work.
{% end %}

One of the patterns which closely resembles how the Mario game before handles
time has no definite name. Since it shows up in many fields in different ways,
it is also known under different names. Most of the time, it involves words as
*&ldquo;clustering&rdquo;* or *&ldquo;interval&rdquo;*, but I would like to
refer to it as the *&ldquo;Bus Stop Pattern&rdquo;*. So, what am I talking
about? Imagine we are observing a bus stop where many people are constantly
arriving and taking the bus. As can be seen in {{ figure_ref(n=4) }}. If a bus
leaves from the bus stop every 15 minutes, you might have to wait anywhere from
say 0 second, if you arrive just as the bus arrives, to 14 minutes and 59
seconds, if you just missed the bus. But if you just missed the bus by a few
seconds, you will have to wait until the same point in time as someone who
missed the bus by 5 minutes. Making missing the bus by 1 second have an equal
cost of time as missing the bus by 5 minutes. If fact, one might argue that the
person who missed the bus by 5 minutes is potentially better off (time-wise).
Similarly, one might argue the same for someone who missed the bus by 10 minutes
or a person who caught the bus by 1 second. In the real-world scenario of this
idealized problem, buses don't arrive and leave exactly every 15 minutes, but
the idea still holds.

{% figure(href='./bus-stop.gif', alt='Visualization of people boarding a bus') %}
Visualization of people boarding a bus
{% end %}

This pattern shows up a lot in everyday life. Other examples in traffic include
traffic lights and slow-moving vehicles passing each other on the highway. But,
it will also appear when forming schedules, when signing up for annual events,
when talking to people, many areas of computer science, and many, many more
occasions. Just being aware of when this pattern happens to you can save you
time. If you know you are going to miss the bus, don't rush to the bus stop just
to wait there for 15 minutes. Instead, you might clean out the dishwasher then
rush to the bus stop. If you see that you will not make it for the next interval
or even that you might not make it at all, it might be better to consider doing a
different task. Most of the time, these will be short mindless tasks which you
have either been putting off or you had planned for later. In both cases, you
are saving time as opposed to waiting at the bus-stop, or at least not losing
time to what might have been an unfortunate situation.

# Forming your own bus stops

Being aware of the bus stops around you is very useful. It can save you time,
money, and effort. What is even more powerful, however, is forming your own bus
stops. One of the biggest problems we are dealing with in current-day life is
*context switching*.  Context switching is shifting from one task to another one
which costs us time and a massive amount of mental effort. Similar to how
players might warm up for a sports match. For some tasks, it might take upwards
of 30 minutes to get into an optimal working state. This optimal state being
sometimes referred to as the *&ldquo;flow&rdquo;* state, which was coined in the
best-selling book *Flow: The Psychology of Optimal Experience* by *Mihaly
Csikszentmihalyi*.  The cost of switching is especially prevalent for tasks
which require a more birds-eyed view. These tasks include, but are not limited
to, reading books with many characters or different story-lines, studying
academic subjects but also just whilst working most of the time. If we are
looking to use our time optimally or even looking to expend the least amount of
effort, it would seem logical to minimize the times we are context switching. 

Most people know that there is a delicate balance between working time and break
time. If you work too much without taking a break, you will eventually cause
more problems within the work you are doing than you are solving in the same
time. Similarly, there is this delicate balance between working on different
tasks. Work on too little tasks and you might be too inflexible or cause
annoyances with colleagues. Work on too many tasks and you might get nothing
done, since most of your time and effort is spent context switching.

Even if you are not looking to optimize time usage, there is a still a big
chance you want to avoid expending unnecessary effort on any individual task.
That is where *interrupt coalescing* comes in. A term originally from computer
science coined for day to day use by the book *Algorithms to live by* written by
*Brian Christian* and *Tom Griffiths*. Interrupt coalescing is similar to
introducing a bus stop for ourselves. If you get 5 emails every hour which we
read and perhaps respond to, interrupt coalescing might tell us to maybe go
through 30 emails every 6 hours. This method is like having a bus stop for your
mail-inbox. If a certain email doesn't catch the bus now, the mail can catch the
next bus in 6 hours. This leaves context switching to a minimum, getting more
work done.

Some more extreme examples which are also discussed in *Algorithms to live by*
show how this might be included in our day-to-day lives. Donald Knuth, who is
one of the major players in computer science over the last century, works in
a way he calls *&ldquo;batch processing&rdquo;*. He has many projects which he
maintains. Projects over time are have grown large and unwieldy, if not for a
complete deep dive into its subject matter. He will, therefore, intentionally
work each of his projects for an extended amount of time &mdash; sometimes
working solely on one project for months &mdash; only to ignore that same
project for years to then repeat the cycle. This way, Knuth is completely
intellectually entangled in a project for a couple of months before context
switching to another task. Similarly, he doesn't have an email address, he
reads and responds to his postal mail every 3 months and reads and responds to
his faxes every 6 months. Whilst these specific measurements may not be
applicable or even possible in your life, there are still lessons which can be
drawn from his style of living. As said, we often have to go to the extremes to
learn lessons about the modest.

There are many ways we might manage our time and effort. And for many people,
minimizing time and/or effort spent on tasks is an (indirect) goal in our lives.
If we are more aware of how prevalent *&ldquo;bus stops&rdquo;* are in our
lives, this can help minimize time and effort expended. Similarly, if we
actively search for opportunities to form these bus stops in our lives, we will
minimize these factors even further so. Possibly, reducing stress and increasing
the time and energy you have available for more important things. So slow down
and catch the next bus and afterwards decide to spend a bit more time before you
grab your next bus.
