import { Menu } from "./Menu";

export const Container = ({ os, setOs, title, children }) => {
  return (
    <div className={`page os_${os}`}>
      <Menu />
      <div className="select-os">
        <select value={os} onChange={(e) => setOs(e.currentTarget.value)}>
          <option value="98">Windows 98</option>
          <option value="xp">Windows XP</option>
          <option value="7">Windows 7</option>
        </select>
      </div>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </div>
  );
};
