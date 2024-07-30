import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../store/auth";

export const AdminLayout = ()=>{
    const { user } = useAuth();
    // if(!user.isAdmin){
    //     return <Navigate to="/"/>;
    // }
    console.log("auth context value", useAuth());
    console.log("admin layout",user);
    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users">Users</NavLink></li>
                    <li><NavLink to="/admin/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/admin/additionalInformation">Donor's Info</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
}