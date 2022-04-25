import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValueProps {
    selected: boolean
}

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 350px;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content: center;
    padding: 25px;

    padding-top: 48px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(32)}px;

    color: ${({ theme }) => theme.colors.shape};

    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 16px 0;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;

    color: ${({ theme }) => theme.colors.text};

    margin-top: 24px;
`;

export const DateValue = styled.Text<DateValueProps>`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;

    color: ${({ theme }) => theme.colors.shape};

    margin-top: 8px;

    ${({ selected, theme }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.shape};
    padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
    padding: 24px;
`;