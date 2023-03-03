import React, { useContext, useEffect, useState } from 'react'
import { planContext } from '../App';
import latesttrendswatermark from "../Assets/latesttrendswatermark.png";

import graphic from "../Assets/graphicCourse.png";
import frontend from "../Assets/frontendCourse.png";
import php from "../Assets/phpCourse.png";
import android from "../Assets/androidCourse.png";
import ios from "../Assets/iosCourse.png";
import fullstack from "../Assets/fullstackCourse.png";
import axios from 'axios';
import { getSingleCourseApi } from '../Config/Api';

const PlanService = (props) => {
    const { courseIndex, curCourse, setCourseConfirmPopupActive, setNotifyMePopupActive } = props;

    const { setUserSelectedCourse, setUserSelectedBatch } = useContext(planContext);

    const [curBatchs, setCurBatches] = useState([]);

    const [curImg, setCurImg] = useState("");

    useEffect(() => {
        const findCourse = async () => {
            try {
                const res = await axios.get(getSingleCourseApi(curCourse._id));
                if (res.status === 200) {
                    setCurBatches(res.data.batches);
                }
            } catch (e) {
                console.log(e);
            }
        }
        findCourse();
        if (curCourse.title.toLowerCase().includes("graphic")) {
            setCurImg(graphic);
        }
        else if (curCourse.title.toLowerCase().includes("frontend")) {
            setCurImg(frontend);
        }
        else if (curCourse.title.toLowerCase().includes("php")) {
            setCurImg(php);
        }
        else if (curCourse.title.toLowerCase().includes("android")) {
            setCurImg(android);
        }
        else if (curCourse.title.toLowerCase().includes("ios")) {
            setCurImg(ios);
        }
        else if (curCourse.title.toLowerCase().includes("full stack")) {
            setCurImg(fullstack);
        }
    }, []);

    return (
        <div className="courseContainer">
            <h2 className="title">
                {curCourse.title}
            </h2>
            <div className="backgroundFont">
                <img loading="lazy" src={latesttrendswatermark} alt="" />
            </div>
            <div className="courseHighlight">
                <div className="subHighlight">
                    Course Duration : {curCourse.courseduration}
                </div>
                <div className="subHighlight">
                    Daily Time : {curCourse.dailytime}
                </div>
            </div>
            <div className="courseContent">
                <div className="left">
                    <div className="description">
                        {
                            curCourse.description.split("$").map((desc, index) => {
                                return (
                                    <p key={index}>
                                        {desc}
                                    </p>
                                )
                            })
                        }

                        <p>
                            Topics that you will learn in this Course :
                        </p>
                        <ul>
                            {
                                curCourse.topics.split(",").map((topic, index) =>
                                    <li key={index}>
                                        {topic}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                </div>
                <div className="right">
                    <div className="image">
                        <img src={curImg} alt="" />
                    </div>
                    <div className="priceContainer">
                        <p>
                            Price : {curCourse.price} /- Only
                        </p>
                    </div>
                </div>
            </div>
            <div className="batchDetails">
                {
                    curBatchs.length > 0 ?
                        <h2 className="batchTitle">
                            Pick Your Preferred Batch
                        </h2>
                        :
                        <h2 className="batchTitle">
                            Sorry, Currently Batches are not available
                        </h2>
                }
                <div className="batchContainer">
                    {
                        curBatchs.map((batch, index) =>
                            <div className="singleBatch" key={index}>
                                <p>
                                    {batch.name}
                                </p>
                                <button onClick={() => {
                                    if (batch.batchstatus === "Notify Me") {
                                        setUserSelectedBatch(batch);
                                        setUserSelectedCourse(curCourse);
                                        setNotifyMePopupActive(true);
                                    }
                                    else if (batch.batchstatus === "Enroll") {
                                        setUserSelectedBatch(batch);
                                        setUserSelectedCourse(curCourse);
                                        setCourseConfirmPopupActive(true)
                                    }
                                }
                                } className={batch.batchstatus === "Closed" ? "closed" : ""}>
                                    {batch.batchstatus}
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PlanService;