import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import Dropdown from '../../assets/drop.png';
import Notification from '../../assets/notification.png';
import SearchIcon from '../../assets/search.png';
import './layout.scss';
import { useGlobalContext } from '../../Context/context';
import { useEffect, useRef } from 'react';

const Header = () => {
  const { setShowSidebar, showSidebar }:any = useGlobalContext();

  const toggleRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    toggleRef?.current?.classList.toggle('open');

    setShowSidebar((prev) => !prev);
  };
  useEffect(() => {
    if (!showSidebar) {
      toggleRef?.current?.classList.remove('open');
    }
  }, [showSidebar]);
  return (
    <header className="header">
      <div className="header__l">
        <div className="header__logo">
          <button className="hamburger" ref={toggleRef} onClick={handleClick}>
            <span className="hamburger-top"></span>
            <span className="hamburger-md"></span>
            <span className="hamburger-bt"></span>
          </button>
          <img src={Logo} alt="Brand Logo" />
        </div>
        <div className="header__input">
          <input type="text" placeholder="Search for anything" />
          <span>
            <img src={SearchIcon} alt="search icon" />
          </span>
        </div>
      </div>
      <div className="header__r">
        <div className="docs">
          <a href="#">Docs</a>
          <img src={Notification} alt="Notification Icon" />
        </div>
        <div className="user-info">
          <img src={User} alt="user avatar" className="user-icon" />
          <h5>Adedeji</h5>
          <img src={Dropdown} alt="Dropdown icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;