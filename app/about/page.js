'use client'
import React, { useState } from "react"

export default function About() {
    const [gallery, setGallery] = useState([
        {
            id: 1,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 2,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
        },
        {
            id: 3,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 4,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 5,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 6,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 7,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 8,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 9,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        },
        {
            id: 10,
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
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
            content: "Navaritih welcomes all students from School of CS & IT who have a passion for technology, regardless of their academic major."
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
            content: "Yes, Navaritih strictly upholds a code of conduct to ensure a respectful and collaborative community among its members"
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
                        <p className="text-center text-wrap font-bold text-2xl font-Baskervville  text-[#303d52]">At Jain University, we recognize the importance of  fostering a dynamic and innovative
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
                            Navaritih forum is a platform that fosters a dynamic exchange of ideas, bridging the gap between academia and industry. Through conferences, seminars, and workshops, it promotes interdisciplinary approaches to address contemporary challenges. Navaritih aims to be a catalyst for positive societal change, promoting research, dialogue, and knowledge dissemination on a global scale. The forum&apos;s mission is to inspire innovation and foster collaborative ventures, fostering inclusivity and excellence.
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
                            <div key={e.id} className="carousel-item md:w-1/6 sm:w-1/2 mr-5  ">
                                <img src={e.img} className=" h-[90%] w-[90%] rounded-xl " alt="Drink" />
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
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        </div>
                    </div>
                </div>


            </section>

            <div className="divider md:mt-[930px] sm:mt-10  w-[40%] ml-[30%]" ></div>

            {/* FAQ SECTION */}
            <section className=" px-10 pb-5 ">
                <div  >

                    {/* <p className='font-bold font-mono text-xl text-center '></p> */}
                    <p className=' text-center font-Baskervville  font-bold text-4xl pb-2 text-[#02256B] underline mb-8'>Frequently Asked Questions</p>
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
