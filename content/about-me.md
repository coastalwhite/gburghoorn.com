+++
title = "About Me"
date = 2024-12-08
description = """
Hi! My name is Gijs Burghoorn. I am passionate about Hardware Design, Security,
Electronic Design Automation and contributing to open-source software.
"""
+++

Hi! My name is Gijs Burghoorn. I am passionate about Hardware Design, Security,
Electronic Design Automation and contributing to open-source software.

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
| 2023 - 2024 | TU Delft                  | PhD Candidate       | *Not Concluded*                             |
| 2024 - 2025 | Polars                    | Software Engineer   |                                             |
| 2025 - 2029 | Radboud University        | PhD Candidate       |                                             |


## Research

I currently research Pre-silicon Side-Channel Analysis at part of the _Digital
Security_ (DiS) at the Radboud University. My focus is on models and simulation
of power and electromagnetic side-channels throughout the digital design flow.

As part of my research, I have written
[Vogls](https://github.com/coastalwhite/vogls) with a Rust library for Verilog
simulation focused on simulation throughput, embedability, usage from _Register
Transfer Level_ (RTL) to full-timing gate-level.

## Publications

- 2024 --- Cross-layer analysis of clock glitch fault injection while fetching variable-length instructions --- Ihab Alshaer, Gijs Burghoorn, Brice Colombier, Christophe Deleuze, Vincent Beroulle, Paolo Maistri --- (Springer)[https://link.springer.com/article/10.1007/s13389-024-00352-6]
- 2026 --- Vogls: a Fast Interactive Full-timing Simulator for Pre-silicon Power Side-Channel Analysis --- Gijs Burghoorn, Ileana Buhan, Lejla Batina --- (Arxiv)[https://arxiv.org/abs/2607.15782]

## Miscellaneous projects

### Polars --- Extremely fast DataFrame library

[GitHub](https://github.com/pola-rs/polars)

In a previous job, I worked on Polars which is an extremely fast DataFrame
library written in Rust. My work here included a major rewrite of the Parquet
encoding and decoding, a lot of performance work, reworks of several planning
stages, reworks of group-by aggregations, many implementations of streaming
operations and general maintenance.

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

# Contact

If you want/need to contact me, you can reach me at {{ mailto() }}.
