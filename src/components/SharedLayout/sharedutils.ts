import Briefcase from '../../assets/brief.png';
import Tire from '../../assets/tire.png';
import Ego from '../../assets/ego.png';
import Bank from '../../assets/bank.png';
import Scroll from '../../assets/scroll.png';
import Galaxy from '../../assets/galaxy.png';
import Clipboard from '../../assets/clipboard.png';
import Vector from '../../assets/Vector.png';
import Icon from '../../assets/icon.png';
import UserTimes from '../../assets/user-times.png';
import UserCheck from '../../assets/user-check.png';
import UserGroup from '../../assets/users-group.png';
import UserFriends from '../../assets/user-friends.png';
import Shake from '../../assets/shake.png';
import PiggyVest from '../../assets/piggy-bank.png';
import Loan from '../../assets/loan.png';
import Barchart from '../../assets/chart-bar.png';
import Usercog from '../../assets/user-cog.png';
import Sliders from '../../assets/sliders.png';
import Badge from '../../assets/badge-percent.png';

export const sidebarLinks = [
  {
    id: 1,
    title: 'customers',
    links: [
      { icon: UserFriends, text: 'Users', path: 'users' },
      { icon: UserGroup, text: 'Guarantors', path: 'guarantors' },
      { icon: Ego, text: 'Loans', path: 'loans' },
      { icon: Shake, text: 'Decision Models', path: 'decision-models' },
      { icon: PiggyVest, text: 'Savings', path: 'savings' },
      { icon: Loan, text: 'Loan Request', path: 'loan-request' },
      { icon: UserCheck, text: 'Whitelist', path: 'whitelist' },
      { icon: UserTimes, text: 'Karma', path: 'karma' },
    ],
  },
  {
    id: 2,
    title: 'businesses',
    links: [
      { icon: Briefcase, text: 'Organization', path: 'organization' },
      { icon: Loan, text: 'Loan Products', path: 'loan-products' },
      { icon: Bank, text: 'Savings Products', path: 'savings-products' },
      { icon: Vector, text: 'Fees and Charges', path: 'fees-charges' },
      { icon: Icon, text: 'Transactions', path: 'transactions' },
      { icon: Galaxy, text: 'Services', path: 'services' },
      { icon: Usercog, text: 'Service Account', path: 'service-account' },
      { icon: Scroll, text: 'Settlement', path: 'settlement' },
      { icon: Barchart, text: 'Reports', path: 'reports' },
    ],
  },
  {
    id: 3,
    title: 'settings',
    links: [
      { icon: Sliders, text: 'Preferences', path: 'preference' },
      { icon: Badge, text: 'Fees and Pricing', path: 'fees-pricing' },
      { icon: Clipboard, text: 'Audit Logs' },
      { icon: Tire, text: 'Systems Messages', path: 'systems' },
    ],
  },
];