import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { Load } from "../Load";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
    color?: string;
    enabled?: boolean;
    loading?: boolean;
    light?: boolean;
}

export function Button({
    title,
    color,
    light = false,
    enabled = true,
    loading = false,
    ...rest
}: Props) {

    const theme = useTheme();

    return (
        <Container
            enabled={enabled}
            {...rest}
            color={color ? color : theme.colors.main}
            style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
        >
            {loading ? (
                <Load />
            ) : (
                <Title light={light}>{title}</Title>
            )}
        </Container>
    )
}