import Ledger from "./Ledger";
import Users from "./Users";
import Home from "./Home";
import User from "./User";
import ChangeLedger from "../ChangeLedger";
import SignIn from "../Accounts/SignIn";
import SignUp from "../Accounts/SignUp";



export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signin',
        component: SignIn
    },
    {
        path: '/signup',
        component: SignUp
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