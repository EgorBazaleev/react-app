import './MenuLayout.css';

function MenuLayout({ iconPath, children }) {
  return (
    <div className="menu-layout">
      {iconPath && <img className="menu-layout__front-icon" src={iconPath} />}
      <div className="menu-layout__content">{children}</div>
    </div>
  );
}

export default MenuLayout;
