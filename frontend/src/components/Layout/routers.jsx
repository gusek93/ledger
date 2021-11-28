import Ledger from "./Ledger";
import Users from "./Users";
import Home from "./Home";
import User from "./User";



export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/ledger',
        component: Ledger
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:pk',
        component: User
    },
];