import styled from 'styled-components';
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../assets/img/slide/1.jpg";
import slideTwo from "../assets/img/slide/2.jpg";
import slideThree from "../assets/img/slide/3.jpg";
import slideFour from "../assets/img/slide/4.jpg";
import slideFive from "../assets/img/slide/5.jpg";

const carouselImages = [slideOne, slideTwo, slideThree, slideFour, slideFive];

function Slider() {

  return (
  <StyledSlider>
    <Carousel
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      transitionTime={200}
    >
      {carouselImages.map((carouselImage, i) => (
        <div className="caro" key={i}>
          <Image 
          loading="lazy"
          src={carouselImage} 
          alt="carousel"
          width={1200}
          height={400}
          objectFit= "cover"
          
          />
        </div>
      ))}
    </Carousel>
</StyledSlider>
  )
}

const StyledSlider = styled.div`
margin: 2.5rem 0;
width: 100%;


.carousel * {
  border-radius: 1rem;
 
}

`
export default Slider
