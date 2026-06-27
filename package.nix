{
  stdenvNoCC,
  fetchPnpmDeps,
  pnpm_11,
  nodejs_24,
  pnpmConfigHook,
  lib,
  ...
}:
let
  pname = "personal-website";
  version = "0.0.1-alpha";

  pnpmDeps = fetchPnpmDeps {
    inherit pname version;
    src = ./.;
    pnpm = pnpm_11;
    fetcherVersion = 4;
    hash = lib.fakeHash;
  };
in
stdenvNoCC.mkDerivation {
  inherit pname;
  inherit pnpmDeps;
  inherit version;

  src = ./.;
  nativeBuildInputs = [
    nodejs_24
    pnpm_11
    pnpmConfigHook
  ];

  buildPhase = ''
    runHook preBuild

    export VITE_SITE_URL="https://w.bradshaw.page"
    pnpm build

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p "$out"
    cp -r dist "$out/dist"

    runHook postInstall
  '';
}
