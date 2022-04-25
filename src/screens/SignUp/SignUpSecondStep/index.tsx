import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { Container, Form, FormTitle, Header, SubTitle, Title } from "./styles";
import { PasswordInput } from "../../../components/PasswordInput";
import { useTheme } from "styled-components";
import api from "../../../services/api";

interface Params {
    user: {
        name: string;
        email: string;
        driverLicense: string;
    }
}

export function SignUpSecondStep() {

    const route = useRoute();
    const navigation = useNavigation();
    const theme = useTheme();

    const { user } = route.params as Params;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSignUp() {

        if (!password || !confirmPassword) {
            return Alert.alert('Opa', 'Informe a senha e a confirmação para continuar!')
        }

        if (password != confirmPassword) {
            return Alert.alert('Opa', 'A senha e a confirmação não são iguais!')
        }

        // Enviar para API e cadastrar

        await api.post('/users', {
            name: user.name,
            email: user.email,
            password,
            driver_license: user.driverLicense
        }).then(() => {
            navigation.navigate('Confirmation', {
                nextScreen: 'SignIn',
                title: 'Conta criada com sucesso!',
                message: 'Agora é fazer o seu login \n e aproveitar o rentx'
            })
        }).catch((error) => {
            console.log(error)
            Alert.alert('Opa', 'Ocorreu um erro durante seu cadastro!')
        })
    }

    function handleBack() {

        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton onPress={handleBack} />
                    </Header>

                    <Title>
                        Crie sua {'\n'} conta
                    </Title>

                    <SubTitle>
                        Faça seu cadastro de {'\n'}
                        forma rápida e fácil
                    </SubTitle>

                    <Form>
                        <FormTitle>2. Senha</FormTitle>

                        <PasswordInput
                            iconName="lock"
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                        />

                        <PasswordInput
                            iconName="lock"
                            placeholder="Repetir senha"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </Form>

                    <Button
                        title="Concluir cadastro"
                        color={theme.colors.success}
                        onPress={handleSignUp}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}