import React from 'react'
import lectureHall from "../../assets/lecture-hall.jpg"
import freestyle from "../../assets/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking 2 (2).png";
import conversation from "../../assets/homepage-fact-value 1.png"
import { Link } from 'react-router-dom'

function CourcesGallery() {
  return (

  
          <div className='flex justify-between  mt-32 ml-[300px]  mr-[300px] mb-32 gap-36'>{/*container gallery */}

          <Link to={"/master-degrees/mba-management"}>
            <div className='flex flex-col w-[330px] h-[324px]'>{/*Image div*/}
              <img src={freestyle} className="h-[264px] w-[330px]" alt=""/>
              <p className='bg-[#007FFF] w-[330px] flex items-center justify-center h-[68px] font-catamaran font-[800] text-[18px] text-white'>Bachelor’s Degrees</p>
            </div>
          </Link>

          <Link to={"/master-degrees/mba-bankingAndFinance"}>
            <div className='flex flex-col w-[330px] h-[324px]'>{/*Image div*/}
              <img src={lectureHall} className="h-[264px] w-[330px]" alt=""/>
              <p className='bg-[#007FFF] w-[330px] flex items-center justify-center h-[68px] font-catamaran font-[800] text-[18px] text-white'>Bachelor’s Degrees </p>
            </div>
          </Link>

          <Link to={"/master-degrees/master-education"}>
            <div className='flex flex-col w-[330px] h-[324px]'>{/*Image div*/}
              <img src={conversation} className="h-[264px] w-[330px]" alt=""/>
              <p className='bg-[#007FFF] w-[330px] flex items-center justify-center h-[68px] font-catamaran font-[800] text-[18px] text-white'>Bachelor’s Degrees </p>
            </div>
          </Link>

        </div>



  )
}

export default CourcesGallery
