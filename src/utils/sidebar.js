//COMPONENTS
import Generic from "../pages/generic"
import MyDay from "../components/myday"
import Important from "../components/Important"
import AssignedToMe from "../components/AssignedToMe"
//ICONS
import { BsSun } from "react-icons/bs"
import { IoStarOutline, IoCalendarOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"
import { VscHome } from "react-icons/vsc"


export const sidebarObj = [
    {
        id: 1,
        title: "My Day",
        icon: BsSun,
        Component: MyDay,
        path: "myDay"
    },
    {
        id: 2,
        title: "Important",
        icon: IoStarOutline,
        Component: Important,
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
        Component: AssignedToMe,
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

