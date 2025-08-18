import { markdownify } from "@/lib/utils/textConverter";
import { useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="projects-carousel relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"project-" + i}>
            <div className="project-card">
              <div className="project-image">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
              </div>
              <div className="project-content p-6">
                <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                <p className="mb-4 text-gray-600" dangerouslySetInnerHTML={{__html: markdownify(item.description)}}/>
                <div className="project-technologies mb-4">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    Ver proyecto
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          width="100%"
          className="swiper-pagination projects-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default ProjectSlider; 