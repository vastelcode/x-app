import { IMenuItem } from "@shared/types/enteries/types-menu-item";

import uuid4 from "uuid4";

import { iconNames } from "@shared/assets/icons";

const { iconHome, iconBookmarks, iconProfile, iconSearch, iconCommunities, iconMessages } = iconNames;

import { APP_PATHS } from "@shared/static/app-paths";

interface MenuItem extends IMenuItem {
  id: string;
}

export const MENU_CONFIG: MenuItem[] = [
  {
    to: APP_PATHS.HOME,
    label: 'Home',
    icon: iconHome,
    id: uuid4()
  },
  {
    to: APP_PATHS.SEARCH,
    label: 'Explore',
    icon: iconSearch,
    id: uuid4()
  },
  {
    to: APP_PATHS.BOOKMARKS,
    label: 'Bookmarks',
    icon: iconBookmarks,
    id: uuid4()
  },
  {
    to: APP_PATHS.COMMUNITIES,
    label: 'Communities',
    icon: iconCommunities,
    id: uuid4()
  },
  {
    to: APP_PATHS.MESSAGES,
    label: 'Messages',
    icon: iconMessages,
    id: uuid4()
  },
  {
    to: APP_PATHS.PROFILE,
    label: 'Profile',
    icon: iconProfile,
    id: uuid4()
  }
]