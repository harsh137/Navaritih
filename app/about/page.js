

export default function About() {
    return (

        // HERO SECTION
        <div className=" mt-20 " >

            <section >
                <div className='  flex md:flex-row sm:flex-col  justify-around items-center md:h-[80vh] sm:h-auto  w-full bg-[#b9c6da]'>
                    <div className="  md:px-5 sm:pt-10">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className=" md:size-96  " />
                    </div>
                    <div className=" md:w-1/2 md:h-1/2 sm:pb-20 sm:px-4   ">
                        <p className="md:text-[90px] sm:text-[75px] font-semibold text-[#ffa912] mb-2.5 text-center md:-mt-20">About Us</p>
                        <p className="text-center text-wrap   font-Poppins font-medium text-xl text-green-50">At Jain University, we recognize the importance of  fostering a dynamic and innovative
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
                <div className="flex md:flex-row sm:flex-col h-[54vh] w-full md:justify-around sm:justify-center items-center  pb-2 md:-mt-20 sm:mt-[50%]">
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

            <section className="w-full h-[90vh] mb-20 ">
                <p className=' text-center font-Baskervville  font-bold text-4xl md:pb-2  text-[#02256B] underline mb-4'>Gallery</p>


                <div className="w-[100%] h-[45vh]  = carousel rounded-box items-center ">

                    <div className="carousel-item md:w-1/5 sm:w-1/2 ">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className=" h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                </div>
                <div className="divider pb-0 w-[50%] ml-[25%]" ></div>


                <div className="w-[100%] h-[45vh]  carousel rounded-box items-center ">

                    <div className="carousel-item md:w-1/5 sm:w-1/2 ">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className=" h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                    <div className="carousel-item  md:w-1/5 sm:w-1/2">
                        <img src="/Logo/TRANSPARENT_LOGO.png" className="h-[90%] w-[90%] hover:h-[110%] hover:w-[110%] rounded-full border-2 border-black " alt="Drink" />
                    </div>
                </div>
            </section>

            <div className="divider py-10 w-[40%] ml-[30%]" ></div>

            {/* FAQ SECTION */}
            <section className="px-10">
                <div  >

                    {/* <p className='font-bold font-mono text-xl text-center '></p> */}
                    <p className=' text-center font-Baskervville  font-bold text-4xl pb-2 text-[#02256B] underline mb-8'>Frequently Asked Questions</p>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font-medium font-mono">
                        What is Navaritih?
                    </div>
                    <div className="collapse-content">
                        <p className="font-Baskervville">Navaritih is a student-led technical forum at Jain (Deemed-to-Be University) that aims to promote
                            exploration, innovation, and hands-on learning in various technology domains beyond the academic
                            curriculum.</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font- font-mono">
                        Who can join Navaritih?
                    </div>
                    <div className="collapse-content font-mono">
                        <p className="font-Baskervville" >Navaritih welcomes all students from School of CS & IT who have a passion for technology, regardless of
                            their academic major.</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font-medium font-mono">
                        What kind of activities happen at Navaritih?
                    </div>
                    <div className="collapse-content">
                        <p className="font-Baskervville">Navaritih hosts numerous events like technical workshops, coding bootcamps, hackathons, project
                            showcases, gaming events, guest lectures, and more throughout the academic year. There are also
                            specialized teams working on different projects.</p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font-medium font-mono">
                        Is there a selection process to join Navaritih?
                    </div>
                    <div className="collapse-content">
                        <p className="font-Baskervville">Yes, there is an interview process by the respective team leads to evaluate skills and interests before
                            selection.</p>
                    </div>
                </div>
                <div tabIndex={4} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font-medium font-mono">
                        Do I need to have prior experience with technology to join?
                    </div>
                    <div className="collapse-content">
                        <p className="font-Baskervville">You can join Navaritih even if you do not have any prior technical experience. The selection depends
                            more on your enthusiasm to explore technology than experience.</p>
                    </div>
                </div>
                <div tabIndex={5} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font-medium font-mono">
                        Does Navaritih enforce code of conduct for its members?
                    </div>
                    <div className="collapse-content">
                        <p className="font-Baskervville">Yes, Navaritih strictly upholds a code of conduct to ensure a respectful and collaborative community
                            among its members</p>
                    </div>
                </div>
                <div tabIndex={5} className="collapse collapse-plus border border-base-300   bg-[#faf7f5] hover:bg-[#f0f0ef]">
                    <div className="collapse-title text-xl font-medium font-mono">
                        Do Navaritih provide any letter upon joining the forum?
                    </div>
                    <div className="collapse-content">
                        <p className="font-Baskervville">Upon joining Navaritih, members receive a letter of appointment affirming their affiliation with the
                            forum</p>
                    </div>
                </div>
            </section>
        </div >
    )
}
