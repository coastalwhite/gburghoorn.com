+++
title = "Rust in 2023"
description = "An evaluation of the state of Rust ecosystem in 2023"

date = 2022-12-24

[taxonomies]
tags = ["rust", "rustaceans"]

[extra]
keywords = ["rust", "rustaceans"]
category = "computerese"
+++

> TLDR:
> A lot of focus falls on technical features at the moment for these
> "Rust in 2023" blog posts. This post talks about the community side.
> First, the post discusses some of the challenges that occur when
> onboarding new Rustaceans. Then, I recap how far the Rust community
> has come by the end of 2022.

After the call from [Nick Cameron](https://www.ncameron.org/blog/rust-in-2023/)
to write posts about Rust in 2023, I feel like I am in the position to add
something to this discussion. The three posts I saw:
[Nick's](https://www.ncameron.org/blog/rust-in-2023/) (+
[Clarification/Correction](https://www.ncameron.org/blog/untitled-2/)),
[lncr's](https://cohost.org/lcnr/post/690887-rust-in-2023) and
[Yoshua's](https://blog.yoshuawuyts.com/rust-2023/). All seemingly focused more
on technical features and less on ecosystem and onboarding newcomers. This will
focus more of these aspects. First, I will focus a bit of my experience with
people learning Rust, their roadblocks and some of the domains I believe
deserve better guides, crates and community channels.

# Onboarding new Rustaceans

One major problem when addressing newcomers to Rust is they all have different
backgrounds and learning needs. Very generally speaking, we can categorize new
Rust users into two categories:

- People coming from other languages
- People learning Rust as their first language

Of course, we can then start categorizing even more and look at people coming
from C versus JavaScript or people coming from a math background versus people
coming from an engineering background. I will overgeneralize here and ignore
these subcategories.

These two categories of people require vastly different documentation and
learning resources. The first group may need to get used to the borrow checker
and translate their programming knowledge from other languages. The second
group may need to learn part of the computer science university curriculum at
the same time as learning Rust syntax. The need for incorporating computer
science knowledge into these guides will become more pressing as more people
start learning Rust as their first language. I do not have all the answers when
it comes to these problems. One concept I learned a few years ago called
[Semantic Waves](https://blog.teachcomputing.org/quick-read-6-semantic-waves/)
should definitely help with some of these changes. Also adding *TLDR* (Too Long
Didn't Read) above sections of the Rust documentation may help readers skip
parts they already know or get a good quick summary of a section after reading.

Other problems exist that are not necessarily related to this division. In
personal circles, I have experienced several system programmers learning Rust
that told me they find specific parts of the documentation to be a pain-points.
Some pain-points I commonly heard included the module system, third-party crate
documentation, and Rust specific guides. Let us go through all of these and
explain what I hope these things to become.

## Module System

When going from a simple one-file *Hello World* to a multi-file crate, we
usually define modules. This is done with the `mod` keyword. Several
programmers have told me they find this confusing at first. A couple of years
ago, when I started my Rust journey, I remember being confused for sometime
about the module system as well. When coming from other languages such as `C`
and just needing quickly integrate some Rust code, `mod` can feel quite
foreign. It is essentially a combination of a `C` `include` and a `C++`
`namespace`.

For the people wanting to learn the ins and outs of the language, this is
something you will get used to and the [Rust-By-Example Book has a good
explanation](https://doc.rust-lang.org/rust-by-example/mod/split.html). But for
the people more quickly integrating with Rust, [this blog
post](https://www.sheshbabu.com/posts/rust-module-system/) is the best resource
I have found. The problem is that searching for "rust include file" does not
produce any clear and to the point blog posts. The problem here is not that
there are no resources; the problem is that the resources do not appear under
the terms people are looking for. This is a more general problem. I have seen
one of my colleagues use the `include!` macro instead of the module system. I
feel like this can be quite [explicitly mentioned and
adjusted](https://github.com/rust-lang/rust/issues/106118).

## Third-party crates

Rust as a language has really good tooling to deal with crate distribution and
documentation.  For the [most downloaded crates on
crates.io](https://crates.io/crates?sort=downloads) I would say that this is
being used quite effectively. We all know how much impact good documentation
has on how usable different crates are. Perfect examples are most of [David
Tolnay's crates](https://github.com/dtolnay). These crates are superb to use,
mostly because their API and documentation are well done.

For some of the less downloaded (but not less fundamental crates), I would say
that there are definitely some weak points. Personally, I would love to see
more examples and better documentation of limitations. As for the examples, the
[rustdoc example
scraping](https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#scrape-examples)that
is [being tested](https://docs.rs/syn/1.0.106/syn/buffer/struct.Cursor.html)
may help. Although, the feature is not a replacement for curated examples and
more of a "better than having nothing" approach. The documentation of weak
points include a `Panics` section in the documentation, but maybe also an
`Assumptions` or `Design Choices` section.

An `Assumptions` section shows that the maker is aware of the limitations and
specifically the usage-target. It should state the assumptions and the
consequences if those assumptions are not met. For example, "this method
assumes that the compilation target is Linux otherwise it will not compile".
This can both be in the `README` but also for individual functions or methods.

A `Design Choices` section allows users to quickly figure out if a crate fits
their use-case. It should state what balance the crate has struck. Is it
perfectly optimized for speed? Is it audited for security? Does it use a lot of
dependencies? How much customization is there? Especially at the lower system
programming levels, these values starts to matter.

These are all things, I am working on myself as well. There are other sections
I also think might be interesting, but this would all deserve a separate blog
post. One last thing to mention about third-party crates is APIs. We have the
[Rust API Guidelines
book](https://rust-lang.github.io/api-guidelines/about.html) which I think is
an awesome resource that sees too little use. Admittedly, I forget it exists
something too.

## Rust specific guides

Currently, many of the domain specific HOWTOs are written to rely on different
languages. This makes Rust a less attractive first choice when it comes to
these domains. Even when Rust may be fully capable of thriving in these
domains.

One big example is dealing with the low-level operation system projects.
Ambitious young programmers, may search how to create a driver and get many
different `C` based guides. This is understandable. `C` is the most common
languages for drivers and has historically been used. However, training a new
generation of programmers with Rust from the get-go could create a wave of more
secure software. For certain parts, we may need better crates to interface with
low-level APIs. For other parts we just need various good HOWTOs. 

There is a similar situation for networking and embedded Rust, which are now
starting to have reasonably established ecosystems, but they could benefit from
various specific HOWTOs and documentation with less reliance on historical
knowledge or familiarity with other programming languages (usually this
involves `C`).

There are of course also GUI, web and game programming. Here, I personally feel
like Rust has a way to go and is not able yet to on the same playing field
replace the traditional workflows. The exception being the WebAssembly, web
server and tooling ecosystems. In these areas many big strides are being made,
however. [Iced for the Cosmic Desktop
Environment](https://www.reddit.com/r/pop_os/comments/xs87ed/comment/iqjc35b/?utm_source=share&utm_medium=web2x&context=3),
[the explorations of Vello](https://github.com/linebender/vello),
[Dioxus](https://dioxuslabs.com/) and [Bevy](https://bevyengine.org/) are some
of the projects I am keeping my eyes on.

# Rust Community

As part of this Rust in 2023 post, I would also like to review a bit of how far
Rust has come and how many awesome resources there are now. Researching for
this post, I came across many more that I did not know beforehand. There are of
course many more good resources, but I just want to highlight some of my
favorites and the ones I found most useful. If you want more extensive
uncurated lists, you should check out [Awesome Rust
Resources](https://github.com/rust-unofficial/awesome-rust#resources) as it has
a really good list of many of the learning resources.

As a beginner, I read the [Rust
Book](https://doc.rust-lang.org/book/index.html). I still believe this is
probably the best general resource for learning Rust as a beginner. However, it
may not be the best for people whose first programming language is Rust. I have
also gone through [Rustlings](https://github.com/rust-lang/rustlings) and used
[Rust-by-Example](https://doc.rust-lang.org/stable/rust-by-example/) as a
reference from time to time. I believe all of these combined serve as a very
good start into the Rust language similar to what the *C Programming Language*
book by *Brain W. Kernighan and Dennis M. Ritchie* did for the `C` world.

The resources when going from beginner to intermediate are a bit more less
centralized. This is logical since this is usually where people start looking
into using Rust for their specific domain. Some of the general resources that
are amazing are the [Rust for Rustaceans
Book](https://rust-for-rustaceans.com/) and [Crust of Rust Youtube
Playlist](https://www.youtube.com/playlist?list=PLqbS7AVVErFiWDOAVrPt7aYmnuuOLYvOa).
Both are done by [Jon Gjengset](https://thesquareplanet.com/), who I would like
to specially thank for all of these amazing resources.

From here, we get into some of the more domain specific community resources.
When learning to work with unsafe Rust, the
[Rustonomicon](https://doc.rust-lang.org/nomicon/) is a must. I would love for
it to talk a bit about *Safety* comments as well, but this is something I may
look into contributing myself. The [Rust Embedded
Book](https://docs.rust-embedded.org/book/) also fills in some gaps.

We have [Phil's Blog-OS](https://docs.rust-embedded.org/book/), which serves as
a good resource to learn operating systems development in Rust. As well as all
the work being done by Asahi Linux and specifically [Asahi
Lina](https://github.com/asahilina) on the Linux
Apple M1 GPU drivers. The [blog
posts](https://asahilinux.org/2022/11/tales-of-the-m1-gpu/) were extremely
amazing to read. Now, with Rust slowly and experimentally being included in the
Linux kernel, we may see a lot of new development and HOWTOs on working with
Linux kernel modules and drivers. And although, I have not interacted much
which the BSD world, it seems like[^1][^2] there is some work being done
there as well.

Macros are another common stumbling block. The [Little Book of Rust
Macros](https://danielkeep.github.io/tlborm/book/index.html)  and the new
addition of [Macrokata](https://github.com/tfpk/macrokata) are good resources
and reference documents. They can add on to the previously mentioned books and
the videos of Jon Gjengset to get a better overview of how Rust macros work.

As for graphics programming, I feel like the [WGPU](https://wgpu.rs/) and the
corresponding [learning resource](https://sotrh.github.io/learn-wgpu/) are game
changers. The learning resource is a perfect example of teaching computer
science with Rust without relying too much on knowledge of other programming
languages. 

Moving away from some of the learning resources, the success of WebAssembly
with Rust and the WASM runtimes such as the Bytecode Alliance's
[wasmtime](https://wasmtime.dev/) and the alternative
[wasmer](https://wasmer.io/) are astounding. Rust seems to be the standard WASM
source language, nowadays.

Lastly, there are some great channels to keep up with the Rust community and
changes to the language. There is of course always the [Rust Language
Blog](https://blog.rust-lang.org/). The [subreddit](https://reddit.com/r/rust)
and discord channels are also great channels to have discussions. There is
something special about having the authors of some of your favorite crates
discuss something you have made (special shout-out to
[BurntSushi](https://blog.burntsushi.net/about/)). For OS development, we have
the [This Week in Rust OS-Dev](https://rust-osdev.com/). More generally, we
have [This Week in Rust](https://this-week-in-rust.org/) and hopefully soon
[the newly announced Rust
Magazine](https://rustmagazine.github.io/announcing/). Then, on Youtube, you
can follow some of the language news with [Let's Get
Rusty](https://www.youtube.com/c/LetsGetRusty)

Overall I feel like the Rust community has gotten a long way and there are many
amazing resources, projects and communication channels to help everyone. Thank
you to everyone involved.

# Closing thoughts

Apart from using Rust in my work, I will try to focus on writing more HOWTOs
for specific Rust topics this year. There are also some low-level operating
system APIs I would love to create a better interface for. I would say Rust
itself is in a healthy spot. There are certainly technical problems I would
like to see resolved and community resources I would like to see improved,
but we have gotten a long way already. I would like to wish everyone a
wonderful New Year and a Rusty 2023.

[^1]: <https://research.nccgroup.com/2022/08/31/writing-freebsd-kernel-modules-in-rust/>

[^2]: <https://github.com/spookyvision/hello-freebsd-rust>