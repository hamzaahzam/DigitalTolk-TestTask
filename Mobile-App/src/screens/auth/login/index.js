import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Button, Input, KeyboardAvoidingScrollView } from "../../../components";
import { loginStrings } from "../../../constants";
import { navigateReset } from "../../../navigation/navigationRef";
import utils from "../../../utils";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <KeyboardAvoidingScrollView>
            <View style={ styles.container }>
                <View>
                    <Text style={ styles.titleText }>
                        { loginStrings.login }
                    </Text>
                    <Input
                        placeholder={ loginStrings.email }
                        keyboardType={ "email-address" }
                        onChangeText={ setEmail }
                        value={ email }
                        errorMsg={ (email.length > 0 && !utils.isEmailValid(email)) && loginStrings.emailError }
                    />
                    <Input
                        containerStyle={ styles.passwordContainer }
                        placeholder={ loginStrings.password }
                        secureTextEntry={ showPassword }
                        onChangeText={ setPassword }
                        showPassword={ showPassword }
                        onPressEye={ () => setShowPassword(!showPassword) }
                        errorMsg={ (password.length > 0 && !utils.validatePassword(password)) && loginStrings.passError }
                        value={ password } />
                </View>
                <View>
                    <Button
                        onPress={ () => navigateReset("DrawerStack") }
                        title={ loginStrings.login }
                    // disabled={ !utils.validatePassword(password) || !utils.isEmailValid(email) }
                    />
                    <Text style={ styles.forgetPassword }>{ loginStrings.forgotPassword }</Text>
                </View>
            </View>
        </KeyboardAvoidingScrollView>
    );
};