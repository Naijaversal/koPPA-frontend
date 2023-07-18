import { FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import {BsDice4, BsCartCheck} from "react-icons/bs";

const menu = [
  {
    title: "Summary",
    icon: <BsDice4 size={20}/>,
    path: "/dashboard",
  },
  {
    title: "Request Loan",
    icon: <BsCartCheck size={20}/>,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar size={20}/>,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Contact Us",
    icon: <FaCommentAlt size={20}/>,
    path: "/contact-us",
  },
];

export default menu;
