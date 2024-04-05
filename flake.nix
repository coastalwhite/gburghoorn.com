{
  description = "Personal Website";
  
  inputs = {
      nixpkgs.url = "github:NixOS/nixpkgs";
      utils.url = "github:numtide/flake-utils";
  };
  
  outputs = { self, nixpkgs, utils }: 
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        packages.default = pkgs.stdenv.mkDerivation {
          version = "0.1";
          pname = "gburghoorn.com";
      
          src = ./.;
      
          buildPhase = ''
            ${pkgs.tailwindcss}/bin/tailwindcss -i styles/styles.scss -o static/styles/styles.css --minify
            ${pkgs.zola}/bin/zola build
            mkdir -p $out
            cp -r public/* $out/
          '';
        };

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            tailwindcss
            zola
          ];
        };
      }
    );
}