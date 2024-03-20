
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/Home/alooz.jpeg'
import slide2 from '../../../assets/Home/buscuit.png'
import slide3 from '../../../assets/Home/chocolate.jpg'
import slide4 from '../../../assets/Home/lays.jpeg'
import slide6 from '../../../assets/Home/coca cola.jpg'

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 08:00am to 12:00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-20 text-slate-500'>Alooz</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-20 text-slate-500'>Energy</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-20 text-slate-500'>Dairy Milk</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-20 text-slate-500'>Lays</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-20 text-slate-500'>Coca cola</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;