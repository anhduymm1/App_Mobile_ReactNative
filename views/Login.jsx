import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Pressable, ImageBackground, ScrollView } from "react-native";
import md5 from 'md5';
import Icon from 'react-native-vector-icons/FontAwesome'

function Login(props) {
    // State
    const [userid, setUserID] = useState('')
    const [password, setUserPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(true);

    getUser = async () => {
        const url = "http://192.168.30.100:8181/api/Values/GetLogin"
        await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "User_ID": userid,
                "User_Password": md5(password).toUpperCase()
            })
        }
        ).then(response => response.json())
            .then(data => {
                if (data == "Login fail") {
                    Alert.alert("Messsage", data)
                }
                else {
                    props.navigation.navigate('Menu')
                }
            })
    }

    changeLogin = () => {
        props.navigation.navigate('Register')
    }
    return (
        <View style={styles.container}>
            <ScrollView  >
               
                    <Text style={styles.title}>Sign In</Text>
                    
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter User ID"
                        placeholderTextColor="gray"
                        autoCapitalize="none"
                        value={userid}
                        onChangeText={setUserID}
                    />
                    <View style={styles.password_container}>
                        <TextInput style={styles.password_input}
                            label="Password"
                            secureTextEntry={passwordVisible}
                            underlineColorAndroid="transparent"
                            placeholder="Enter Password"
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setUserPassword}
                        />
                        <Icon style={styles.eye}  name={passwordVisible ? "eye" : "eye-slash"}  onPress={() => setPasswordVisible(!passwordVisible)} size={15} color="#232323" />
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={getUser}>
                        <Text style={styles.submitButtonText}> Sign in </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={changeLogin}>
                        <Text style={styles.register} > Register now </Text>
                    </TouchableOpacity>
   
            </ScrollView>
        </View>



    )
}

const styles = StyleSheet.create({

    container: {
       
        flex: 1,
    },
    input: {
        padding: 10,
        margin: 15,
        height: 60,
        borderColor: '#545B77',
        borderWidth: 2,
        borderRadius: 15,
        width: '90%',
        fontSize: 18,
        color:'black'

    },
    submitButton: {
        backgroundColor: '#545B77',
        padding: 10,
        margin: 15,
        height: 60,
        borderRadius: 15,
        justifyContent: 'center'
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 90,
        margin: 30,
        color: '#5C8984',
        marginBottom:70
    },
    password_container: {

        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    password_input: {
        padding: 10,
        margin: 15,
        height: 60,
        borderColor: '#545B77',
        borderWidth: 2,
        borderRadius: 15,
        width: '90%',
        fontSize: 18,
        color:'black'
    },
    eye: {
        margin: -50,
        fontSize: 20
    },
    register: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 20,
    },
   


})
export default Login;