import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { BlurView } from "@react-native-community/blur";
import Kiemke from "./Kiemke";
function Menu(props) {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <View style={[styles.view_flex]}>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Nhập vật tư')}}>
                            <Image source={require("../image/import.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Nhập vật tư</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Xuất vật tư')}}>
                            <Image source={require("../image/export.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Xuất vật tư</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_flex}>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/statistics.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Thống kê kho</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/planning.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Thẻ kho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_flex}>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/transfer.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Giao hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box} onPress={()=>{props.navigation.navigate('Kiểm kê')}}>
                            <Image source={require("../image/checklist.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Kiểm kê</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_flex}>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/printer_orther.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>In khác</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/printer.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>In nhãn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_flex}>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/tachnhan.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Tách nhãn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/padlock.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_flex}>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/settings.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Cài đặt</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.shadow]}>
                        <TouchableOpacity style={styles.box}>
                            <Image source={require("../image/translation.png")} style={styles.box_image} />
                            <Text style={styles.tittle}>Ngôn ngữ</Text>
                        </TouchableOpacity>
                    </View>
                </View>            
            </ScrollView>
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex: 1,
        justifyContent: "center",
        backgroundColor:'#FBFFDC'
    },
    view_flex: {
        justifyContent: "space-between",
        alignContent: "center",
        margin: 10,
        width:300
    },
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        padding: 10,
        height: 150,
        borderRadius: 30,
        backgroundColor: 'white',
        textAlign: "center",
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 50,
        shadowRadius: 20,
        elevation: 30,
    },
    box_image: {
        height: 100,
        width: 100,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center',

    },
    tittle: {
        marginTop: 10,
        fontSize: 21,
        fontWeight: "700",
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'gray'
    }

})

export default Menu;
