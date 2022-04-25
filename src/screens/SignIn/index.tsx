import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import * as Yup from 'yup';

import { Container, Footer, Form, Header, SubTitle, Title } from "./styles";
import { useAuth } from "../../hooks/auth";

export function SignIn() {

    const theme = useTheme();
    const navigation = useNavigation();

    const { signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn() {

        try {

            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                    .required('A senha é obrigatória')
            });

            await schema.validate({ email, password });

            signIn({ email, password });
        } catch (error) {

            console.log(error);

            if (error instanceof Yup.ValidationError) {

                Alert.alert('Ocorreu um erro!', error.message);
            } else {

                Alert.alert(
                    'Ocorreu um erro na autenticação',
                    'Por favor verifique suas credenciais e tente novamente'
                )
            }
        }
    }

    function handleSignUpNavigate() {
        navigation.navigate('SignUpFirstStep')
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>

                    <StatusBar barStyle={"dark-content"} backgroundColor='transparent' translucent />

                    <Header>
                        <Title>
                            Estamos {'\n'}
                            quase lá
                        </Title>
                        <SubTitle>
                            Faça seu login para começar {'\n'}
                            sua experiência com o rentx
                        </SubTitle>
                    </Header>

                    <Form>
                        <Input
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            value={email}
                        />

                        <PasswordInput
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title="Login"
                            onPress={handleSignIn}
                            enabled={true}
                            loading={false}
                        />

                        <Button
                            title="Criar conta gratuita"
                            color={theme.colors.background_secondary}
                            light
                            onPress={handleSignUpNavigate}
                            enabled={true}
                            loading={false}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}