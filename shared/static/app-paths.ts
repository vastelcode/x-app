export const APP_PATHS = {
  HOME: '/',
  PROFILE: '/profile',
  BOOKMARKS: '/bookmarks',
  SEARCH: '/search' ,
  MESSAGES: '/messages',
  COMMUNITIES: '/communities'
} as const;

export type TAppPaths = typeof APP_PATHS[keyof typeof APP_PATHS];