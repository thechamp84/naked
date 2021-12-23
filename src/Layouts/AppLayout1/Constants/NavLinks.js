import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import CategoryIcon from '@mui/icons-material/Category';
import TocIcon from '@mui/icons-material/Toc';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import BusinessIcon from '@mui/icons-material/Business';
import DomainRoundedIcon from '@mui/icons-material/DomainRounded';
import ContactSupport from '@mui/icons-material/ContactSupport';

export const NavLinks = [
    { name: 'Home', path: '/app/dashboard', current: true, Icon: HomeRoundedIcon },
    { name: 'Customer Support', path: '/app/enquiries', current: false, Icon: LiveHelpRoundedIcon },
    { name: 'Investors', path: '/app/investors', current: false, Icon: LiveHelpRoundedIcon },
    { name: 'Fund Types', path: '/app/fund-types', current: false, Icon: CategoryIcon },
    { name: 'Pages', path: '/app/pages', current: false, Icon: TocIcon },
    { name: 'EOD Statements', path: '/app/eod-statements', current: false, Icon: InsertDriveFileIcon },
    { name: 'Bank Accounts', path: '/app/bank-accounts', current: false, Icon: AccountBalanceRoundedIcon },
    { name: 'Funds', path: '/app/funds', current: false, Icon: BusinessIcon },
    { name: 'Authorized Entities', path: '/app/authorized-entities', current: false, Icon: DomainRoundedIcon },
    { name: 'FAQs', path: '/app/faqs', current: false, Icon: ContactSupport },
];
