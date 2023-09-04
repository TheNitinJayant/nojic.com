
import React from 'react';

import './HomePage.styles.css';
import Navbar from '@/react-app/component/navbar/Navbar';

function HomePage(){
    return(
        <>
            <Navbar />
            <div className="home">

                <div className="home-profile-container">
                    <div className="home-profile-image-container">
                        <img src="https://res.cloudinary.com/dnukrkfpj/image/upload/v1669796006/nitinjayant.com/assets/images/photo.jpg" className="home-profile-image-container__image" alt="photo"/>
                    </div>
                    <div className="home-profile-social-container">
                        <a href="https://twitter.com/TheNitinJayant" className="home-profile-social-link" target="_blank"><i className="fa-brands fa-square-twitter home-profile-social-link__icon"></i></a>
                        <a href="https://linkedin.com/in/TheNitinJayant" className="home-profile-social-link" target="_blank"><i className="fa-brands fa-linkedin home-profile-social-link__icon"></i></a>
                        <a href="https://github.com/TheNitinJayant" className="home-profile-social-link" target="_blank"><i className="fa-brands fa-square-github home-profile-social-link__icon"></i></a>
                        <a href="https://instagram.com/TheNitinJayant" className="home-profile-social-link" target="_blank"><i className="fa-brands fa-square-instagram home-profile-social-link__icon"></i></a>
                        <a href="https://youtube.com/@TheNitinJayant" className="home-profile-social-link" target="_blank"><i className="fa-brands fa-youtube home-profile-social-link__icon"></i></a>
                        <a href="mailto:hello@nitinjayant.com" className="home-profile-social-link" target="_blank"><i className="fa-solid fa-envelope home-profile-social-link__icon"></i></a>
                        
                    </div>
                </div>

                <div className="home-text-container">
                    <h1 className="home-text">Hi,</h1>
                    <h1 className="home-text">I am <span className="highlighted-primary-bold-text">Nitin</span></h1>
                    <h1 className="home-text"><span className="highlighted-primary-bold-text">Software </span>Engineer</h1>
                </div>

            </div>
        </>
    )
}

export default HomePage;