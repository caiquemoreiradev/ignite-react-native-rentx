import styled from "styled-components/native";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

interface ButtonTextProps {
    light: boolean;
}

interface ButtonProps extends TouchableOpacityProps {
    color: string;
    enabled: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    width: 100%;

    padding: 19px;
    align-items: center;
    justify-content: center;

    margin-bottom: 8px;

    background-color: ${({ color }) => color};
`;

export const Title = styled.Text<ButtonTextProps>`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;

    color: ${({ theme, light }) => light ?  theme.colors.header : theme.colors.shape};
`;