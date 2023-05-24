import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Arrow from '../../assets/arrowL.png';
import Startfill from '../../assets/starfill.png';
import Startsolid from '../../assets/starsolid.png';
import { customFetch } from '../../utils';

import UserRecords from './UserRecords';
import './userdetails.scss';
import { SingleUser } from '../../Types/singleUser';

const UserDetails = () => {
  const [singleUser, setSingleUser] = useState({
    createdAt: '2072-12-27T03:44:22.522Z',
    orgName: 'labore-dolor-et',
    userName: 'Wilburn.Rice',
    email: 'Maverick.Hyatt83@gmail.com',
    phoneNumber: '(553) 208-0727 x31321',
    lastActiveDate: '2099-02-28T23:17:40.013Z',
    profile: {
      firstName: 'Darian',
      lastName: 'Rolfson',
      phoneNumber: '494-278-0946',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg',
      gender: 'Male',
      bvn: '815809412',
      address: 'Gusikowski Locks',
      currency: 'NGN',
    },
    guarantor: {
      firstName: 'Celine',
      lastName: 'Monahan',
      phoneNumber: '1-482-227-3654 x71086',
      gender: 'Male',
      address: "O'Hara Centers",
    },
    accountBalance: '496.00',
    accountNumber: 'GWQUSEH1',
    socials: {
      facebook: '@lendsqr',
      instagram: '@lendsqr',
      twitter: '@lendsqr',
    },
    education: {
      level: 'Bsc',
      employmentStatus: 'Employed',
      sector: 'FinTech',
      duration: '2 Years',
      officeEmail: 'Edna4@yahoo.com',
      monthlyIncome: ['128.57', '118.07'],
      loanRepayment: '122.47',
    },
    id: '1',
  });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const result = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        );
        const data = await result.json();
        setSingleUser(data);
        console.log(data);
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchSingleUser();
  }, [id]);

  return (
    <section>
      <div className="user-details-page flex">
        <Link to="/users">
          <div className="margin-bottom flex">
            <span>
              <img src={Arrow} alt="Back icon" />
            </span>
            <span className="text-color2">Back to Users</span>
          </div>
        </Link>
      </div>
      <div className="user-details__header margin-bottom flex-center">
        <div>
          <h4>User details</h4>
        </div>
        <div className="flex">
          <button className="btn__blacklist">Blacklist user</button>
          <button className="btn__activate">Activate user</button>
        </div>
      </div>
      <div className="user-details">
        <div className="user-details__info flex">
          <div className="user-image flex">
            <img
              src={singleUser?.profile?.avatar}
              alt="User Avatar"
              className="user__image"
            />
          </div>
          <div className="user-name">
            <h3 className="text-color1 bottom-margin">{`${singleUser?.profile?.firstName} ${singleUser?.profile?.lastName}`}</h3>
            <p className="text-color2">LSQFf587g90</p>
          </div>
          <div className="user-division"></div>
          <div className="user-rating text-color2">
            <p className="bottom-margin">User's Tier</p>
            <span className="flex">
              <img src={Startsolid} alt="Rating stars" />
              <img src={Startfill} alt="Rating stars" />
              <img src={Startfill} alt="Rating stars" />
            </span>
          </div>
          <div className="user-division"></div>
          <div className="user-bank-detail text-color1">
            <h4 className="bottom-margin">₦{singleUser?.accountBalance}</h4>
            <p>{`${singleUser?.accountNumber}`}/Providus Bank</p>
          </div>
        </div>
        <div className="user-details__btn-container">
          <button className="user-details__btns user-details__btns-active">
            General Details
          </button>
          <button className="user-details__btns">Documents</button>
          <button className="user-details__btns">Bank Details</button>
          <button className="user-details__btns">Loans</button>
          <button className="user-details__btns">Savings</button>
          <button className="user-details__btns">App and System</button>
        </div>
      </div>
      <UserRecords user={singleUser} loading={loading} />
    </section>
  );
};

export default UserDetails;