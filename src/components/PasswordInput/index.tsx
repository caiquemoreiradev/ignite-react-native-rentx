import React, { useState } from "react";
import { useTheme } from "styled-components";

import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, InputText, ChangePasswordVisibilityButton } from "./styles";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({
    iconName,
    value,
    ...rest
}: Props) {

    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);

        setIsFilled(!!value);
    }

    const [passwordIsVisible, setPasswordIsVisible] = useState(true);

    function handlePasswordVisible() {

        setPasswordIsVisible(!passwordIsVisible);
    }

    return (
        <Container>

            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}
                />
            </IconContainer>

            <InputText
                isFocused={isFocused}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={passwordIsVisible}
                {...rest}
            />

            <ChangePasswordVisibilityButton
                isFocused={isFocused}
                onPress={handlePasswordVisible}
            >
                <Feather
                    name={passwordIsVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={theme.colors.text_detail}
                />
            </ChangePasswordVisibilityButton>
        </Container>
    )
}