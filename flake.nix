{
    description = "Personal Website";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs";
    };

    outputs = { nixpkgs, ... }: 
    let
        system = "x86_64-linux";
        pkgs = nixpkgs.legacyPackages.${system};
    in {
        packages.${system}.default = pkgs.stdenv.mkDerivation {
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
    };
}