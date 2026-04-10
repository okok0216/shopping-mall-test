import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function MainSlider() {
    const slides = [
        { src: "./images/main_slider_01.jpg", alt: "slider1" },
        { src: "./images/main_slider_02.jpg", alt: "slider2" },
        { src: "./images/main_slider_03.jpg", alt: "slider3" },
        { src: "./images/main_slider_04.jpg", alt: "slider4" },
        { src: "./images/main_slider_05.jpg", alt: "slider5" },
    ]
    return (
        <div>
            <Swiper navigation autoplay={{ delay: 3000 }} loop={true} modules={[Navigation, Autoplay]} className="mySwiper">
                {slides.map((img, id) => (
                    <SwiperSlide key={id}>
                        <img src={img.src} alt={img.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
