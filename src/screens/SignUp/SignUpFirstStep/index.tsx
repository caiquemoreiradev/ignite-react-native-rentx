import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import * as Yup from 'yup';

import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { Container, Form, FormTitle, Header, SubTitle, Title } from "./styles";

export function SignUpFirstStep() {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [driverLicense, setDriverLicense] = useState('');

    async function handleNextStep() {

        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('Nome é obrigatório'),
                email: Yup.string()
                    .email('E-mail inválido')
                    .required('E-mail obrigatório'),
                driverLicense: Yup.string()
                    .required('CNH obrigatória')
            });

            const data = { name, email, driverLicense };
            await schema.validate(data);

            navigation.navigate('SignUpSecondStep', { user: data });
        } catch (error) {

            if(error instanceof Yup.ValidationError) {
               return Alert.alert('Opa', error.message)
            }
        }
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
                        <FormTitle>1. Dados</FormTitle>

                        <Input
                            iconName="user"
                            placeholder="Nome"
                            onChangeText={setName}
                            value={name}
                        />

                        <Input
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            value={email}
                        />

                        <Input
                            iconName="credit-card"
                            placeholder="CNH"
                            keyboardType="numeric"
                            onChangeText={setDriverLicense}
                            value={driverLicense}
                        />
                    </Form>

                    <Button
                        title="Próximo"
                        onPress={handleNextStep}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}