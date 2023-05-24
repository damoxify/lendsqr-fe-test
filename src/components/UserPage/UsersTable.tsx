import FilterIcon from '../../assets/filter-results-button.png';
import Dots from '../../assets/dots.png';
import { Dispatch, SetStateAction, useState } from 'react';
import UserDetailsModal from './UserDetailsModal';
import { useGlobalContext } from '../../Context/context';
import moment from 'moment';

type Prop = {
  showDetails: boolean;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
  setShowDetails: Dispatch<SetStateAction<boolean>>;
};
const UsersTable = ({ setShowFilter }: Prop) => {
  const [userSelectModal, setUserSelectModal] = useState<null | string>(null);

  const onShowUserSelectModal = (id: string) => {
    console.log(id, userSelectModal);
    if (id === userSelectModal) {
      setUserSelectModal(null);
    } else {
      setUserSelectModal(id);
    }
  };

  const { paginated: users, setModalLocation }:any = useGlobalContext();
  const showModalForm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const tempBtn = event.currentTarget.getBoundingClientRect();

    const left = tempBtn.left - 440;
    const top = 100;

    setShowFilter((prev) => !prev);
    setModalLocation({ left, top });
  };
  return (
    <div className="table">
      <table cellPadding="20px 40px" cellSpacing="20px">
        <thead>
          <tr style={{ borderBottom: '1px solid gray' }}>
            <th align="left">
              <span className="flex">
                <span>Organization</span>
                <button type="button" onClick={showModalForm}>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </span>
            </th>
            <th align="left">
              <span className="flex">
                <span>Username</span>
                <button type="button" onClick={showModalForm}>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </span>
            </th>
            <th align="left">
              <span className="flex">
                <span>Email</span>
                <button type="button" onClick={showModalForm}>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </span>
            </th>
            <th align="left">
              <span className="flex">
                <span>Phone number</span>
                <button type="button" onClick={showModalForm}>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </span>
            </th>
            <th align="left">
              <span className="flex">
                <span>Date Joined</span>
                <button type="button" onClick={showModalForm}>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </span>
            </th>
            <th align="left">
              <span className="flex">
                <span>Status</span>
                <button type="button" onClick={showModalForm}>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {users.length < 1 && <h3 className="text-color1">Loading...</h3>} */}
          {users?.map((user) => {
            return (
              <tr key={user.id} className="table__data">
                <td>{user.orgName}</td>
                <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  {moment(new Date(user?.createdAt)).format(
                    'MMMM Do YYYY, h:mm:ss a'
                  )}
                </td>
                <td
                  className={
                    user.status === 'active'
                      ? 'active'
                      : user.status === 'inactive'
                      ? 'inactive'
                      : user.status === 'pending'
                      ? 'pending'
                      : 'blacklisted'
                  }
                >
                  {user.status}
                </td>
                <td align="right">
                  <img
                    src={Dots}
                    alt="toggle"
                    onClick={() => onShowUserSelectModal(user.id || '')}
                  />
                </td>
                {userSelectModal === user.id && (
                  <span>
                    <UserDetailsModal userId={user.id} />
                  </span>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;