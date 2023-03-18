import React from 'react'
import { useWindowDimensions } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import styles from "./ImageSlider.styles";

const ImageSlider = () => {
    const imageWidth = useWindowDimensions().width;
    const imageHeight = Math.round(imageWidth * 126/375);
    const images = [
        require('../../../assets/featureImg.png'),
        require('../../../assets/featureImg.png'),
        require('../../../assets/featureImg.png'),
    ]
    return (
        <SliderBox
        images = {images}
        autoplay
        circleLoop
        ImageComponentStyle={{width: imageWidth, height: imageHeight, resizeMode: 'contain'}}
        >

        </SliderBox>
    )
}

export default ImageSlider
