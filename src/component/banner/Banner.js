import React from 'react';
import "./Banner.scss";
import bannerwide from "../../assets/images/bannerwide.PNG";
export const Banner = () => {
  return (
      <section className='banner'>
        <div className='banner-content'>
        <div className='banner-text'>
          <h3>Women’s <b/> Outerwear</h3>
          <div className='banner-border'></div>
        </div>
        <div className='banner-img'>
          <img src={bannerwide} alt='banner'/>
        </div>
        </div>
      </section>
  )
}
