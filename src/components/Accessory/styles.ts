import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 96px;
    height: 86px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

    padding: 16px;
    margin-bottom: 8px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(13)}px;

    margin-top: 8px;

    color: ${({ theme }) => theme.colors.text};
`;