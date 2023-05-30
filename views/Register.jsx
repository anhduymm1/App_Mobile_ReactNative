import React, {useState,useEffect} from "react";
import { Text ,StyleSheet,View, TextInput, TouchableOpacity, Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import md5 from "md5";
function Register(props){
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [cpasswordVisible,setCPasswordVisible] = useState(true)

    const [userid,setUserID] = useState('')
    const [password,setUserPassword] = useState('')
    const [confirm_password,setConfirmPassword] = useState('')
    const [username,setUsername] = useState('')

    getRegister = () =>{
        if(password == confirm_password){
            const url = "http://192.168.30.100:8181/api/Values/Register"
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "User_ID": userid,
                    "User_Password": md5(password).toUpperCase(),
                    "Username":username
                })
            }
            ).then(response => response.json())
                .then(data => {
                    if (data == "ok") {
                        Alert.alert("Messsage", "Tạo tài khoản thành công")
                        props.navigation.navigate('Login')
                    } else {
                        Alert.alert("Messsage", data)
                    }
                })
        }
        else{
            Alert.alert("Messsage", "Hai dòng mật khẩu phải trùng nhau")
        }
    }

    return(
        <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="User ID"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            value={userid}
            onChangeText={setUserID}
        />
        <View style={styles.password_container}>
            <TextInput style={styles.password_input}
                label="Password"
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                secureTextEntry={passwordVisible}
                value={password}
                onChangeText={setUserPassword}
            />
            <Icon style={styles.eye}  name={passwordVisible ? "eye" : "eye-slash"}  onPress={() => setPasswordVisible(!passwordVisible)} size={15} color="#232323" />
        </View>

        <View style={styles.password_container}>
            <TextInput style={styles.password_input}
                label="Password"
                underlineColorAndroid="transparent"
                placeholder="Confirm Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                secureTextEntry={cpasswordVisible}
                value={confirm_password}
                onChangeText={setConfirmPassword}
            />
            <Icon style={styles.eye}  name={cpasswordVisible ? "eye" : "eye-slash"}  onPress={() => setCPasswordVisible(!cpasswordVisible)} size={15} color="#232323" />
        </View>
        <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
        />

        <TouchableOpacity
            style={styles.submitButton}
            onPress={getRegister}
           >
            <Text style={styles.submitButtonText}> Register </Text>
        </TouchableOpacity>

    </View>
    )
}
const styles = StyleSheet.create({
    container: {
       
        justifyContent:'center',
        flex:1
    },
    input: {
        padding: 10,
        margin: 15,
        height: 60,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 15,
        width: '90%',
        fontSize:18
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 60,
        borderRadius: 15,
        justifyContent:'center'
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:20
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        margin: 30,
        color:'blue'
    },
    password_container: {

        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    password_input: {
        padding: 10,
        margin:15,
        height: 60,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 15,
        width: '90%',
        fontSize:18
    },
    eye: {
        margin:-50,
        fontSize:20
    },
    register:{
        color:'blue',
        textAlign:'center',
        marginTop:20,
    }


})
export default Register;