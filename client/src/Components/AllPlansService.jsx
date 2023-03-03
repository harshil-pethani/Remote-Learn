import React, { useContext } from 'react';
import { planContext } from '../App';
import PlanService from './PlanService';


const AllPlansService = ({ setCourseConfirmPopupActive, setNotifyMePopupActive }) => {
    const { allCourses } = useContext(planContext);


    const allCourses2 = [
        {
            title: "GRAPHIC DESIGNING",
            duration: "2 Months",
            dailytime: "2 Hours",
            description: [
                "Graphic design is all around us, in a myriad of forms, both on screen and in print, yet it is always made up of images and words to create a communication goal. This four-course sequence exposes students to the fundamental skills required to make sophisticated graphic design: process, historical context, and communication through image-making and typography.",
                "Graphic design is the art or profession of visual communication that combines images, words, and ideas to convey information to an audience, especially to produce a specific effect. In other words, graphic design is communication design; It’s a way of conveying ideas through visuals and design."
            ],
            topics: [
                "Introduction to graphic design",
                "Difference between raster & Vector",
                "Text Content in Graphics",
                "Logo Design",
                "Icon Design",
                "Laser Cutting Design",
                "Rules & Sizing of Graphics",
                "Photo Editing",
                "Product Design for advertising",
                "Branding"
            ],
            price: 20000,
            batches: [
                {
                    name: "November 2022 Batch",
                    status: "Closed"
                },
                {
                    name: "January 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "March 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "May 2023 Batch",
                    status: "Notify Me"
                }
            ]
        },
        {
            title: "FRONTEND DEVELOPMENT",
            duration: "4 Months",
            dailytime: "2 Hours",
            description: [
                "Web Development course how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript. Mastering this range of technologies will allow you to develop high quality web sites that, work seamlessly on mobile, tablet, and large screen browsers accessible. During the capstone you will develop a professional-quality web portfolio demonstrating your growth as a web developer and your knowledge of accessible web design.",
                "This will include your ability to design and implement a responsive site that utilizes tools to create a site that is accessible to a wide audience, including those with visual, audial, physical, and cognitive impairments."
            ],
            topics: [
                "Photo-shop",
                "Illustrator",
                "HTML",
                "CSS",
                "Media Quieres",
                "SASS and LESS",
                "Bootstrape",
                "Live Project"
            ],
            price: 40000,
            batches: [
                {
                    name: "November 2022 Batch",
                    status: "Closed"
                },
                {
                    name: "January 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "March 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "May 2023 Batch",
                    status: "Notify Me"
                }
            ]
        },
        {
            title: "PHP WITH LARAVEL",
            duration: "6 Months",
            dailytime: "2 Hours",
            description: [
                "As digital literacy increases and everything goes on online from food delivery to shopping goes online, thereby increasing the need for web developers. Web developers build interactive websites for different businesses hence allowing the organizations to offer their services at a global level.",
                "Web development is everything involved in the creation of a website. Typically it refers to the coding and programming side of web site production as opposed to the web design side. It encompasses everything from a simple page of HTML text to complex, feature-rich applications designed to be accessed from various Internet-connected devices."
            ],
            topics: [
                "Evaluation of PHP",
                "Laravel Framework",
                "Cookies & Sessions",
                "Control Structure",
                "Validations and filters",
                "Database connectivity",
                "SMS & Email API",
                "Admin Panel with PHP",
                "JavaScript",
                "Ajax "
            ],
            price: 50000,
            batches: [
                {
                    name: "November 2022 Batch",
                    status: "Closed"
                },
                {
                    name: "January 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "March 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "May 2023 Batch",
                    status: "Notify Me"
                }
            ]
        },
        {
            title: "ANDROID DEVELOPMENT",
            duration: "12 Months",
            dailytime: "2 Hours",
            description: [
                "Android is an open-source, customizable mobile operating system created by Google for use on touchscreen devices. It’s the most popular operating system in use today. While mainly installed on smartphones, it is also in use on other smart devices such as TVs and watches.",
                "Android experts enjoy strong competition and really secure employment at fair salaries. Android live project training in Surat is currently considered a default choice for mobile devices, and hundreds of Android applications are introduced to the Google Play Store every day. Top smartphone vendors play smart to stay up to date with their goods and services, which has boosted competition for major mobile device developers."
            ],
            topics: [
                "Activity life cycle & Widgets",
                "Layout & views",
                "Event / Data handling",
                "Styles & themes",
                "Ajax / Data Storage",
                "Web services & web view",
                "Push notifications",
                "Social Login Integration",
                "Publishing app in Google play",
            ],
            price: 60000,
            batches: [
                {
                    name: "November 2022 Batch",
                    status: "Closed"
                },
                {
                    name: "January 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "March 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "May 2023 Batch",
                    status: "Notify Me"
                }
            ]
        },
        {
            title: "IOS DEVELOPMENT",
            duration: "12 Months",
            dailytime: "2 Hours",
            description: [
                "Flutter is an open-source mobile application development framework created by Google. It is used to develop applications for Android and iOS devices.",
                "You will start by learning the basics of iOS app development using the Swift programming language and Xcode, Apple's development environment. You'll develop your first iOS apps using layouts, views, UI-Kit, and more. Then, you’ll progress to build more complex and advanced applications, using networking, and Apple’s Grand Central Dispatch and Core Data, and will be ready to publish your capstone project to the App Store."
            ],
            topics: [
                "Working with dart languages",
                "Deal with database",
                "Validations, Exception & errors",
                "Interact with gestures",
                "Routing logic",
                "Theme Customization",
                "Accessing system applications",
                "Platform specific coding",
                "Deal with API",
                "Publishing app",
            ],
            price: 75000,
            batches: [
                {
                    name: "November 2022 Batch",
                    status: "Closed"
                },
                {
                    name: "January 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "March 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "May 2023 Batch",
                    status: "Notify Me"
                }
            ]
        },
        {
            title: "FULL STACK DEVELOPMENT",
            duration: "12 Months",
            dailytime: "2 Hours",
            description: [
                "As digital literacy increases and everything goes on online from food delivery to shopping goes online, thereby increasing the need for web developers. Web developers build interactive websites for different businesses hence allowing the organizations to offer their services at a global level. It makes perfect sense that one can learn how to build websites entirely online."
            ],
            topics: [
                "HTML, CSS & JavaScript",
                "Advanced JavaScript Topics",
                "Introduction to ReactJs",
                "Hooks, State Management",
                "Redux",
                "Introduction to NodeJs",
                "Making API with NodeJs & ExpressJs",
                "Introduction to MongoDb",
                "MongoDb Queries",
                "Connecting MongoDb with NodeJs",
                "Connecting Frontend and Backend Application",
                "Create Complete full Stack Project",
                "Host Project on the Cloud"
            ],
            price: 80000,
            batches: [
                {
                    name: "November 2022 Batch",
                    status: "Closed"
                },
                {
                    name: "January 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "March 2023 Batch",
                    status: "Enroll"
                },
                {
                    name: "May 2023 Batch",
                    status: "Notify Me"
                }
            ]
        },
    ]

    return (
        <div className="allplans">
            {
                allCourses.length > 0 &&
                allCourses?.map((courseDetail, index) => {
                    return (
                        <PlanService
                            setCourseConfirmPopupActive={setCourseConfirmPopupActive}
                            setNotifyMePopupActive={setNotifyMePopupActive}
                            key={index}
                            courseIndex={index}
                            curCourse={courseDetail}
                        />
                    )
                })
            }
        </div>
    )
}

export default AllPlansService;