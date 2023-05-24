import UserInfoCard from './UserInfoCard';
import User1 from '../../assets/user-1.png';
import User2 from '../../assets/user-2.png';
import User3 from '../../assets/user-3.png';
import User4 from '../../assets/user-4.png';
import NextBtn from '../../assets/next-btn.png';
import PrevBtn from '../../assets/prev-btn.png';
import DropDown from '../../assets/switch-dropdown.png';
import UsersTable from './UsersTable';
import { useState } from 'react';
import FormModal from './FormModal';
import { useGlobalContext } from '../../Context/context';

const UsersPage = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectOptions, setSelectOption] = useState(10);

  const { users, prevPage, nextPage, updateNumPerPage, setPage }:any =
    useGlobalContext();

  return (
    <div className="users">
      <h4 className="text-color1">Users</h4>
      <div className="users__summary">
        <UserInfoCard image={User1} text="users" figure={2453} />
        <UserInfoCard image={User2} text="active users" figure={2453} />
        <UserInfoCard image={User3} text="users with loans" figure={12453} />
        <UserInfoCard image={User4} text="users with savings" figure={102453} />
      </div>
      <div className="table__container">
        <UsersTable
          showDetails={showDetails}
          setShowFilter={setShowFilter}
          setShowDetails={setShowDetails}
        />
        {showFilter && <FormModal />}
      </div>
      <div className="filters">
        <div className="select-filters text-color2">
          <span>Showing</span>
          <div className="flex text-color1 select">
            <select
              name=""
              id=""
              value={selectOptions}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectOption(+e.target.value)
              }
              onSubmit={(e) => {
                e.preventDefault();
                updateNumPerPage(selectOptions);
              }}
            >
              {[10, 20, 30, 40, 50].map((opt, index) => {
                return (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                );
              })}
            </select>
            <span>
              <img src={DropDown} alt="Drop down icon" />
            </span>
          </div>
          <span>Out 100</span>
        </div>
        <div className="filters__btn flex text-color2">
          <div>
            <button aria-label="prev button" onClick={prevPage}>
              <img src={PrevBtn} alt="" />
            </button>
          </div>
          {users?.slice(0, 3).map((_, index) => {
            return (
              <button key={index} onClick={() => setPage(index)}>
                {index + 1}
              </button>
            );
          })}
          <span>...</span>
          {[8, 9].map((i, index) => {
            return (
              <button key={index} onClick={() => setPage(i)}>
                {i + 1}
              </button>
            );
          })}
          <div>
            <button aria-label="next button" onClick={nextPage}>
              <img src={NextBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;