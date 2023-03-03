import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { planContext } from '../App';
import { getAllCoursesApi, logoutApi } from '../Config/Api';


const AdminSide = ({ renderPage, setAdminLogged }) => {
    const [activeMenu, setActiveMenu] = useState("sales");
    const [activeSubMenu, setActiveSubMenu] = useState("banner");
    const location = useLocation();

    const { allCourses, setAllCourses } = useContext(planContext);

    useEffect(() => {
        setActiveMenu(location.pathname.split('/')[2]);
        setActiveSubMenu(location.pathname.split('/')[3]);
    }, [location]);


    useEffect(() => {
        const findCourses = async () => {
            try {
                const getAllCourses = await axios.get(getAllCoursesApi);
                if (getAllCourses.data.length > 0) {
                    setAllCourses(getAllCourses.data);
                }
            } catch (e) {
                console.log(e);
            }
        }
        findCourses();
    }, [renderPage]);

    const handleLogout = async () => {
        try {
            const res = await axios.get(logoutApi, { withCredentials: true });
            if (res.status) {
                setAdminLogged(false);
                window.location.reload();
            }
            // }
        } catch (e) {
            // console.log(e);
            alert("login Failed");
        }
    }

    return (
        <div className="adminSide">

            <div className="menus">
                <div className="topMenus">
                    <div className="subMenu">
                        <Link to="/admin/offerbanner/create" className={activeMenu === "offerbanner" ? "link menuActive" : "link"}>
                            <ion-icon name="gift-outline"></ion-icon>
                            Offer Banner
                        </Link>
                        <Link to="/admin/offerbanner/create" className={activeSubMenu === 'create' ? 'active subLink' : 'subLink'}>
                            Create new Banner
                        </Link>
                        <Link to="/admin/offerbanner/history" className={activeSubMenu === 'history' ? 'active subLink' : 'subLink'}>
                            History
                        </Link>
                    </div>
                    <div className="subMenu">
                        <Link to={`/admin/course`} className={activeMenu === "course" ? "link menuActive" : "link"} >
                            <ion-icon name="library-outline"></ion-icon>
                            Course
                        </Link>
                        <Link to="/admin/course/createcourse" className={activeSubMenu === "createcourse" ? 'active subLink' : 'subLink'}>
                            Create new Course
                        </Link>
                        {
                            allCourses.length > 0 &&
                            allCourses?.map((course, index) => (
                                <Link key={index} to={`/admin/course/${course._id}`} className={activeSubMenu === course._id ? 'active subLink' : 'subLink'}>
                                    {course.title}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="subMenu">
                        <Link to={`/admin/students`} className={activeMenu === "students" ? "link menuActive" : "link"} >
                            <ion-icon name="school-outline"></ion-icon>
                            Enrolled Students
                        </Link>
                    </div>
                    <div className="subMenu">
                        <Link to={`/admin/waiting`} className={activeMenu === "waiting" ? "link menuActive" : "link"} >
                            <ion-icon name="people-outline"></ion-icon>
                            Waiting Students
                        </Link>
                    </div>
                    <div className="subMenu">
                        <Link to={`/admin/quizsubmitted`} className={activeMenu === "quizsubmitted" ? "link menuActive" : "link"} >
                            <ion-icon name="hand-right-outline"></ion-icon>
                            Consulting Students
                        </Link>
                    </div>
                    <div className="subMenu">
                        <Link to={`/admin/transactions`} className={activeMenu === "transactions" ? "link menuActive" : "link"} >
                            {/* <ion-icon name="card-outline"></ion-icon> */}
                            <ion-icon name="ticket-outline"></ion-icon>
                            Transactions
                        </Link>
                    </div>
                    <div className="subMenu">
                        <Link to={`/admin/at-a-glance`} className={activeMenu === "at-a-glance" ? "link menuActive" : "link"} >
                            {/* <ion-icon name="information-circle-outline"></ion-icon> */}
                            <ion-icon name="analytics-outline"></ion-icon>
                            At a Glance
                        </Link>
                    </div>
                </div>


                <div className="bottomMenus">
                    <div className="subMenu">
                        <Link to="/admin/settings" className={activeMenu === "settings" ? "link menuActive" : "link"} onClick={() => {
                            setActiveMenu("settings")
                            setActiveSubMenu("")
                        }
                        }>
                            <ion-icon name="settings-outline"></ion-icon>
                            Settings
                        </Link>
                    </div>
                    <div className="subMenu">
                        <div onClick={handleLogout} className="link">
                            <ion-icon name="nuclear-outline"></ion-icon>
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSide