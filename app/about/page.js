'use client'
import React, { useState } from "react"

export default function About() {
    const [gallery, setGallery] = useState([
        {
            id: 1,
            img: "/gallery/_MG_5507.1.jpg"
        },
        {
            id: 2,
            img: "/gallery/_MG_5529.jpg"
        },
        {
            id: 3,
            img: "/gallery/_MG_5558.jpg"
        },
        {
            id: 4,
            img: "/gallery/_MG_5599.jpg"
        },
        {
            id: 5,
            img: "/gallery/_MG_5615.jpg"
        },
        {
            id: 6,
            img: "/gallery/_MG_5617.jpg"
        },
        {
            id: 7,
            img: "/gallery/_MG_5627.jpg"
        },
        {
            id: 8,
            img: "/gallery/_MG_5642.jpg"
        },
        {
            id: 9,
            img: "/gallery/_MG_5649.jpg"
        },
        {
            id: 10,
            img: "/gallery/_MG_5654.jpg"
        },

        

    ])
    const FAQ = [
        {
            id: 1,
            title: 'What is Navaritih?',
            content: "Navaritih is a student-led technical forum at Jain (Deemed-to-Be University) that aims to promote exploration, innovation, and hands-on learning in various technology domains beyond the academic curriculum."

        },
        {
            id: 2,
            title: 'Who can join Navaritih?',
            content: "Navaritih welcomes all students who have a passion for technology, regardless of their academic major."
        },
        {
            id: 3,
            title: ' What kind of activities happen at Navaritih?',
            content: 'Navaritih hosts numerous events like technical workshops, coding bootcamps, hackathons, project showcases, gaming events, guest lectures, and more throughout the academic year. There are also specialized teams working on different projects.'
        },
        {
            id: 4,
            title: 'Is there a selection process to join Navaritih?',
            content: "Yes, there is an interview process by the respective team leads to evaluate skills and interests before selection"
        },
        {
            id: 5,
            title: ' Do I need to have prior experience with technology to join?',
            content: "Yes, Navaritih strictly upholds a code of conduct to ensure a respectful and collaborative community among its members"
        },
        {
            id: 6,
            title: '  Does Navaritih enforce code of conduct for its members?',
            content: "Upon joining Navaritih, members receive a letter of appointment affirming their affiliation with the forum."
        },
        {
            id: 7,
            title: 'Do Navaritih provide any letter upon joining the forum?',
            content: "Upon joining Navaritih, members receive a letter of appointment affirming their affiliation with the forum"
        },


    ]
    return (

        // HERO SECTION
        <div className=" mt-20 " >

            <section >
                <div className='  flex md:flex-row sm:flex-col  justify-around items-center md:h-[80vh] sm:h-auto  w-full bg-[#b9c6da]'>
                    <div className="  md:px-5 sm:pt-10">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className=" md:size-96 md:pb-10  " />
                    </div>
                    <div className=" md:w-1/2 md:h-1/2 sm:pb-20 sm:px-4   ">
                        <p className="md:text-[90px] sm:text-[75px] font-semibold text-[#243e68] mb-2.5 font-Protest text-center md:-mt-20">About Us</p>
                        <p className="text-center text-wrap font-bold text-2xl font-Baskervville  text-[#303d52]">At Jain (Deemed-to-be University), we recognize the importance of  fostering a dynamic and innovative
                            learning environment for our students. We believe that students should have the opportunity to
                            explore and follow their passion for  technology beyond the confines of their academic
                            curriculum. To this end, we propose the establishment of the forum Navaritih (Innovation)
                            a technical enthusiasts forum a platform for students to  come together, collaborate, and pursue
                            their technical interests beyond the classroom</p>
                    </div>

                </div>
            </section>


            {/* Misson ANd Vision */}
            <section className=" md:mb-2 sm:mb-72">
                <div className="flex md:flex-row sm:flex-col  h-[54vh] w-full md:justify-around sm:justify-center items-center  pb-2 md:-mt-20 sm:mt-60">
                    <div className="h-auto  md:w-[25%] sm:w-[80%] flex-col  border-2 border-black px-4 py-4 text-ellipsis  mission ">
                        <p className="text-center text-3xl font-semibold ">Mission</p>
                        <p className="text-wrap text-center font-Roboto text-ellipsis ">
                            Navaritih forum is a dynamic platform that fosters intellectual exploration, collaboration, and innovation across diverse fields. It aims to create a vibrant community where researchers, scholars, and experts from various disciplines come together to engage in meaningful dialogue and contribute to society&apos;s progress. Through organizing events, conferences, and seminars, Navaritih facilitates the dissemination of cutting-edge research, sparks interdisciplinary conversations, and inspires transformative solutions to global challenges.
                        </p>



                    </div>

                    <div className="divider md:divider-horizontal sm: divider-ve md:mb-24 md:mt-10 ">AND</div>
                    <div className="h-auto  md:w-[25%] sm:w-[80%] flex-col  border-2 border-black px-4 py-4 text-ellipsis  mission ">
                        <p className="text-center text-3xl font-semibold ">Vision</p>
                        <p className="text-wrap text-center font-Roboto text-ellipsis ">
                            Navaritih forum is a platform that fosters a dynamic exchange of ideas, bridging the gap between academia and industry. Through conferences, seminars, and workshops, it promotes interdisciplinary approaches to address contemporary challenges. Navaritih aims to be a catalyst for positive societal change, promoting research, dialogue, and knowledge dissemination on a global scale.
                        </p>



                    </div>




                </div>
            </section>
            <div className="divider pb-10 w-[40%] ml-[30%]" ></div>

            {/* Gallery*/}

            <section className="w-full md:h-[90vh] sm:h-auto mb-96 sm:mb-5 ">
                <p className=' text-center font-Baskervville  font-bold md:text-5xl sm:text-4xl md:pb-2  text-[#02256B] underline mb-4'>Gallery</p>


                <div className="w-[100%] md:h-[45vh]    carousel border-2 border-black p-4 rounded-box items-center ">

                    {
                        gallery.map((e) =>
                            <div key={e.id} className="carousel-item md:w-1/6 sm:w-1/2 mr-5 object-fit  ">
                                <img src={e.img} className=" size-72 rounded-xl " alt="Drink" />
                            </div>
                        )}

                </div>
                


                {/* <div className="w-[100%] md:h-[45vh]  carousel rounded-box items-center ">

                    {
                        gallery.map((e) =>
                            <div className="carousel-item md:w-1/5 sm:w-1/2 mr-5 ">
                                <img src="/Logo/TRANSPARENT_LOGO.png" className=" h-[90%] w-[90%] " alt="Drink" />
                            </div>
                        )}
                </div> */}



                <div className="  m-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4 w-full">
                        <div >
                            <img className=" max-w-full rounded-lg w-[110%] h-full" src="/gallery/_MG_5666.jpg" alt=""/>
                        </div>
                        <div>
                            <img className=" max-w-full rounded-lg h-[100%]" src="/gallery/_MG_5673.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/gallery/DSC_0044.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="max-w-full rounded-lg w-[110%] h-[110%]" src="/gallery/_MG_5681.jpg" alt=""/>
                        </div>
                        <div>
                            <img className=" max-w-full rounded-lg md:mt-8 sm:mt-3 w-[110%] h-[90%]" src="/gallery/DSC_0056.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-[full] max-w-full rounded-lg sm:-mt-5" src="/gallery/IMG_2278.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-[95%] max-w-full rounded-lg " src="/gallery/DSC_0142.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-[110%] max-w-full rounded-lg md:-mt-5" src="/gallery/IMG_2170.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg  " src="/gallery/_MG_5702.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-[110%] max-w-full rounded-lg" src="/gallery/IMG_2704.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-[110%] max-w-full rounded-lg md:mt-8 sm:mt-5" src=" /gallery/IMG_2685.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg md:mt-20 sm:mt-10 " src="/gallery/IMG_2721.jpg" alt=""/>
                        </div>
                    </div>
                </div>


            </section>

            <div className="divider md:mt-[930px] sm:mt-10  w-[40%] ml-[30%]" ></div>

            {/* FAQ SECTION */}
            <section className=" px-5 pb-5 ">
                <div  >

                    {/* <p className='font-bold font-mono text-xl text-center '></p> */}
                    <p className=' text-center font-Baskervville  font-bold text-4xl pb-2 text-[#02256B] mb-8'>Frequently Asked Questions</p>
                </div>
                {
                    FAQ.map((e) =>
                        <div key={e.id} tabIndex={e.id} className="collapse collapse-plus border border-base-300 mb-1   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                            <div className="collapse-title text-xl font-medium font-mono">
                                {e.title}
                            </div>
                            <div className="collapse-content">
                                <p className="font-Baskervville">{e.content}.</p>
                            </div>
                        </div>
                    )
                }


            </section>
        </div >
    )
}
