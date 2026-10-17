export interface Extension {
  name: string;
  cover?: string;
  description: string;
  github_url: string;
  chrome_webstore_url?: string;
}

const extensions: Extension[] = [
  {
    name: "Floating Console",
    description:
      "A draggable in-page debug console with dark and light themes. View logs, errors, and warnings instantly without opening DevTool perfect for faster debugging, testing, and monitoring with zero window clutter.",
    github_url: "https://github.com/webvium/floating-console-extension",
  },
  {
    name: "Disable Control Shift C",
    description:
      "This extension overrides the default Ctrl + Shift + C behavior in Chromium-based browsers.",
    github_url: "https://github.com/webvium/disable-control-shift-c-extension",
  },
  {
    name: "Awesome New Tab",
    description:
      "A modern, customizable browser new tab experience with stunning Bing Wallpaper backgrounds and a clean, immersive design.",
    cover:
      "https://raw.githubusercontent.com/webvium/awesome-new-tab-extension/refs/heads/master/this-is-a-screenshot.png",
    github_url: "https://github.com/webvium/awesome-new-tab-extension",
    chrome_webstore_url:
      "https://chromewebstore.google.com/detail/kfoebhjfkkmenooogbaaamhnknaknbmk?utm_source=item-share-cb",
  },
  {
    name: "Browser Storage Inspector",
    description:
      "Allows you to inspect and edit the browser's cookies, local and session storage with ease. No more devtools required.",
    github_url: "https://github.com/webvium/browser-storage-inspector",
  },
  {
    name: "Webvium Ad Blocker",
    description:
      "Brought to you by Webvium, the ad blocker that makes the web a better place.",
    github_url: "https://github.com/webvium/webvium-ad-blocker-extension",
  },
];

export default extensions;
