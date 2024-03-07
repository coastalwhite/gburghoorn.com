+++
title = "Does it really need to be parallel, though?"
description = """\
Not all systems need to parallel. Eventhough it might be very tempting to \
parallelize a slow piece of code, always think: is this the               \
lowest-common-denominator?                                                \
"""

date = 2024-03-07

[taxonomies]
tags = ["parallel", "multicore", "hardware testing"]

[extra]
keywords = ["parallel", "multicore", "hardware testing"]
category = "computerese"
+++

Please. I ask you. No, beg you. Before start spending weeks... months...
years... designing a new computational theory to parallelize something. Does it
really need to be parallel? 

Nowadays, our computers are insanely fast. I am sure that you could pick up a
laptop with a chip from 5 years ago and it would do all the things average
people do perfectly. In fact, I did and you can. If you stick to one web-browser
based application (this is admittedly quite difficult nowadays), you can run all
non-professional workflows very well. But these chips even have multiple cores
that often sit unused, why don't we start using them?

I am all in favor of using multiple cores... for applications where that makes
sense. In the past few weeks I have been in a reading frenzy again. This time
about something that are basically very specific hardware tests. The academic
field for this is not very developed and most papers were from the 80s and 90s.
Those papers are really nice to read... some people really knew how to write
good papers back then. I wanted to know what the current state-of-the-art is
with these testing tools and I looked at some newer papers. Almost all of them
focused on making the tools parallel.

For some time, I was thinking about this problem as well. How do test and
simulate digital circuits in parallel? You could do a discrete time
simulation which does not scale that well for huge systems. Or what all these
papers are doing is event-driven simulation. Parallel discrete time simulation
is reasonably simple as it is mostly just matrix multiplications. But parallel
event-driven simulation, well that is difficult. Event-driven simulation
requires a massive amount of dependencies, bookkeeping and in general
coordination. This is even more extreme within these tools than in other
event-driven simulations. This task is not-[embarrassingly parallel]. So, what
wins could we expect? At maximum, according to some people, 5x to 10x. Wow!

I was convinced. This is the way forward. We need to make these tools parallel
&mdash; now. Imagine having to spend 10x less time on something, that is a
massive win. Well, I am sad to announce that you and I won't be 10x faster. This
is because of a simple fact. We were already using all our cores. Not several
cores per test, but one core per test. However, we have 1000 tests and we have
to run [Monte-Carlo][monte-carlo] on them all. On top of our tool, we
essentially had an [embarrassingly parallel] system all along.

Fighting [Amdahl's Law][amdahls law] to parallelize a system that is not the
lowest-common-denominator was a mistake. I would call this problem and most of
the testing field an _Embarrassingly Not-Parallel_ system. Let's learn and move
on from that.

[embarrassingly parallel]: https://en.wikipedia.org/wiki/Embarrassingly_parallel
[amdahls law]: https://en.wikipedia.org/wiki/Amdahl%27s_law
[monte-carlo]: https://en.wikipedia.org/wiki/Monte_Carlo_method
