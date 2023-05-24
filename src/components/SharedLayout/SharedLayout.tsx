import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import './layout.scss';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className="layout ">
        <div className="sidebar__container">
          <Sidebar />
        </div>
        <div className="layout__outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;