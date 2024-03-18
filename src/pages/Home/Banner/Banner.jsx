import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from '../../../../src/assets/Home/_113476676_cadbury_200kcal_multipack_landscape.jpg'
import img2 from '../../../../src/assets/Home/pasted image 0.png'
import img3 from '../../../../src/assets/Home/slide-05.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
        </Carousel>
    );
};

export default Banner;