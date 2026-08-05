import styles from './MenuLayout.module.css';
import { MenuLayoutProps } from './MenuLayoutProps';

function MenuLayout({ iconPath, children }: MenuLayoutProps) {
  return (
    <div className={styles['menu-layout']}>
      {iconPath && <img className={styles['menu-layout__front-icon']} src={iconPath} />}
      <div className={styles['menu-layout__content']}>{children}</div>
    </div>
  );
}

export default MenuLayout;
