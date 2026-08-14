export const githubUrl = "https://github.com/AsakiriLingo/asakiri-studio";

export const studioVersion = "0.1.9";

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
