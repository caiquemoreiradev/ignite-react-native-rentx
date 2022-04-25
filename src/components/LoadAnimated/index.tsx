import React from "react";
import AnimatedLottieView from "lottie-react-native";

import loadingCar from '../../assets/load_animated.json';

import { Container } from "./styles";

export function LoadAnimation() {

    return (
        <Container>
            <AnimatedLottieView
                source={loadingCar}
                style={{ height: 200 }}
                resizeMode='contain'
                loop
                autoPlay
            />
        </Container>
    )
}