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
    image,
    autoplay,
    speed,
    autoplayDelay,
    slideDirection,
    infinityLoop,
    desktopDevice,
    tabletDevice,
    mobileDevice,
    desktopSpace,
    tabletSpace,
    mobileSpace,
    navigation,
    pagination,
    dynamicPagination,
    captionHover,
    captionVisibility,
    captionTextColor,
    captionBgColor,
    logoHoverStyle,
    logoBorderRadius,
    logoBorderColor,
    logoBorder,
    borderStyle,
  } = attributes;
  const SliderEle = () => (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay * 1000,
              reverseDirection: slideDirection === 'rightToLeft' ? false : true,
            }
          : false
      }
      navigation={navigation ? { clickable: true } : false}
      draggable={false}
      loop={infinityLoop}
      speed={speed * 1000}
      autoHeight={true}
      pagination={
        pagination
          ? { clickable: true, dynamicBullets: dynamicPagination }
          : false
      }
      breakpoints={{
        0: {
          slidesPerView: mobileDevice,
          spaceBetween: mobileSpace,
        },
        768: {
          slidesPerView: tabletDevice,
          spaceBetween: tabletSpace,
        },
        1024: {
          slidesPerView: desktopDevice,
          spaceBetween: desktopSpace,
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
                  border: `${logoBorder} ${borderStyle} ${logoBorderColor}`,
                  borderRadius: logoBorderRadius,
                }}
              >
                <a href={img?.link}>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                    className={`${
                      logoHoverStyle === 'gray' && 'logo-grayScale'
                    } ${logoHoverStyle === 'zoomIn' && 'zoomIn'} ${
                      logoHoverStyle === 'zoomOut' && 'zoomOut'
                    } `}
                    src={img.url}
                    alt={img.alt}
                  />
                </a>
                <div
                  className={`logo-slider-caption ${
                    captionHover === 'hover' && 'caption-hover'
                  } ${!captionVisibility && 'hidden'}`}
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0',
                    right: '0',
                    backgroundColor: captionBgColor,
                  }}
                >
                  <span
                    style={{ color: captionTextColor }}
                    dangerouslySetInnerHTML={{ __html: img?.caption }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
    </Swiper>
  );

  return <SliderEle />;
  // return <h1>Hi</h1>
};
export default SliderFront;
