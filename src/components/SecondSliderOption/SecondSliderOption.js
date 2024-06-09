/* eslint-disable no-unused-vars */
import {useEffect} from "react";
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
import '../../style.scss';
const SecondSliderOption = ({ attributes, setAttributes }) => {
  const {
    options,
    caption,
    image,
    sliderStyles,
    imageReplace,
    idx,
    orderIdx,
  } = attributes;
  useEffect(() => {
    
  }, [options.logoView])
  return (
    <div className="swiper-wrapper-main-slide">
      <Swiper
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
          image.map((img, idx) => (
            <>
              <SwiperSlide>
                <div
                  style={{
                    border: `${orderIdx === idx ? '1px solid blue' : 'none'}`,
                    height:sliderStyles.logo.height,
                    width: sliderStyles.logo.height
                  }}
                >
                  <div
                    onClick={() => setAttributes({ orderIdx: idx })}
                    className="slider-logo-wrapper"
                    style={{
                      position: 'relative',
                      border: `${sliderStyles.logo.border.width} ${sliderStyles.logo.border.style} ${sliderStyles.logo.border.color}`,
                      borderRadius: sliderStyles.logo.border.radius,
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
                      <i onClick={imageReplace} className="fa-solid fa-plus"></i>
                    </div>
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
                      src={img?.url}
                      alt={img?.alt}
                    />
                    <div
                      className={`logo-slider-block-caption  ${caption.hover === 'hover' ? 'caption-hover':""
                        } ${!caption.isCaptionVisible ? 'hidden':""}`}
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '0',
                        right: '0',
                        color: caption.color.text,
                        backgroundColor: caption.color.bg,
                      }}
                    >
                      <RichText
                        style={{ color: caption.color.text }}
                        tagName="span"
                        value={img?.caption}
                        placeholder='Write caption...'
                        allowedFormats={['core/bold', 'core/italic', 'core/link']}
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
};
export default SecondSliderOption;
