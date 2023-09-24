+++
title = "My Pure Rust Wishlist"
description = "A discussion of pure Rust crates and what crates I would like to see"

date = 2023-09-24

[taxonomies]
tags = ["rust", "pure-rust"]

[extra]
keywords = ["rust", "pure-rust"]
category = "computerese"
+++

This is a list of some of the projects I wish there was a pure Rust alternative
for. This is a personal list of things I would love to have.

> Disclaimer: I consider it very unrealistic that most of these project become
fully features pure Rust projects.

## What qualifies as pure Rust?

A library qualifies as a pure Rust library if it can be compiled using Cargo
without installing additional dependencies. This applies transitively. A crate,
that depends on a crate that is not pure rust, cannot be pure rust.

## Why would we want a pure Rust crate over a wrapper to an existent library?

Apart for the usual safety and performance Rust provides, there are several reasons
to want a pure Rust crate over wrappers to an existent
library. The tldr here is you just want to `cargo add` a crate and have everything
work as expected. To go into a bit more depth, there are three main reasons to
want a pure Rust crate: developer ergonomics, user ergonomics and guarantees
through tooling.

First, pure Rust crates massively increase developer ergonomics. 
Crates that are used as libraries are a lot more ergonomic if they don't require
additional dependencies to be installed on the platform. Generally, wrappers
include linking to dynamic libraries or to platform specific libraries. This
requires the libraries to be available or a specific compiler toolchain to be
available. Remember, that this applies transitively, meaning that if somewhere
in your dependency tree you depend on a crate that builds using non-Rust
dependencies, your crate also usually depends on these non-Rust dependencies.

Second, pure Rust similarly increase to user ergonomics. I am generally in
the camp that binaries should be mostly statically linked, unless there is an
good reason for them not to be. We have plenty of disk space lying
around, statically linked libraries can provide better speed optimization
through [LTO][lto] and most platforms have good update mechanisms for packages
nowadays.

Third, there is a growing number of tools to work on Rust's *Mid-level
Intermediate Representation* (MIR). Pure rust when used in combination with
these tools allows for a lot of static correctness verification. These tools
(mostly) do not function when a part of the crate or its dependencies is written
in another language. [MIRI][miri] allows checking undefined behavior (UB) and
unsafe invariants through emulation of MIR. [Kani][kani] attempts to formally
prove the correctness of code. And later maybe, we can use [a-mir-formality] to
provide even more hard proofs.

## Why would we **NOT** want a pure Rust crate over a wrapper to an existent library?

Creating pure Rust crates comes at a cost. This is usually in one of three
forms: lack of formalization / lack of ecosystem, reimplementation cost and
maintenance burden. Some of the ideas proposed in this list are mostly
unrealistic because of one of these reasons. Unless a company or a well-funded
group choose to tackle these projects these are probably unlikely to happen.

First, if a project does not have a stable or formal specification, it is very
difficult to reimplement a project in a backwards-compatible way. A non-backwards-compatible pure Rust implementation with no additional selling points
will not see a lot of use. There is most likely experience, knowledge and tooling
surrounding the old project. If this "ecosystem" does not migrate easily, the project is
mostly useless.

Second, the costs to reimplementation something might be big. Systems might have
built up support for a wide array of features or platforms. Commonly, some of
the implementation is done by vendors or experts within specific fields.
Reimplementing all of this without a wide support from a larger community is
almost unfeasible. Imagine having to reimplement [LLVM] in Rust, the sheer
amount of platform-specific code that is implemented by the companies
responsible for the platform is impossible to catch up with.

Third, the maintenance burden of some crates is huge. Libraries that serve as
interpretation or translation layers for constantly changing environments
require constant patching. Some classical examples include time zone management
or the craziness that is [core-js].

## Projects

### Instruction Level Emulator

[QEMU] is great. It saves so much time when testing cross-platform code and it
makes debugging embedded software much easier. However, the fact that I cannot
just programmatically call [QEMU] to emulate a binary or some machine code
without installing a whole suite of software or performing a multi-stage C makes
it unsuited for many applications. This 

> **Sidenote**
>
> I keep on dreaming of a `#[platform-test]` macro in rust, which works the same
> as the `#[test]` macro but can test platform arithmetic specific code without
> having to set up 20 configuration files and a matrix of CI pipelines. Or the
> respective `platform-bench` functionality, to get a rough guess of instruction
> count / clock cycle count per platform. This would all be so useful in low
> level libraries or in the high performance computing world.
>
> Such a macro would run the code in an instruction level emulator instead of
> trying to run the code on the host hardware. Having a instruction level
> emulator written in Rust would allow for this to all work completely
> seamlessly.

### Pure Rust Cryptography

Cryptography gets used everywhere. This means that non-Rust dependencies ripple
through many big projects because they rely on wrappers around cryptographic
libraries. The [ring] crate is getting there. [It even got funding now](https://briansmith.org/lets-build-a-fips-rust-crypto),
so I am hoping that this becomes a fully certified cryptography crate.

In theory, Rust is a pretty good target for a cryptography library because it
removes many of the vulnerabilities that are possible when using C for example.
However, writing secure cryptography primitives requires much more than being
memory safe. Side-channels are difficult (to impossible) to protect against, and
good tooling is still missing for Rust as well.

### Hardware Design Suite

The *Electronic Design Automation* (EDA) world is mostly packed with proprietary
software by a few large companies. While this is not always bad, it does not
allow programmatic use which might be very interesting in this case. There are
several components to a hardware design suite.

First, this would need RTL synthesis (look at [Yosys][yosys]). This would
include [Logic Synthesis] and [Logic Minimization]. Then, there would be a need
for placement and routing tooling. And there would need to be tooling for both
physical and FPGA synthesis. All of this is years and years of work and the
actual payoff of pure Rust crates only comes when everything is done.

### RTL Simulator Library

There are some open source [Register Transfer Level (RTL)][rtl] Simulators
that are pretty good. Here, I am thinking of [Verilator][verilator] and [Icarus
Verilog][icarus-verilog]. The appeal of having a pure Rust emulator would be
the programmatic usage of this. This would be very interesting when creating
a whole hardware design suite in Rust.

### SPICE

The [SPICE] circuit simulator is a somewhat old piece of technology that is
still extremely widely. Its syntax is somewhat defined, but there are small
syntax differences between different implementations ([LTspice], HSpice,
etc.). Therefore, people have to choose which syntax to start with. Furthermore,
creating an archive of hardware models is also a major challenge.

### TCL Interpreter

The [TCL] scripting language gets used a lot in the hardware design world. It is
a strange programming language. To create a backwards-compatible
hardware synthesis suite, it would be awesome to have a fully featured TCL
implementation that allows for Rust functions to be called from within it.

### Pluggable Authentication Module (PAM)

When I implemented [Lemurs][lemurs], I soon figured out that using [PAM][pam]
from Rust is a bit of a mess. This is partly because PAM is a bit of a mess, and
partly because the Rust integration is a mess.

*Pluggable Authentication Modules* (PAM) is a system that is used by almost all
Linux distributions, many BSD variants and macOS. It serves as the operation
system interface for everything user authentication. There are two (technically
three but the Sun version does not matter anymore) implementations of PAM:
Linux-PAM and OpenPAM. The codebases are not that large but include a large
chunk of security critical code. Again, while the two implementations provide
mostly the same interface, in most cases you cannot take a configuration file
that works for Linux-PAM, put it on OpenPAM and expect it to work.  So any new
implementation of needs to pick its poison. Do you pick the probably better
implemented but less widely used OpenPAM. Or do you use Linux-PAM which is a bit of a
mess, but used a lot more.

Then, there is the problem that PAM is almost always used as a shared library.
This in itself is not a big problem, but is not very Rusty. Which then links
into the last point which is that PAM extensively uses dynamic libraries while
running which is something that Rust is also not the biggest fan of.

### Text Rendering

Text rendering is something you will eventually run into if you do anything with
graphics. Even if you are just trying to output some static diagrams (like my
library [wavedrom-rs]), sooner or later you will want to know the width of text
or render text yourself. It is always a mess.

Text rendering is hard, very hard in fact. I suggest reading [Text Rendering
Hates You by Faultlore](https://faultlore.com/blah/text-hates-you/) to figure
out how hard it is actually. We have [cosmic-text] nowadays, which is a pretty
decent solution to be honest. The problem is really in shaping where [rustybuzz]
has such a high maintenance burden that is an uphill battle to keep up with the
C++ implementation [harfbuzz]. I don't see this changing any time soon, although
the harfbuzz team did [show interest in maybe taking over the maintenance
burden at a certain point](https://github.com/RazrFalcon/rustybuzz/issues/74#issuecomment-1706457343).

Side note. Rustybuzz has a very good note on why we would want pure Rust crates.

> ## Why?
>
> Because you can add `rustybuzz = "*"` to your project and it just works. No need
for a C++ compiler. No need to configure anything. No need to link to system
libraries.

### LibUSB

The [libUSB] project provides cross platform bindings to the USB interface. If
you are doing anything that requires a USB device it is probably using libUSB
under the hood. I would consider this a prime target for a reimplementation in
Rust. There are many wrappers for libUSB, but no one has seriously attempted to
port parts of libUSB to Rust.

### GNU Toolchain

The GNU toolchain is used everywhere. It is replaced in certain areas by similar
[LLVM] implementations. Having a Rust implementation would allow us to
programmatically deal with many of the problems that plague low level tooling.
The implementation for Rust's platform specific intrinsics includes a
`assert_instr` macro. This macro just asserts that the instructions resulting
from the function includes the instruction that the intrinsic is for. How this
is implemented is by called `objdump` platform which needs to be installed and
may or may not include the specific intrinsics we are trying to work with.

Implementing a Rust GNU Toolchain suffers from all three reasons of why we might
not want a pure Rust implementation. It lacks formalization, implementation
costs are huge and the maintenance burden is huge. Overall, I would say this is the
least realistic one of the list.

## What now?

Implementing pure Rust libraries is great for the Rust
ecosystem and greatly increases convenience, but it comes at a cost. Most of 
the projects here are not realistic to fully reimplement as pure Rust versions
immediately. Probably, progressive rewrites are a better way to go. Other
solutions are to start anew, without backwards-compatibility. This might solve
many problems the current system has in the long term, at the cost of losing
ecosystem and causing fragmentation in the short term.

Overall, it would be wonderful to see even one of these become a reality, albeit
in a reduced form.

[not-yet-awesome rust]: https://github.com/not-yet-awesome-rust/not-yet-awesome-rust
[lto]: https://en.wikipedia.org/wiki/Interprocedural_optimization
[miri]: https://github.com/rust-lang/miri
[kani]: https://github.com/model-checking/kani
[a-mir-formality]: https://github.com/rust-lang/a-mir-formality
[QEMU]: https://en.wikipedia.org/wiki/QEMU
[ring]: https://github.com/briansmith/ring
[wavedrom-rs]: https://github.com/coastalwhite/wavedrom-rs
[lemurs]: https://github.com/coastalwhite/lemurs
[pam]: https://en.wikipedia.org/wiki/Pluggable_authentication_module
[cosmic-text]: https://github.com/pop-os/cosmic-text
[yosys]: https://github.com/YosysHQ/yosys
[rustybuzz]: https://github.com/RazrFalcon/rustybuzz
[libUSB]: https://github.com/libusb/libusb
[rtl]: https://en.wikipedia.org/wiki/Register-transfer_level
[verilator]: https://www.veripool.org/verilator/
[icarus-verilog]: https://github.com/steveicarus/iverilog
[harfbuzz]: https://github.com/harfbuzz/harfbuzz
[LLVM]: https://en.wikipedia.org/wiki/LLVM
[core-js]: https://github.com/zloirock/core-js
[SPICE]: https://en.wikipedia.org/wiki/SPICE
[LTspice]: https://en.wikipedia.org/wiki/LTspice
[TCL]: https://en.wikipedia.org/wiki/Tcl
[Logic Synthesis]: https://en.wikipedia.org/wiki/Logic_synthesis
[Logic Minimization]: https://en.wikipedia.org/wiki/Logic_optimization
