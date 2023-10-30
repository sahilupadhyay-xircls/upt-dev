import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import bewakoofLogo from "@src/assets/images/logo/bewakoof_logo.png"
import cornitosLogo from "@src/assets/images/logo/cornitos_logo.png"
import designersClassLogo from "@src/assets/images/logo/designers-class_logo.png"
import hammerLogo from "@src/assets/images/logo/hammer_logo.png"
import kapivaLogo from "@src/assets/images/logo/kapiva-logo.png"
import leafLogo from "@src/assets/images/logo/Leaf_logo.png"
import snitchBlackLogo from "@src/assets/images/logo/snitch-black_logo.png"
import skullcandyLogo from "@src/assets/images/logo/skullcandy_logo.png"

const LogoSlider = () => {
    const [numOfPages, setNumOfPages] = useState(6)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            setNumOfPages(6)
        } else if (window.innerWidth <= 576) {
            setNumOfPages(2)
        } else if (window.innerWidth <= 768) {
            setNumOfPages(4)
        }
    })
    return (
        <div className='mt170' style={{ background: '#e5e7eb' }}  >
            {/* <h1 className=' text-center display-5 main-heading fw-bolder mb-2 pt-3'>We Power Brands that Power the World</h1>style={{border: '2px solid #a0a0a0'}} */}

            <div className=' d-flex justify-content-center  align-items-center '>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={numOfPages}
                    navigation={false}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    className='p-3 d-flex justify-content-center  align-items-center'
                >

                    <SwiperSlide ><img className='joinCompanyLogo .rm-bg-img' src={bewakoofLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={cornitosLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={designersClassLogo} /></SwiperSlide>
                    <SwiperSlide> <img className='joinCompanyLogo' src={hammerLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={kapivaLogo} /></SwiperSlide>
                    <SwiperSlide> <img className='joinCompanyLogo' src={leafLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={snitchBlackLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={skullcandyLogo} /></SwiperSlide>
                </Swiper>
            </div>

        </div >
    )
}

export default LogoSlider