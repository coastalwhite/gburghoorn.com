+++
title = "Amdahl's Lie: Speeding up code beyond the theoretical limit"
description = """\
This blog-post illustrates how to "break" the famous Amdahl's Law. It raises points on parallelization of code and what effects it that may or may not bring.
"""

date = 2024-04-02

[taxonomies]
tags = ["parallel", "multitheaded", "amdahls law"]

[extra]
keywords = ["parallel", "multitheaded", "amdahls law"]
category = "computerese"
+++

> ***[Amdahl's Law]***:
>
> ```
> MaximumSpeedUp(#Processors) =
>   1 / (
>     (1 - ParallelPortion) + ParallelPortion / #Processors
>   )
> ```

People working with parallelization are very familiar with this law. Essentially, [Amdahl's Law] provides an upper limit on the factor of speed your system can increase as a function of the number of processors you use and the parallelizable portion of your program. Consequently, a clear effect of this law is that a program cannot achieve a speed-up beyond the number of processors. For example, a piece of code using 4 processors cannot perform more than 4 times as fast as the same code using 1 processor. This blog-post "shows" that this 4x speed-up upper limit for 4 processors is not always true. The point of this blog-post is not to discredit the amazingly useful result that is [Amdahl's Law], but to make people think about the fact that there is a gray zone in parallelization.

> This post is a loose follow up of my [previous blog post], which states that parallelizing your code might not make sense.

To illustrate my point, I created [a proof-of-concept program]. Essentially, the program takes a bunch of requests and has to calculate something from a particular large piece of data selected by the request category and return the answer. For how abstract this may sound, I want to state that this is not actually that weird of a situation. The same situation holds for databases or event-driven simulations. And I assume this holds in many other real-life programs as well. In the proof-of-concept program, we start with a single-threaded implementation that just handles all requests in-order. Next to that, we have a multi-threaded version with a thread that divides the requests among 4 other threads according to the request category. We can see the runtimes results according to the memory size in {{ figure_ref(n=1) }}.

{% figure(href='./assets/Single-Multi-Graph.svg', alt='Graph on single-threaded performance vs. multi-threaded performance') %}
    Single-threaded versus multi-threaded performance of program using 4 cores for the multi-threaded version.
{% end %}

And wait... How is possible that our multi-threaded program is more than 5 times faster. What is going on here? Well, it is true: the speed-up our program experiences is higher than the theoretical limit of [Amdahl's Law].

As some of you might have already guessed, this is because of [memory caches][memory cache]. To illustrate, each thread takes utilizes its own physical core[^1], and therefore has its own [memory cache]. Consequently, each thread can fit more of their memory chunk into its cache, making the average memory much faster. This is a situation that is also common in other problems where each chunk of your program might have its own cache for requests. Allowing each of these requests to be in their own physical memory cache allows these requests to not have to go to main memory nearly as often, which is a high cost. Note that this does not always apply.

But, I hear some people screaming: "[Work Batching]! [Work Batching]!". Firstly, you are screaming at a screen, I cannot actually hear you. Secondly, yes, it is true. Our multi-threaded program is doing [Work Batching]. You can see in {{ figure_ref(n=2) }} that if we batch our requests, we remove the Amdahl breaking speed-up.

{% figure(href='./assets/Batch-Multi-Graph.svg', alt='Graph on single-threaded performance vs. multi-threaded performance') %}
    Batched Single-threaded versus multi-threaded performance of program using 4 cores for the multi-threaded version.
{% end %}

So we did not break [Amdahl's Law] :(. Our single-threaded and original multi-threaded programs are different, and thus [Amdahl's Law] does not apply. Sorry, not sorry for the clickbait. But... There are two points I want to make about this.

First, you cannot always do proper batching in this fashion. If the requests are coming in one by one, you cannot group them preemptively. [Work Batching] simply becomes very difficult. You might be serving network requests, and it would be even slower to start processing only when you have enough requests to start [Work Batching].

Secondly, the fact that our programs are not the same is actually the exact point I want to make with this blog-post: **parallelizing your program at the right level improves your program beyond a linear speed-up**. And this is not only the flat speed-up. As I showed, the parallelization sometimes provides an even more versatile solution than just applying the optimization would have given you. Furthermore, when properly applied, they can lead to better separation of concerns and code that is actually easier to work with. Conversely, if applied badly, parallelization can lead to undebugable, unmaintainable and bloated code that barely speeds up your program.

To conclude, blindly applying parallelization[^2], often does more harm than good. Thoughtful application of parallelization can lead to benefits beyond the expected speed-up, both in speed and maintainability. In effect, the problem with [Amdahl's Law] is not that it is not true, but that you rarely run the same program both sequentially and in parallel. In fact, it is probably better if you are not running the same program sequentially and in parallel.

[^1]: I am glossing over so much complicating factors here. To state a few: [simultanious multi-threading], a [context switch] to a different core, a [context switch] invalidating or replacing parts of your memory cache.

[^2]: Without any further explanation, this also applies to AI, machine learning, block-chain, edge computing, quantum computing and most other computer buzzwords.


[Amdahl's Law]: https://en.wikipedia.org/wiki/Amdahl%27s_law
[previous blog post]: https://gburghoorn.com/posts/does-it-need-to-be-parallel/
[memory cache]: https://en.wikipedia.org/wiki/CPU_cache
[Work Batching]: https://en.wikipedia.org/wiki/Batch_processing
[a proof-of-concept program]: https://github.com/coastalwhite/amdahls-lie
[simultanious multi-threading]: https://en.wikipedia.org/wiki/Simultaneous_multithreading
[context switch]: https://en.wikipedia.org/wiki/Context_switch
