import Ledger from "./Ledger";
import Users from "./Users";
import Home from "./Home";
import User from "./User";
import ChangeLedger from "../ChangeLedger"



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
        path: '/ledger/:id',
        component: ChangeLedger
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