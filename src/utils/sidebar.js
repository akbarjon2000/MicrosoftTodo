import Generic from "../pages/generic"
import MyDay from "../components/myday"

import { ReactComponent as Sun } from "../assets/icons/sun.svg"
// import { ReactComponent as Star } from "../assets/icons/star.svg"
import { IoStarOutline, IoCalendarOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"
import { VscHome } from "react-icons/vsc"
// import { ReactComponent as Calendar } from "../assets/icons/calendar.svg"
// import { ReactComponent as User } from "../assets/icons/user.svg"
// import { ReactComponent as Home } from "../assets/icons/home.svg"
import { ReactComponent as Cart } from "../assets/icons/cart4.svg"
import { ReactComponent as Hand } from "../assets/icons/hand.svg"


export const sidebarObj = [
    {
        id: 1,
        title: "My Day",
        icon: Sun,
        Component: MyDay,
        path: "myDay"
    },
    {
        id: 2,
        title: "Important",
        icon: IoStarOutline,
        Component: Generic,
        path: "important"
    },
    {
        id: 3,
        title: "Planned",
        icon: IoCalendarOutline,
        Component: Generic,
        path: "planned"
    },
    {
        id: 4,
        title: "Assigned to me",
        icon: AiOutlineUser,
        Component: Generic,
        path: "assignedToMe"
    },
    {
        id: 5,
        title: "Tasks",
        icon: VscHome,
        Component: Generic,
        path: "tasks"
    },

]

