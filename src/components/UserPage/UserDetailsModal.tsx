import { Link, useNavigate } from 'react-router-dom';

import EyeIcon from '../../assets/eye.png';
import CheckUser from '../../assets/check-user.png';
import DeleteUSer from '../../assets/delete-user.png';

const UserDetailsModal = ({ userId }: { userId: string }) => {
  const navigate = useNavigate();
  return (
    <div className="user-details__modal flex-col">
      <button
        className="flex"
        onClick={() => {
          navigate(`/users/${userId}`);
        }}
      >
        <span>
          <img src={EyeIcon} alt="" />
        </span>
        <span>View Details</span>
      </button>
      <div className="flex">
        <span>
          <img src={DeleteUSer} alt="" />
        </span>
        <span>Blacklist User</span>
      </div>
      <div className="flex">
        <span>
          <img src={CheckUser} alt="" />
        </span>
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default UserDetailsModal;