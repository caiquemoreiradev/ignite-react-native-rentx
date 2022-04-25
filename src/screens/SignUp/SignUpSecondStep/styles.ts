import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 24px;

    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-top: 48px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;

    color:  ${({ theme }) => theme.colors.title};

    margin-top: 60px;
    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(16)}px;

    color:  ${({ theme }) => theme.colors.text};

    line-height: ${RFValue(25)}px;
`;

export const Form = styled.View`
    width: 100%;

    margin-top: 64px;
    margin-bottom: 16px;
`;

export const FormTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(20)}px;

    color:  ${({ theme }) => theme.colors.title};

    margin-bottom: 24px;
`;