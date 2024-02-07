'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";



export default function Home() {


    const [announcement, setaAnnouncement] = useState([
        {
            id: 1,
            title: "INAUGURATION",
            description: "Join us on 23 January 2024, for the official Inaugural Ceremony of our Navaritih Forum scheduled to commence at 09:30 AM in Conference Hall 3, 2ND Floor, JAIN (Deemed-to-be University).",
            date: "23 January 2024"
        },
        {
            id: 2,
            title: "TEC TALK 1.0",
            description: "An event that will exemplify our dedication to exploring cutting-edge topics and emerging technologies. This seminar, scheduled for 23RD January 2024, from 10:30 AM onwards at Conference Hall 3, 2ND Floor, JAIN (Deemed-to-be University) will feature presentations delivering insightful findings and perspectives. We look forward to engaging discussions and innovative ideas at this event",
            date: "23 January 2024"
        },
        {
            id: 3,
            title: "IDEATHON",
            description: "Unleash your creativity at our inter college Ideothon event! Join us for a day filled with innovation on 8TH February 2024, where you can pitch your tech ideas and collaborate on inventing groundbreaking apps, software, or gadgets. The event kicks off at 09:30 AM at Conference Hall 2, Ground floor, JAIN (Deemed-to-be University), Jayanagar 9TH Block, Bangalore, Karnataka.",
            date: "8 February 2024"
        },
        {
            id: 4,
            title: "CRYPTOQUEST",
            description: "Introducing CryptoQuest, a dynamic 2-day event by our Cybersecurity Team! Day 1 features an exclusive session with a cybersecurity expert, immersive workshops, live demos, and networking. Day 2 brings a steganography contest to test cryptographic skills. Join us on 27TH & 28TH February 2024 at Conference Hall 3, 2ND Floor, JAIN (Deemed-to-be University), for an unforgettable experience where knowledge meets innovation",
            date: "20 & 21 February 2024"
        },
    ]
    )

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        color: 'black',
        background: "white",
        border: '1px solid black',
        borderRadius: '14px',
        paddingLeft: '6px'


    }






    return (

        //  {/* HERO SECTION*/}
        <div className='md:mt-20 sm:-mt-10 '>
            <section className=' h-[100vh] w-[100%] bg-cover pt-0 pr-20 flex flex-col items-start justify-center hero'>

                <div className=' ms:pl-20 sm:pl-2 '>
                    <hr className="w-4/5 h-1 mx-auto my-4 bg-white border-0 rounded md:my-1 sm:my-0 " />

                    <h4 className='md:text-[#2b3547] sm:text-[#1b212c] font-Baskervville pb-4 text-6xl sm:3xl text-center pt-20 '>Welcome To</h4>
                    <h2 className="md:text-[#2b3547] sm:text-[#1b212c]  font-Baskervville text-6xl sm:2xl text-center"> NAVARITIH </h2>
                    <p className='md:text-[#2b3547] sm:text-[#1b212c]  font-Baskervville py-3 md:text-3xl sm:text-3xl sm:font-bold md:font-bold text-center pb-20 sm:leading-normal tab:lead'>  Where Technology Ignites The World</p>
                    <hr className="w-4/5 h-1 mx-auto my-4 bg-white border-0 rounded md:my-1 " />

                </div>


            </section>


            {/* OVERVIEW */}
            <section className=' -mt-5 mb-10 Overview w-3/4 flex justify-center ml-[12%]  ' >
                <div className='h-2/4   bg-white w-[100%] rounded-3xl  m-2 ease-in-out '>
                    <div className='items-center flex-col text-center border-2 border-yellow-200 rounded-3xl p-2'>
                        <p className=' items-center justify-center font-Baskervville  font-bold text-3xl pb-2 text-[#02256B]'>Overview</p>
                        <p><span className='text-wrap text-center text-black'>At Jain (Deemed-to-be University), we recognize the importance of  fostering a dynamic and innovative
                            learning environment for our students. We believe that students should have the opportunity to
                            explore and follow their passion for  technology beyond the confines of their academic
                            curriculum. To this end, we propose the establishment of the forum Navaritih (Innovation)
                            a technical enthusiasts forum a platform for students to  come together, collaborate, and pursue
                            their technical interests beyond the classroom</span></p>

                    </div>
                </div>

            </section>
            <div className="divider pb-10 w-[40%] ml-[30%]" ></div>

            {/* OUR MOTIVE */}
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ease-in">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6 font-Baskervville font-semibold text-3xl  leading-none tracking-tight text-[#02256B] sm:text-4xl md:mx-auto">

                            Our Motive
                        </h2>
                        <p className="text-base text-gray-700 md:text-neutral">
                            The motive of Navaritih Forum is to create a vibrant community where diverse perspectives converge, meaningful dialogues flourish, and transformative solutions emerge. The forum is driven by the desire to inspire positive societal change by bridging gaps between academia and industry, promoting inclusivity, and embracing the belief that true progress stems from the synergy of diverse perspectives and experiences.
                        </p>
                    </div>
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-3">
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Promote Technical Exploration</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Encourage students to explore various domains of
                                    technology, including but not limited to software development, hardware design, artificial
                                    intelligence, cybersecurity, and more
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5"> Facilitate Knowledge Exchange</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Provide a platform for students to share knowledge, ideas,
                                    and experiences related to technology through workshops, seminars, and presentations.
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Hands-on Learning</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Organize practical workshops, hackathons, and projects that allow
                                    students to apply their technical skills and knowledge to real-world problems
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Networking Opportunities</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Foster a supportive community where students can connect
                                    with like-minded peers, faculty members, and industry professionals
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Career Development</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    Offer sessions on career opportunities in the tech industry, resume
                                    building, interview skills, and internships
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">An Environment to Thrive</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                    A balanced ratio of all fields within the technological
                                    world provided to the members of the forum through time-to-time research by the R&D
                                    department
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <div className="divider pt-10 -mb-10 w-[40%] ml-[30%]" ></div>

            {/* ANNOUNCEMENT */}

            <section id='top' className=' ml-10 mr-10   '>
                <div>

                    <h2 className="max-w-lg mb-6 font-Baskervville font-semibold text-3xl  text-center leading-none tracking-tight text-[#02256B] sm:text-4xl md:mx-auto">

                        Announcement
                    </h2>
                </div>

                <Carousel className='border-2 border-black rounded-xl bg-gray-200' autoPlay interval={5000} infiniteLoop showArrows showStatus={false} showThumbs={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                                <GoArrowLeft />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 20 }}>
                                <GoArrowRight />
                            </button>
                        )
                    }
                >

                    {announcement.map((announcement) => (


                        <div key="announcement.id" className=" mt-3  mb-10 md:h-[40vh] sm:h-auto items-center justify-center">
                            <p className='text-3xl text-center text-gray-500 font-Baskervville font-bold pb-2'>{announcement.title}</p>
                            <p className='text-l text-center text-gray-500'>{announcement.date}</p>

                            <p className="text-center p-20 ">{announcement.description}</p>
                        </div>


                    ))}


                </Carousel>




            </section>
            <div className="divider pb-5 w-[40%] ml-[30%]" ></div>

            {/* Our Collabration*/}
            <section className='hero  xl:h-[70vh]  h-auto w-[100%] bg-cover pb-5 mt-5  flex flex-col  items-center justify-around '>

                <div className='pt-4 pb-4'>
                    <p className='text-[#2b3547] text-4xl text-center font-Baskervville  font-bold'>Our Collabration</p>

                </div>
                <div className=' w-[100%]  h-auto grid gap-2 row-gap-2 sm:grid-cols-1 tab:grid-cols-3 sm:items-center '>
                    <div className='bg-white ml-20 xl:h-70 xl:w-70 h-60 w-60 sm:h-50 sm:w-50  rounded-full'>
                        <div className='border-2 border-black m-4 rounded-full'>

                            <img src="/Logo/V7KLOGO.png" alt="Image" className="w-[110%] h-[110%]  object-cover rounded-full " />

                        </div>
                    </div>
                    <div className='bg-white ml-20 xl:h-80 xl:w-80  h-60 w-60   sm:h-60 sm:w-60  rounded-full'>
                        <div className='border-2 border-black m-4 rounded-full'>

                            <img src="/Logo/HOD.png" alt="Image" className="w-full  object-cover rounded-full " />

                        </div>
                    </div>
                    <div className='bg-white ml-20 xl:h-70 xl:w-70 h-60 w-60 sm:h-50 sm:w-50  rounded-full'>
                        <div className='border-2 border-black m-4 rounded-full'>

                            <img src="/Logo/TOver.png" alt="Image" className="w-full  object-cover rounded-full " />

                        </div>
                    </div>


                </div>
            </section>

            {/* <div className="divider  w-[40%] ml-[30%]" ></div> */}

            {/* Our ACHIVEMENT*/}

            {/* <section className='  w-[100%] h-[70vh]  '>
                <p className='text-[#02256B] font-semibold text-3xl   font-Baskervville pb-3 text-center underline-offset-8'>Achivement</p>
                <div className='flex justify-center translate-x-10'>
                    <div className="blog-card">
                        <input type="radio" name="select" id="tap-1" checked />
                        <input type="radio" name="select" id="tap-2" />
                        <input type="radio" name="select" id="tap-3" />
                        <input type="checkbox" id="imgTap" />
                        <div className="sliders">
                            <label for="tap-1" className="tap tap-1"></label>
                            <label for="tap-2" className="tap tap-2"></label>
                            <label for="tap-3" className="tap tap-3"></label>
                        </div>
                        <div className="inner-part">
                            <label for="imgTap" className="img">
                                <img className="img-1" src="/Logo/TRANSPARENT_LOGO.png" />
                            </label>
                            <div className="content content-1">
                                <span>19 January 2024</span>
                                <div className="title">
                                    Programming Team
                                </div>
                                <div className="text-wrap font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!
                                </div>

                            </div>
                        </div>
                        <div className="inner-part">
                            <label for="imgTap" className="img">
                                <img className="img-2" src="logo2.png" />
                            </label>
                            <div className="content content-2">
                                <span>26 December 2024</span>
                                <div className="title">
                                    Forum
                                </div>
                                <div className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.
                                </div>
                                <button>Read more</button>
                            </div>
                        </div>
                        <div className="inner-part">
                            <label for="imgTap" className="img">
                                <img className="img-3" src="logo1.png" />
                            </label>
                            <div className="content content-3">
                                <span>26 January 2024</span>
                                <div className="title">
                                    Achievements
                                </div>
                                <div className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi nemo commodi sint eum ipsam odit atque aliquam officia impedit.
                                </div>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>


            </section> */}

            {/* Footer*/}


        </div>
    )
}
