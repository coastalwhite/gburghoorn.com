+++
title = "Just a simple Nix Flake for Rust and WASM"
description = """\
Sometimes Nix Flakes are not that simple. I struggled a bit to get a working Flake for Rust and WASM, so here is the result.
"""

date = 2024-04-05

[taxonomies]
tags = ["nix", "rust", "wasm"]

[extra]
keywords = ["nix", "rust", "wasm"]
category = "computerese"
+++

I struggled a lot to get Nix, Rust and WASM to collaborate and all the examples
online on how to get it to work did not work or got really complicated. So here
is my solution using `rustPlatform.buildRustPackage`. It is based on [this
article](https://www.tweag.io/blog/2022-09-22-rust-nix/), but I just made a
single file. This way you can adjust it as you would like. This also works in
cargo workspaces.

_You only need to change the `INSERT_PACKAGE_NAME` to the name of your cargo package._


```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    utils.url = "github:numtide/flake-utils";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { self, nixpkgs, utils, rust-overlay }:
    utils.lib.eachDefaultSystem (system:
      let
        buildTarget = "wasm32-unknown-unknown";
        packageName = "INSERT_PACKAGE_NAME";
        
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ rust-overlay.overlays.default ];
        };
  
        rustToolchain = pkgs.rust-bin.stable.latest.default.override {
          targets = [ buildTarget ];
        };
  
        rustPlatform = pkgs.makeRustPlatform {
          cargo = rustToolchain;
          rustc = rustToolchain;
        };
      in {
        packages.default = rustPlatform.buildRustPackage {
          name = packageName;
          src = ./.;
          
          cargoLock.lockFile = ./Cargo.lock;
            
          buildPhase = ''
            cargo build --release -p ${packageName} --target=${buildTarget}
          '';
  
          installPhase = ''
            mkdir -p $out/lib
            cp target/${buildTarget}/release/*.wasm $out/lib/
          '';
  
          # Disable checks if they only work for WASM
          # doCheck = false;
      };
    }
  );
}
```

Or you can run use the following template in a bare project:

```bash
nix flake init -t github:coastalwhite/nix-flake-templates#rust-wasm
```
