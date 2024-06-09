import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const SliderFront = ({ attributes }) => {
  const {
    options,
    caption,
    image,
    sliderStyles
  } = attributes;
  
return <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={
        options.autoplay
          ? {
            delay: options.delay * 1000,
            reverseDirection: options.direction === 'rightToLeft' ? false : true,
          }
          : false
      }
      navigation={options.navigation ? { clickable: true } : false}
      draggable={false}
      loop={options.loop}
      speed={options.speed * 1000}
      autoHeight={true}
      pagination={
        options.pagination
          ? { clickable: true, dynamicBullets: options.dynamicPagination }
          : false
      }
      breakpoints={{
        1024: {
          slidesPerView: options.logoView.desktop,
          spaceBetween: options.space.desktop,
        },
        640: {
          slidesPerView: options.logoView.tablet,
          spaceBetween: options.space.tablet,
        },
        0: {
          slidesPerView: options.logoView.mobile,
          spaceBetween: options.space.mobile,
        },
      }}
    >
      {image &&
        image.map((img) => (
          <>
            <SwiperSlide>
              <div
                className="slider-logo-wrapper"
                style={{
                  position: 'relative',
                  border: `${sliderStyles.logo.border.width} ${sliderStyles.logo.border.style} ${sliderStyles.logo.border.color}`,
                  borderRadius: sliderStyles.logo.border.radius,
                  height: sliderStyles.logo.height,
                  width: sliderStyles.logo.height
                }}
              >
                <a href={img?.link}>
                  <img
                    style={{
                      // width: '100%',
                      // height: '100%',
                      // objectFit: 'contain',
                      width: sliderStyles.logo.width,
                      objectFit: sliderStyles.logo.logoFitOption,
                      height: sliderStyles.logo.height,
                    }}
                    className={`${sliderStyles.logo.hover === 'gray' ? 'logo-grayScale':""
                      } ${sliderStyles.logo.hover === 'zoomIn' ? 'zoomIn':""} ${sliderStyles.logo.hover === 'zoomOut' ? 'zoomOut':""
                      } `}
                    src={img.url}
                    alt={img.alt}
                  />
                </a>
                <div
                  className={`logo-slider-block-caption ${caption.hover === 'hover' ? 'caption-hover':""
                    } ${!caption.isCaptionVisible ? 'hidden':""}`}
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0',
                    right: '0',
                    backgroundColor: caption.color.bg,
                  }}
                >
                  <span
                    style={{ color: caption.color.text }}
                    dangerouslySetInnerHTML={{ __html: img?.caption }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
    </Swiper>
};
export default SliderFront;
