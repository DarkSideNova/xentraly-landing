import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useResponsive from '@/app/utils/hooks/useResponsive';
import listOfBrands from './list';
import Brand from './brand';
import { cn } from '@/app/utils/cn';

const Brands = () => {
    const isTabletOrMobile = useResponsive('(max-width: 1224px)')

    return (
        <div className={cn([
            "w-full bg-[#151C2F] relative flex justify-center items-center",
            isTabletOrMobile ? "px-5" : "px-[115px]"
        ])}>
            <Swiper
                spaceBetween={2}
                slidesPerView={
                    isTabletOrMobile ? 2 : 4}
                style={{ width: '100%', height: '100%' }}
            >
                {listOfBrands.map((elem, i) => (
                    <SwiperSlide key={i}>
                        <Brand photo={elem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Brands