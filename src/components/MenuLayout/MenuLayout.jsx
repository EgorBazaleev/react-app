import styles from './MenuLayout.module.css';

function MenuLayout({ iconPath, children }) {
  return (
    <div className={styles['menu-layout']}>
      {iconPath && <img className={styles['menu-layout__front-icon']} src={iconPath} />}
      <div className={styles['menu-layout__content']}>{children}</div>
    </div>
  );
}

export default MenuLayout;
