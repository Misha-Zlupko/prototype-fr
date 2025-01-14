import React, { FC, useState } from "react";
import { Carousel } from "@mantine/carousel";
import s from "./MobileSliderComponent.module.scss";

interface MobileSliderComponentProps {
  data: Array<{
    id?: number;
    image?: string;
    title?: string;
    customer?: string;
    year?: string;
    author?: string;
    description?: string;
  }>;
  SlideComponent: React.ComponentType<{ data: any }>; // Пропс для передачі компоненти слайда
}

const MobileSliderComponent: FC<MobileSliderComponentProps> = ({
  data,
  SlideComponent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel
      onSlideChange={(index) => {
        setCurrentSlide(index);
      }}
      withIndicators
      withControls={false}
      loop={true}
      slideSize="clamp(250px,90vw,480px)"
      styles={{
        viewport: {
          height: "70%",
          paddingBottom: "40px",
        },
        indicators: {
          alignItems: "center",
          paddingTop: "clamp(5px,5vw,15px)",
          marginLeft: "20px",
          marginRight: "20px",
          position: "relative",
          gap: 0,
        },
        indicator: {
          borderRadius: 0,
          ":last-child": {
            borderRadius: "0 100px 100px 0",
          },
          ":first-child": {
            borderRadius: "100px 0 0 100px",
          },
          height: "calc(clamp(220px,90vw,400px)*0.02)",
          width: `calc(clamp(220px,90vw,400px)/${data.length})`,
          backgroundColor: "gray",
          [`:nth-child(${currentSlide + 1})`]: {
            margin: "-0.2vw",
            zIndex: 1,
            backgroundColor: "#A7CAF0",
            borderRadius: "100px",
            height: "calc(clamp(220px,90vw,450px)*0.02*1.5)",
            width: `calc(clamp(220px,90vw,450px)/${data.length}*1.3)`,
          },
        },
      }}>
      {data.map((item) => (
        <Carousel.Slide key={item.id} style={{ marginRight: "40px" }}>
          <SlideComponent data={item} />{" "}
          {/* Відображення переданої компоненти */}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default MobileSliderComponent;
