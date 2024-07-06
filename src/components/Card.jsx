import React from 'react'
import c1 from "../Imgs/Mask group.png"
import c2 from "../Imgs/Mask group (1).png"
import c3 from "../Imgs/Mask group (2).png"
import './Main.css'
const Card = () => {
  return (
    <div className='col-12 d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4'>
          <div className='d-flex flex-column card-main gap-3'>
            <img className='w-100' src={c1} alt="" />
            <span className='text-white fs-6 text-center fw-light lh-1'>
            Explore large, destructible environments where no two games are ever the same.
            </span>
          
          </div>
          <div className='d-flex flex-column card-main gap-3'>
            <img className='w-100' src={c2} alt="" />
            <span className='text-white fs-6 text-center fw-lighter lh-1'>
            Explore large, destructible environments where no two games are ever the same.
            </span>
          
          </div>
          <div className='d-flex flex-column card-main gap-3'>
            <img className='w-100' src={c3} alt="" />
            <span className='text-white fs-6 text-center fw-light lh-1'>
            Explore large, destructible environments where no two games are ever the same.
            </span>
          
          </div>

    </div>
  )
}

export default Card