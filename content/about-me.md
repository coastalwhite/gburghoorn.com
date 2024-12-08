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


## Work

After a brief stint at the TU Delft as a PhD candidate, I started working at
[Polars] as a Rust Software Engineer. Here, I spend most my time optimizing
low-level code, fixing reported problems and extending the functionality to
support a wider range of usecases. The big benefit of working at Polars is that
almost all the work I do is open source. You can find that
[here](https://github.com/pola-rs/polars).

Below are some other open source projects that I worked on.

[Polars]: https://pola.rs/

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
