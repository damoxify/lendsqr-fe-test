import Brief from '../../assets/brief.png';
import Dropdown from '../../assets/switch-dropdown.png';
import Home from '../../assets/home.png';
import Signout from '../../assets/sign.png';
import { sidebarLinks } from './sharedutils';
import '../../styles/main.scss';
import './layout.scss';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../Context/context';

const Sidebar = () => {
  const { showSidebar, setShowSidebar }:any = useGlobalContext();
  return (
    <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
      <div className="flexCol">
        <div className="sidebar__header flex">
          <span>
            <img src={Brief} alt="Briefcase" />
          </span>
          <span>Switch Organization</span>
          <span>
            <img src={Dropdown} alt="Dropdown icon" />
          </span>
        </div>
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }): string =>
            isActive ? 'flex sidebar__active' : 'flex sidebar__inactive'
          }
          onClick={() => setShowSidebar(false)}
        >
          <span>
            <img src={Home} alt="Home icon" />
          </span>
          <span>Dashboard</span>
        </NavLink>
        <div className="sidebar__nav-container">
          {sidebarLinks.map(({ links, title, id }) => {
            return (
              <div key={id} className="sidebar__links">
                <h5>{title}</h5>
                <div className="sidebar__sublinks">
                  {links.map(({ path, text, icon }) => {
                    return (
                      <NavLink
                        to={`${path}`}
                        key={text}
                        className={({
                          isActive,
                        }: {
                          isActive: boolean;
                        }): string =>
                          isActive
                            ? 'flex sidebar__active'
                            : 'flex sidebar__inactive'
                        }
                        onClick={() => setShowSidebar!(false)}
                      >
                        <img src={icon} alt="Link icon" />
                        <span>{text}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="padding flex">
          <span>
            <img src={Signout} alt="Sign out icon" />
          </span>
          <span className="text-color2">Logout</span>
        </div>
        <p className="padding text-color2">v1.2.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;