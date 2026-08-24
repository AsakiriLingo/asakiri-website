export const githubUrl = "https://github.com/AsakiriLingo/asakiri-studio";
export const docsUrl = "https://docs.asakiri.com";

// Companies that support Asakiri through their open-source programs.
// Drop a logo in /public and add an entry to show it on the Sponsor page.
export const partners = [
  {
    name: "Lokalise",
    url: "https://lokalise.com/",
    logo: "/lokalise-logo.svg",
  },
  {
    name: "Codecov",
    url: "https://about.codecov.io/",
    logo: "/codecov-logo.svg",
  },
] as const satisfies ReadonlyArray<{
  name: string;
  url: string;
  logo: string;
}>;

export const studioVersion = "0.4.1";

const studioReleaseAssets = `${githubUrl}/releases/download/v${studioVersion}`;

export const studioDownloads = [
  {
    platform: "macos",
    format: ".dmg",
    url: `${studioReleaseAssets}/Asakiri.Studio_${studioVersion}_universal.dmg`,
  },
  {
    platform: "windows",
    format: ".exe",
    url: `${studioReleaseAssets}/Asakiri.Studio_${studioVersion}_x64-setup.exe`,
  },
  {
    platform: "windows",
    format: ".msi",
    url: `${studioReleaseAssets}/Asakiri.Studio_${studioVersion}_x64_en-US.msi`,
  },
  {
    platform: "linux",
    format: ".AppImage",
    url: `${studioReleaseAssets}/Asakiri.Studio_${studioVersion}_amd64.AppImage`,
  },
  {
    platform: "linux",
    format: ".deb",
    url: `${studioReleaseAssets}/Asakiri.Studio_${studioVersion}_amd64.deb`,
  },
  {
    platform: "linux",
    format: ".rpm",
    url: `${studioReleaseAssets}/Asakiri.Studio-${studioVersion}-1.x86_64.rpm`,
  },
] as const satisfies ReadonlyArray<{
  platform: "macos" | "windows" | "linux";
  format: string;
  url: string;
}>;
export const discordUrl = "https://discord.gg/X2W6NX7CNY";
export const patreonUrl = "https://www.patreon.com/asakiri";
export const patreonJoinUrl = "https://www.patreon.com/9836861/join";
export const linkedinUrl = "https://www.linkedin.com/company/asakiri/";
export const contactEmail = "alok@asakiri.com";
