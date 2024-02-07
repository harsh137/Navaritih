"use client"
import React, { useState } from "react"
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { GoArrowRight, GoArrowLeft } from "react-icons/go";
// import NextButton from './NextButton'
// import PrevButton from './PrevButton'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Page = () => {


  const Developers = [
    {
      id: 1,
      name: 'Harsh Gupta',
      role: 'Full Stack Developer',
      imageUrl: '/developer/Harsh.jpg',
      github:'https://github.com/harsh137/',
      linkedIn:"https://www.linkedin.com/in/harsh-gupta137/",
      Instagram:"https://www.instagram.com/harshgupta137/",

    },
    {
      id: 2,
      name: 'Chandu Nagesh ',
      role: 'Backend Developer',
      imageUrl: '/Js_Ajs/PROGRAMMING/Chandu.N.jpg',
      github:'https://github.com/Chandu5777',
      linkedIn:"https://www.linkedin.com/in/chandu-nagesh-793b21260/",
      Instagram:"https://www.instagram.com/_artistic_mdz_/"

    },
    {
      id: 3,
      name: 'Aashir Zayd',
      role: 'Full Stack Developer',
      imageUrl: '/developer/Ashir.jpg',
      github:'',
      linkedIn:"https://www.linkedin.com/in/aashir-zayd-b28136275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram:""

    }
  ]
  // const people = [


  //   {
  //     name: 'Leslie Alexander',
  //     role: 'Co-Founder / CEO',
  //     imageUrl:
  //       'facepad=2&w=256&h=256&q=80',
  //   },
  //   {
  //     name: 'Leslie Alexander',
  //     role: 'Co-Founder / CEO',
  //     imageUrl:
  //       'facepad=2&w=256&h=256&q=80',
  //   },
  //   {
  //     name: 'Leslie Alexander',
  //     role: 'Co-Founder / CEO',
  //     imageUrl:
  //       'facepad=2&w=256&h=256&q=80',
  //   },
  //   {
  //     name: 'Leslie Alexander',
  //     role: 'Co-Founder / CEO',
  //     imageUrl:
  //       'facepad=2&w=256&h=256&q=80',
  //   },
  // ]
  const TopManagement = [
    {
      name: 'Yeshwanth M S',
      role: 'President',
      imageUrl:
        '/President/Yeshwant.jpg',

    },
    {
      name: 'Divya Rishabh',
      role: 'Secretary',
      imageUrl:
        '/secretary/Rishab.jpg',

    }

  ]
  const ProgrammingTeam = [
    {
      id: 1,
      name: 'Chandu.N',
      role: 'Associate Joint Secretary',
      imageUrl:
        '/Js_Ajs/PROGRAMMING/Chandu.N.jpg',

    },
    //  {
    //   id:2,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:
    //     '',

    // },

  ]
  const DesignTeam = [
    {
      id: 1,
      name: "Alina Anjum.",
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Design Team/Alina Anjum.jpg'
    },
    // {
    //   id:2,
    //   name: "Harsh",
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // },
    // {
    //   id:3,
    //   name: "Harsh",
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const Cinematography = [
    {
      id: 1,
      name: 'Yashas G S',
      role: 'Joint Secretary',
      imageUrl: 'Js_Ajs/Cinematography/Yashas G S (JS).jpg'
    },
    // {
    //   id:2,
    //   name: 'Somya Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // },
    // {
    //   id:3,
    //   name: 'Somya Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];

  const GammingTeam = [
    {
      id: 1,
      name: 'Hemanth M Magaji',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Gaming/Hemanth M Magaji (AJS).jpg'
    },
    // {
    //   id:2,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const PublicRealtion = [
    {
      id: 1,
      name: 'Adithy B Rajesh',
      role: 'Joint Secretary',
      imageUrl: 'Js_Ajs/Public Relations/Adithy B Rajesh (JS).jpg'
    },
    {
      id: 2,
      name: 'Sanya Mustaq',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Public Relations/Sanya Mustaq (AJS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const PhotographyTeam = [
    {
      id: 1,
      name: 'Harshith M Patel',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Photography/Harshith M Patel (AJS).jpg'
    },
    {
      id: 2,
      name: 'Sayan Das',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/Photography/Sayan Das (JS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const PixelCrew = [
    {
      id: 1,
      name: 'Vrushank C K',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/Pixel Crew/Vrushank C K (JS).jpg'
    },
    // {
    //   id:2,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const CyberSecurity = [
    {
      id: 1,
      name: 'Raman Gautam',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/Cybersecurity/Raman Gautam (JS).jpg'
    },
    {
      id: 2,
      name: 'Thamanna A K',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Cybersecurity/Thamanna A K (AJS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const RDTeam = [
    {
      id: 1,
      name: 'Arvind Kumar V',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Research and Development/Arvind Kumar V (AJS).jpg'
    },
    {
      id: 2,
      name: 'Kaivaniya R Bhandari',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/Research and Development/Kaivaniya R Bhandari (JS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ];
  const CloudComputing = [
    {
      id: 1,
      name: 'N Nikitha',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/CloudComputing/N Nikitha (AJS).jpg'
    },
    {
      id: 2,
      name: 'Rishab N S',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/CloudComputing/Rishab N S (JS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ]
  const DataAnalytics = [
    {
      id: 1,
      name: 'Priyanshu Tripathi',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Data Analytics/Priyanshu Tripathi (AJS).jpg'
    },
    {
      id: 2,
      name: 'Saifuddin Totanwala',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/Data Analytics/Saifuddin Totanwala (JS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ]
  const DocumentationTeam = [
    {
      id: 1,
      name: 'Muizz Ur Rehman ',
      role: 'Joint Secretary',
      imageUrl: '/Js_Ajs/Documentation/Muizz Ur Rehman (JS).jpg'
    },
    {
      id: 2,
      name: 'Shriya C. Nair',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/Documentation/Shriya C. Nair (AJS).jpg'
    },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ]
  const ITH_IOT = [
    {
      id: 1,
      name: 'Kalpitha S',
      role: 'Associate Joint Secretary',
      imageUrl: '/Js_Ajs/ITH & IOT/Kalpitha S (AJS).jpg'
    },
    // {
    //   id:2,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // },
    // {
    //   id:3,
    //   name: 'Leslie Alexander',
    //   role: 'Co-Founder / CEO',
    //   imageUrl:''
    // }
  ]
  const EventManagement = [{
    id: 1,
    name: 'Tanya A Singh ',
    role: 'Joint Secretary',
    imageUrl: '/Js_Ajs/Event Management/Tanya A Singh (JS).jpg'
  }]


  const settings = {
    swipeToSlide: true,

    draggable: false,
    accessibility: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    lazyLoad: false,
    dots: true,
    variableWidth: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    infinite: false,
    touchMove: true,
    centerMode: true,
    variableWidth: false,
    infinite: true,

    appendDots: appendDots,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          // slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          variableWidth: true,
          infinite: true,
          dots: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          // slidesToScroll: 1
        }
      }
    ],
    //   afterChange: function (index) {
    //     console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //     );
    // }
  };

  function appendDots(dots) {
    return (
      <div>
        <ul className="m-1"> {dots} </ul>
      </div>
    );
  }

  const TeamSetting = {
    draggable: true,
    accessibility: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    lazyLoad: true,
    dots: false,
    variableWidth: false,
    FocusOnSelect: true,
    adaptiveHeight: false,
    focusOnSelect: true,
    infinite: false,
    touchMove: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          // slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {

          dots: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          // slidesToScroll: 1
        }
      }
    ],
  }

  // const TeamSlider = ({ teamData }) => {
  //   return (
  //     <Slider  {...TeamSetting } className=" rounded-xl md:w-[90%] sm:w-[80%] md:px-2 sm:py-3 md:py-2    " >
  //       {teamData.map((e) => (
  //         <div key={e.id} className="w-full  p-4 md:w-1/2 lg:w-1/3 flex flex-row justify-around">
  //         <div className="flex items-center h-full md:p-8 sm:p-4 bg-gray-800 dark:bg-gray-800 rounded-xl">
  //           <img className="object-fill w-24 h-24 rounded-sm" src={e.imageUrl} alt="" />
  //           <div className="mx-4">
  //             <h2 className="text-lg font-semibold text-white capitalize">{e.name}</h2>
  //             <span className="text-sm font-medium text-white capitalize">{e.role}</span>
  //             <div className="flex flex-row justify-center pt-3">
  //               <a href="#" className="mx-2 text-white  hover:text-gray-500  group-hover:text-white" aria-label="Reddit">
  //                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
  //                   xmlns="http://www.w3.org/2000/svg">
  //                   <path
  //                     d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
  //                   </path>
  //                 </svg>
  //               </a>
  //               <a href="#" className="mx-2 text-blue-700  hover:text-gray-500  group-hover:text-white" aria-label="Facebook">
  //                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
  //                   xmlns="http://www.w3.org/2000/svg">
  //                   <path
  //                     d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
  //                   </path>
  //                 </svg>
  //               </a>
  //               <a href="#" className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Github">
  //                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
  //                   xmlns="http://www.w3.org/2000/svg">
  //                   <path
  //                     d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
  //                   </path>
  //                 </svg>
  //               </a>
  //             </div>

  //           </div>
  //         </div>
  //       </div>
  //       ))}
  //     </Slider>
  //   );
  // };
  const TeamDiv = ({ teamData }) => {
    return (
      <div className=" rounded-xl md:w-[90%] sm:w-3/4 md:px-2 sm:py-3 md:py-2  flex md:flex-row  justify-center items-center flex-wrap    " >
        {teamData.map((e) => (
          <div key={e.id} className="w-full  p-4 md:w-1/2 lg:w-1/3 flex flex-row justify-around">
            <div className="flex items-center h-full md:p-8 sm:p-4 bg-gray-800 dark:bg-gray-800 rounded-xl">
              <img className="object-fill w-24 h-24 rounded-sm" src={e.imageUrl} alt="" />
              <div className="mx-4">
                <h2 className="text-lg pb-1 font-semibold text-white capitalize">{e.name}</h2>
                <span className="text-sm font-medium text-white capitalize"><span className="font-semibold">Role: </span>{e.role}</span>
                <div className="flex flex-row justify-center pt-3">
                  <a href="" className="mx-2 mt-1 text-blue-700  hover:text-gray-500  group-hover:text-white" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a href="#" className="mx-2 mt-1 text-white  hover:text-gray-500  group-hover:text-white" aria-label="Inatagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>

                  </a>

                  <a href="#" className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Github">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                      </path>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))
        }
      </div >
    );
  };
  const getTeamData = (department) => {
    switch (department) {
      case 'Programming Team':
        return ProgrammingTeam;
      case 'Design Team':
        return DesignTeam;
      case 'Cinematography':
        return Cinematography;
      case 'Gaming Team':
        return GammingTeam;
      case 'Public Relations':
        return PublicRealtion;
      case 'Photography Team':
        return PhotographyTeam;
      case 'Pixel Crew':
        return PixelCrew;
      case 'Cyber Security':
        return CyberSecurity;
      case 'R&D Team':
        return RDTeam;
      case 'Cloud Computing':
        return CloudComputing;
      case 'Data Analytics':
        return DataAnalytics;
      case 'Documentation Team':
        return DocumentationTeam;
      case 'ITH & IOT':
        return ITH_IOT;
      case 'Event Management':
        return EventManagement;
      default:
        return [];
    }
  };




  const Department = ["Programming Team", "Design Team", "Cinematography", "Gaming Team", "Public Relations", "Photography Team", "Pixel Crew", "Cyber Security", "R&D Team", "Cloud Computing", "Data Analytics", "Documentation Team", "Event Management", "ITH & IOT",]
  const [selectedepartment, setSelectedepartment] = useState("Programming Team");

  const teamData = getTeamData(selectedepartment);


  // const arrowStyles = {
  //   position: 'absolute',
  //   zIndex: 2,
  //   top: 'calc(50% - 16px )',
  //   width: 30,
  //   height: 30,
  //   cursor: 'pointer',
  //   color: 'black',
  //   background: "white",
  //   border: '1px solid black',
  //   borderRadius: '14px',
  //   paddingLeft: '6px'


  // }
  return (
    <div className="mt-20 bg-gray-900" >

      {/* HERO SECTION */}
      <section title="Founder" className="h-auto   pt-16" >
        <h2 className="text-center font-Protest   font-bold text-5xl border-spacing-1 md:pb-2  text-white   mb-4 ">Founder's Foreword</h2>
        <div className="flex md:flex-row sm:flex-col   items-center p-4 sm:p-6  dark:border-gray-700 ">
          <img className="object-cover w-1/3 rounded-xl aspect-square sm:size-72 mb-4" src="/Founder/Sanjeev Sir.jpg" alt="" />
          <div className="md:ml-10 sm:ml-0 sm:mb-10 w-full border rounded-lg border-white  p-5">  
            <h1 className="mt-4 text-2xl  font-semibold text-white  font-Baskervville  text-center ">Dr. Sanjeev Kumar Mandal</h1>

            <p className="mt-2 text-center text-white capitalize text-wrap sm:text-clip    ">
            &ldquo;Navaritih at Jain (Deemed-To-Be University) , where the essence of innovation finds its home . As a student- led forum , Navaritih embodies the spirit of exploration and progress , all while carrying the profound meaning of “Innovation “ in Sanskrit . Our motive is to provide researchers and innovators a nurturing environment for them to exchange ideas, discovering new technologies and embark on practical projects. Our student council  possessing a relentless spark , have united their talents to ignite a brighter future.&ldquo; <br /><br /><sanp className="text-lg font-Poppins">&ldquo;I welcome you all to be a part of this exciting journey where technology ignites the world.&ldquo;</sanp>
            </p>

            <div className="flex justify-center mt-3 -mx-2">
              <a href="#" className="mx-2 mt-1 text-white  hover:text-blue-500  group-hover:text-white" aria-label="LinkrdIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>

              <a href="#" className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Github">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
          <div>

          </div>



        </div>

      </section>
      {/* <div className="divider  pb-5 w-[40%] ml-[30%]" ></div> */}


      {/* TOP MANAGEMENT */}

      <section className="bg-gray-900">
        <div className="container px-6 py-4 mx-auto">
          <h2 className="text-center font-Baskervville  font-bold text-4xl   text-white  mb-20">Top Management</h2>

          <div className="md:pl-[19%] sm:pl-0 grid gap-8 self-center mt-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  ">


            {TopManagement.map((e) => (
              <div key={e.name} className=" max-w-xs text-center pb-20 ">
                <img className=" object-fill  size-72 mx-auto rounded-lg" src={e.imageUrl} alt="avatar" />

                <div className="mt-4">
                  <h3 className="text-xl font-medium   text-white ">{e.name}</h3>
                  <span className="mt-1 text-2xl font-medium text-white font-Roboto ">{e.role} Of Navaritih</span>
                  <div className="flex flex-row justify-center">
                    <a href="#" className="mx-2 mt-1 text-white  hover:text-gray-500  group-hover:text-white" aria-label="linkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                    <a href="#" className="mx-2 text-blue-700  hover:text-gray-500  group-hover:text-white" aria-label="Instagram">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                      </svg>
                    </a>
                    <a href="#" className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Github">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            )
            )}
          </div>
        </div>
      </section>

      {/* DEVELOPER SECTION */}
      <section>
        <div className="container px-6 py-4 mx-auto">
          <h2 className="text-center font-Baskervville  font-bold text-4xl md:pb-2  text-white  mb-20">Proud Developers</h2>
          <div className="flex flex-wrap -mx-4 -mt-8">
            {Developers.map((e) => (
              <div key={e.id} className="w-full  p-4 md:w-1/2 lg:w-1/3 flex flex-row justify-around">
                <div className="flex items-center h-full p-8 bg-gray-800 dark:bg-gray-800 rounded-xl">
                  <img className="object-cover w-24 h-24 rounded-lg" src={e.imageUrl} alt="" />
                  <div className="mx-4">
                    <h2 className="text-lg font-semibold text-white capitalize">{e.name}</h2>
                    <span className="text-sm font-medium text-white capitalize">{e.role}</span>
                    <div className="flex flex-row justify-center pt-3">
                      <a href={e.linkedIn}  target='_blank' className="mx-2 mt-1 text-white  hover:text-blue-500  group-hover:text-white" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                      <a href={e.Instagram} target='_blank'  className="mx-2 mt-1 text-blue-700  hover:text-gray-500  group-hover:text-white" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </a>
                      <a href={e.github} target='_blank'  className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Github">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                          </path>
                        </svg>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            )
            )}


          </div>
        </div>



      </section>

      {/* <div className="divider bg- pb-10 w-[40%] ml-[30%]" ></div> */}

      {/* OUT TEAM */}

      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto flex flex-col justify-center items-center  ">
          <h1 className="text-center font-Baskervville   font-bold text-4xl md:pb-2  text-white  mb-4 "> Our Council</h1>

          <p className="max-w-2xl mx-auto mb-2 text-xl text-center text-gray-500 dark:text-gray-300">
            Our Council Consist of Multiple Department.
          </p>


          <Slider  {...settings} className="border-2   border-white rounded-xl md:w-1/2 sm:w-[90%]  sm:py-2 md:py-2    ">
            {
              Department.map((e) => (
                <div className=" p-2" key={e}>
                  <button className={` py-4 text-sm font-medium text-white  hover:bg-blue-700 ${selectedepartment === e ? "bg-blue-400 " : "bg-blue-600 "} sm:w-full  rounded-xl pr-5 pl-5 ${selectedepartment === e ? 'selected' : ''}`}
                    onClick={() => setSelectedepartment(e)} >{e}</button>
                </div>


              ))
            }

          </Slider>
        </div>
        <section className="pb-10">

          <div className="w-[100%] flex flex-col justify-center items-center" >
            <h2 className="text-3xl  text-white mt-0 mb-3 font-Baskervville">{selectedepartment}</h2>
            {/* <TeamSlider teamData={teamData} /> */}

            <TeamDiv teamData={teamData} />


          </div>
        </section>







      </section>
    </div>
  )
}
export default Page;
