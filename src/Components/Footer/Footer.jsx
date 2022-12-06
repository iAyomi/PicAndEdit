import React from 'react';
import HeroImg from "../HeroImg/HeroImg";
import "./Footer.css";


const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <div className="footer">
        <HeroImg />
			<p>
				PicAndEdit makes it easier for both individuals and businesses to have a
				central point from where they can create exciting image transformations
				with one click. <br /> Here, you can create without any huge creativity
				process. Our <b className='bold'>PicsArt</b> APIs will do
				the hardwork for you.
			</p>
			<p>Copyright © {currentYear}</p>
    </div>
  );
}



export default Footer;