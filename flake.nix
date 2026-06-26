{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "systems";
  };

  outputs =
    {
      nixpkgs,
      systems,
      ...
    }:
    let
      forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      devShells = forEachSystem (
        system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.just
              pkgs.nodejs_24
              pkgs.pnpm_11
              pkgs.woff2
              pkgs.typst
              pkgs.cavif
            ];

            shellHook = "";
          };
        }
      );
    };
}
