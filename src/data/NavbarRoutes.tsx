// Icons
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import PeopleIcon from "@mui/icons-material/People";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import SupportIcon from "@mui/icons-material/Support";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
// import PostAddIcon from "@mui/icons-material/PostAdd";
import GroupIcon from "@mui/icons-material/Group";
// import CakeIcon from "@mui/icons-material/Cake";
import LinkIcon from "@mui/icons-material/Link";
import BarChartIcon from "@mui/icons-material/BarChart";
import {Home} from "@mui/icons-material";

import InboxIcon from "@mui/icons-material/Inbox";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
// import LinkIcon from "@mui/icons-material/Link";
import BusinessIcon from "@mui/icons-material/Business";
// import GroupIcon from "@mui/icons-material/Group";
import GetAppIcon from "@mui/icons-material/GetApp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

// ! Routes for the Navbar and Sidebar components in the app layout
export const Routes = [
  {
    title: "Home",
    path: "/admin/home",
    icon: Home,
  },
  {
    title: "Statistics",
    path: "/admin/events",
    icon: BarChartIcon,
  },
  {
    title: "Invitation",
    path: "/admin/invitation",
    icon: MailIcon,
  },
  // {
  //   title: "Filter Sales",
  //   path: "/sales",
  //   icon: FilterListIcon,
  // },
  // {
  //   title: "HR Tools",
  //   path: "/hr",
  //   icon: PeopleIcon,
  // },
  // {
  //   title: "Team Activity Tracker",
  //   path: "/activity",
  //   icon: TimelineIcon,
  // },
  // {
  //   title: "Calendar of Activities",
  //   path: "/calendar",
  //   icon: CalendarMonthIcon,
  // },
  // {
  //   title: "Support Requests",
  //   path: "/support",
  //   icon: SupportIcon,
  // },
  // {
  //   title: "Ebooks",
  //   path: "/ebooks",
  //   icon: MenuBookIcon,
  // },
  // {
  //   title: "Presentations",
  //   path: "/presentations",
  //   icon: SlideshowIcon,
  // },
  // {
  //   title: "Support Ticket",
  //   path: "/ticket",
  //   icon: ConfirmationNumberIcon,
  // },
  // {
  //   title: "Create Listing Poster",
  //   path: "/poster",
  //   icon: PostAddIcon,
  // },
  // {
  //   title: "Team Top 10 Agent List",
  //   path: "/top-agents",
  //   icon: DashboardIcon,
  // },
  // {
  //   title: "Birthday Celebrants",
  //   path: "/birthdays",
  //   icon: CakeIcon,
  // },
  // {
  //   title: "Members",
  //   path: "/members",
  //   icon: GroupIcon,
  // },
  // {
  //   title: "Developer/Projects Link",
  //   path: "/projects",
  //   icon: LinkIcon,
  // },
];

// ! Profile menu items for the user profile dropdown menu in the app layout
export const profileMenuItems = [
  {title: "Profile", icon: PersonIcon},
  {title: "Inbox", icon: InboxIcon},
  {title: "Compose Message", icon: EditIcon},
  {title: "Share Contact Link", icon: ShareIcon},
  {title: "Share Referral Link", icon: LinkIcon},
  {title: "Share Business Profile", icon: BusinessIcon},
  {title: "Online Users", icon: GroupIcon},
  {title: "Download LR App", icon: GetAppIcon},
  {title: "We are on the News", icon: NewspaperIcon},
];
