import { SingleUser } from '../../Types/singleUser';

interface Prop {
  user: SingleUser;
  loading: boolean;
}

const UserRecords = ({ user, loading }: Prop) => {
  if (loading) return <h3 className="text-color1">Loading...</h3>;

  return (
    <div className="user-records">
      <div className="user-records__personal container-divs">
        <h3 className="margin-bottom">Personal Information</h3>
        <div className="personal-records grid-4 ">
          <div className="margin-bottom">
            <p className="bottom-margin">full Name</p>
            <h6>{`${user.profile.firstName} ${user.profile.lastName}`}</h6>
          </div>
          <div className="bottom-margin">
            <p>Phone Number</p>
            <h6>{user.phoneNumber}</h6>
          </div>
          <div className="margin-bottom">
            <p>Email Address</p>
            <h6>{user.email}</h6>
          </div>
          <div className="margin-bottom">
            <p>Bvn</p>
            <h6>{user.profile.bvn}</h6>
          </div>
          <div className="margin-bottom">
            <p>Gender</p>
            <h6>{user.profile.gender}</h6>
          </div>
          <div className="margin-bottom">
            <p>Marital status</p>
            <h6>{user.profile.firstName}</h6>
          </div>
          <div className="margin-bottom">
            <p>Children</p>
            <h6>{`${user.profile.firstName} ${user.profile.lastName}`}</h6>
          </div>
          <div className="margin-bottom">
            <p>Type of residence</p>
            <h6>{user.profile.firstName}</h6>
          </div>
        </div>
      </div>
      <div className="user-records__education container-divs">
        <h3 className="margin-bottom">Education and Employment</h3>
        <div className="grid-4">
          <div className="margin-bottom">
            <p>level of education</p>
            <h6>{user.education.level}</h6>
          </div>
          <div className="margin-bottom">
            <p>employment status</p>
            <h6>{user.education.employmentStatus}</h6>
          </div>
          <div className="margin-bottom">
            <p>sector of employment</p>
            <h6>{user.education.sector}</h6>
          </div>
          <div className="margin-bottom">
            <p>Duration of employment</p>
            <h6>{user.education.duration}</h6>
          </div>
          <div className="margin-bottom">
            <p>office email</p>
            <h6>{user.education.officeEmail}</h6>
          </div>
          <div className="margin-bottom">
            <p>Monthly income</p>
            <h6>{user.education.monthlyIncome}</h6>
          </div>
          <div className="margin-bottom">
            <p>loan repayment</p>
            <h6>{user.education.loanRepayment}</h6>
          </div>
        </div>
      </div>
      <div className="user-records__socials container-divs">
        <h3 className="margin-bottom">Socials</h3>
        <div className="grid-4">
          <div className="margin-bottom">
            <p>Twitter</p>
            <h6>{user.socials.twitter}</h6>
          </div>
          <div className="margin-bottom">
            <p>Facebook</p>
            <h6>{user.socials.facebook}</h6>
          </div>
          <div className="margin-bottom">
            <p>Instagram</p>
            <h6>{user.socials.instagram}</h6>
          </div>
        </div>
      </div>
      <div className="user-records__guarantor guarantor">
        <h3 className="margin-bottom">Guarantor</h3>
        <div className="grid-4">
          <div className="margin-bottom">
            <p>full Name</p>
            <h6>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</h6>
          </div>
          <div className="margin-bottom">
            <p>Phone Number</p>
            <h6>{user.guarantor.phoneNumber}</h6>
          </div>
          <div className="margin-bottom">
            <p>Email</p>
            <h6>{user.guarantor?.email ?? 'guarantor@email.com'}</h6>
          </div>
          <div className="margin-bottom">
            <p>Relationship</p>
            <h6>{user.guarantor?.relationship ?? 'sister'}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRecords;