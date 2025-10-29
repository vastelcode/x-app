import clsx from 'clsx';

import styles from './NavigationTab.module.scss';

import Link from 'next/link';

import { IMenuItem } from '@shared/types/enteries/types-menu-item';

interface Props extends IMenuItem {
  isActive: boolean;
}

export const NavigationTab = (
  { isActive, label, to, icon} : Props
) => {

  const classesTab = clsx({
    [styles.tab]: true,
    [styles['tab_active']]: isActive,
    'flex gap-5 items-center': true
  });

  return (
    <Link href={to}>
    <div 
    className={classesTab}
    >
      <img src={icon} alt="иконка таба" className={styles.icon} />
      <p className={styles.label}>
        {label}
      </p>
    </div>
    </Link>
  );
}