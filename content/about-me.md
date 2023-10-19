+++
title = "About Me"
date = 2021-03-31
description = """
Hi! My name is Gijs Burghoorn. I am a PhD candidate at the TU Delft, the
Netherlands, who is passionate about Rust, Hardware Design, Security and
contributing to open-source software.
"""
+++

Hi! My name is Gijs Burghoorn. I am a PhD candidate at the TU Delft, the
Netherlands, who is passionate about Rust, Hardware Design, Security and
contributing to open-source software.

![Mugshot](../imgs/mugshot.png)

## Education

Over the years, I studied with a primary focus on computer security, software
design and cryptography. Below is an overview of all the major parts of my
education.

| Year        | University                | Program             | Note                                        |
|-------------|---------------------------|---------------------|---------------------------------------------|
| 2018 - 2020 | Leiden University         | Mathematics         | *Not Concluded*                             |
| 2018 - 2021 | Leiden University         | Computer Science    |                                             |
| 2021 - 2022 | Université Grenoble Alpes | Informatics         |                                             |
| 2022 - 2022 | TIMA                      | Research Intern     | Fault Injection through Clock Glitching     |
| 2022 - 2023 | Université Grenoble Alpes | Cybersecurity       |                                             |
| 2023 - 2023 | TIMA                      | Research Intern     | Microarchitectural Emulation & Cache Timing |
| 2023 - 2027 | TU Delft                  | PhD Candidate       | RISC-V Hardware Security                    |

## Open source

Open source allows for unrivalled transparency and, although a bit debatable,
trust in the correctness. {{ note(txt="What is open source",
href="https://opensource.com/resources/what-open-source", type="websitesource") }}
Open source also allows people to crowdsource production of products. This
allows individuals to help with disclose issues and make suggestion. My personal
projects are (almost) always open source and I try to help with other projects.

Below is a list of a few of my notable projects. Apart from these projects, I
try to help and contribute to other crates when I am able to.

### Lemurs --- Terminal Login Manager

[GitHub](https://github.com/coastalwhite/lemurs)

Lemurs is a *Terminal User Interface* (TUI) [Display/Login Managers][lm] written
in Rust that works on most GNU/Linux and BSD distributions. It can work both
*with or without* SystemD.

[lm]: https://wiki.archlinux.org/title/Display_manager

### WaveDrom-rs --- Beautiful Programmatic Timing Diagrams in Rust

[Demo](https://gburghoorn.com/wavedrom/) |
[GitHub](https://github.com/coastalwhite/wavedrom-rs)

The `wavedrom-rs` crate provides an interface to shape beautiful [Digital Timing
Diagrams][dtd] into an [SVG][svg]. It is almost completely compatible with the
[WaveDrom][wavedrom-js] project. It can be merged into document build tools,
continuous integration or be used as a one off to generate beautiful
diagrams.

[dtd]: https://en.wikipedia.org/wiki/Digital_timing_diagram
[svg]: https://en.wikipedia.org/wiki/SVG
[wavedrom-js]: https://wavedrom.com/

### Riscvonomicon --- The Rust for RISC-V reference book

[Link](https://riscvonomicon.github.io/book) |
[GitHub](https://github.com/riscvonomicon/book)

The Riscvonomicon (pronounced "risk five o-nomicon") provides a reference for
using the RISC-V instruction set and the Rust programming language together. It
contains information about:

* Utilizing Rust and RISC-V specific crates, tools and environments
* Building, testing, fuzzing and formally verify code for RISC-V written in Rust
* Utilizing RISC-V instructions, intrinsics and extensions in Rust

### Rust RISC-V Intrinsics

[Tracking Issue](https://github.com/rust-lang/rust/issues/114544)

Implementation of intrinsics for RISC-V operations in the Rust standard library.
This work improves the speed, binary size and user experience of RISC-V and
Rust.

# Contact

If you want/need to contact me, you can reach me at {{ mailto() }}.
