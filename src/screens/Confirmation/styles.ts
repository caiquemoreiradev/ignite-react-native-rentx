import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.header};

    padding-top: 56px;
`;

export const Content = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    padding-bottom: 40px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;

    color: ${({ theme }) => theme.colors.shape};

    margin-top: 40px;

    text-align: center;
`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;

    color: ${({ theme }) => theme.colors.text_detail};

    text-align: center;
    line-height: ${RFValue(22)}px;

    margin-top: 16px;
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: center;

    width: 100%;

    margin: 80px 0;
`;