'use client';

import { usePathname } from 'next/navigation';

import styles from './NavigationMenu.module.scss';

import { MENU_CONFIG } from '@shared/config/menu-config';

import { NavigationTab } from '@entities/navigation-tab';

export const NavigationMenu = () => {

  const path = usePathname();

  return (
    <nav className={`${styles.nav} flex flex-col gap-3`}>
      {/* логотип */}
      <img src="/icon-favicon.svg" alt="логотип" className={styles.logo} />
      {/* меню */}
      {MENU_CONFIG.map((elem) => {
        return (
          <NavigationTab
          {...elem}
          key={elem.id}
          isActive={path === elem.to}
          />
        );
      })}
    </nav>
  );
}