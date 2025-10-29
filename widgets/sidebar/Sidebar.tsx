import styles from './Sidebar.module.scss';

import { AccountDisplay } from '@features/account-display';
import { NavigationMenu } from '@features/navigation-menu';

export const Sidebar = () => {
  return (
    // главный компонент боковой панели
    <aside className={`${styles.sidebar} px-5 py-2`}>
      {/* меню с навигацией */}
      <NavigationMenu/>
      {/* отображение информации об аккаунте */}
      <AccountDisplay/>
    </aside>
  );
}