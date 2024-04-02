/* eslint-disable no-unused-vars */
import { RichText } from '@wordpress/block-editor';
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
import './style.scss';
const Slider = ({ attributes, setAttributes }) => {
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
    logoBorder,
    logoBorderColor,
    logoBorderRadius,
    borderStyle,
    imageReplace,
    idx,
    orderIdx,
  } = attributes;
  const SliderEle = () => (
    <div className="swiper-wrapper-main-slide">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay * 1000,
                reverseDirection:
                  slideDirection === 'rightToLeft' ? false : true,
              }
            : false
        }
        navigation={navigation ? { clickable: true } : false}
        draggable={false}
        loop={infinityLoop ? false : true}
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
          image.map((img, idx) => (
            <>
              <SwiperSlide>
                <div
                  style={{
                    border: `${
                      orderIdx === idx ? '2px solid #007CBA' : 'none'
                    }`,
                    borderRadius: `${orderIdx === idx ? '4px' : 'none'}`,
                  }}
                >
                  <div
                    onClick={() => setAttributes({ orderIdx: idx })}
                    className="slider-logo-wrapper"
                    style={{
                      position: 'relative',
                      border: `${logoBorder} ${borderStyle} ${logoBorderColor}`,
                      borderRadius: logoBorderRadius,
                    }}
                  >
                    <i
                      onClick={() =>
                        setAttributes({
                          image: image.filter((val, i) => i !== idx),
                        })
                      }
                      className="fa-solid fa-trash logo-slider-block-delete-btn"
                    ></i>
                    <div
                      onClick={() => setAttributes({ idx })}
                      className="logo-replace-wrapper"
                    >
                      <i
                        onClick={imageReplace}
                        className="fa-solid fa-plus"
                      ></i>
                    </div>
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
                      src={img?.url}
                      alt={img?.alt}
                    />
                    <div
                      className={`logo-slider-block-caption  ${
                        captionHover === 'hover' && 'caption-hover'
                      } ${!captionVisibility && 'hidden'}`}
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '0',
                        right: '0',
                        color: captionTextColor,
                        backgroundColor: captionBgColor,
                      }}
                    >
                      <RichText
                        style={{ color: captionTextColor }}
                        tagName="span"
                        value={img?.caption}
                        allowedFormats={[
                          'core/bold',
                          'core/italic',
                          'core/link',
                        ]}
                        onChange={(value) =>
                          setAttributes({
                            image: image?.map((val, i) =>
                              i === idx ? { ...val, caption: value } : val
                            ),
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </div>
  );
  return <SliderEle />;
};
export default Slider;
