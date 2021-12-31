import Generic from "../pages/generic"

import { ReactComponent as Sun } from "../assets/icons/sun.svg"
import { ReactComponent as Star } from "../assets/icons/star.svg"
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg"
import { ReactComponent as User } from "../assets/icons/user.svg"
import { ReactComponent as Home } from "../assets/icons/home.svg"
import { ReactComponent as Cart } from "../assets/icons/cart4.svg"
import { ReactComponent as Hand } from "../assets/icons/hand.svg"


export const sidebarObj = [
    {
        id: 1,
        title: "My Day",
        icon: Sun,
        Component: Generic,
        path: "myDay"
    },
    {
        id: 2,
        title: "Important",
        icon: Star,
        Component: Generic,
        path: "important"
    },
    {
        id: 3,
        title: "Planned",
        icon: Calendar,
        Component: Generic,
        path: "planned"
    },
    {
        id: 4,
        title: "Assigned to me",
        icon: User,
        Component: Generic,
        path: "assignedToMe"
    },
    {
        id: 5,
        title: "Tasks",
        icon: Home,
        Component: Generic,
        path: "tasks"
    },
    {
        id: 6,
        title: "Getting started",
        icon: Hand,
        Component: Generic,
        path: "gettingStarted"
    },
    {
        id: 7,
        title: "Groceries",
        icon: Cart,
        Component: Generic,
        path: "groceries"
    },
]

