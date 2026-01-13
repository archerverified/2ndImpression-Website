const v = (name: string) => `/videos/${encodeURIComponent(name)}`;

export const VIDEO = {
  hero: { scrollingList: v('scrolling list.webm') },
  lfmr: {
    iphoneMockups: v('Animated-iPhone-mockups.mp4'),
    badge: v('New-badge.mp4'),
  },
  services: {
    gmail: v('gmail ani.mp4'),
    gmb: v('gmb ani.mp4'),
    google: v('google ani.mp4'),
    notification: v('ashtonmessage ani.mp4'),
    webScreens: v('animatedwebscreens.mp4'),
    youtube: v('YouTube (1).mp4'),
    tiktok: v('TikTok (1).mp4'),
    instagram: v('Instagram (1).mp4'),
    facebook: v('Facebook (1).mp4'),
  },
  value: { iMessage: v('iMessage (1).mp4') },
} as const;
