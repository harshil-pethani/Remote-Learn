import React from 'react'
import { useNavigate } from "react-router-dom";
import uiux from "../Assets/uiux.png";
import frontend from "../Assets/frontend.png";
import php from "../Assets/php.png";
import android from "../Assets/android.png";
import ios from "../Assets/ios.png";
import fullstack from "../Assets/fullstack.png";
import ourcourseswatermark from "../Assets/ourcourseswatermark.png"

const OurCourses = () => {
    return (
        <div className="ourCourses">
            <h2 className="title">
                Our Courses
            </h2>
            <div className="backgroundFont">
                <img loading="lazy" src={ourcourseswatermark} alt="" />
            </div>
            <div className="cardContainer">
                <div className="card">
                    <img src={uiux} alt="courseImg" />
                    <p className="courseTitle">
                        Graphic Designing
                    </p>
                </div>
                <div className="card">
                    <img src={frontend} alt="courseImg" />
                    <p className="courseTitle">
                        Frontend Designing
                    </p>
                </div>
                <div className="card">
                    <img src={php} alt="courseImg" />
                    <p className="courseTitle">
                        Php with Laravel
                    </p>
                </div>
                <div className="card">
                    <img src={android} alt="courseImg" />
                    <p className="courseTitle">
                        Android Development
                    </p>
                </div>
                <div className="card">
                    <img src={ios} alt="courseImg" />
                    <p className="courseTitle">
                        IOS Development
                    </p>
                </div>
                <div className="card">
                    <img src={fullstack} alt="courseImg" />
                    <p className="courseTitle">
                        Full Stack Development
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurCourses;