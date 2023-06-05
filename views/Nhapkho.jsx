import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from '@react-native-community/checkbox';
import { ToggleButton } from 'react-native-paper';

function Nhapkho({ hidemodal }) {

    const [all_CheckBox, setall_CheckBox] = useState(false)
    const [isEnabledNhap, setIsEnabledNhap] = useState(true);
    const toggleSwitchNhap = () => setIsEnabledNhap(previousState => !previousState);

    const [isEnabledXuat, setIsEnabledXuat] = useState(false);
    const toggleSwitchXuat = () => setIsEnabledXuat(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={hidemodal}>
                        <Icon name="arrow-left" style={{ fontSize: 30, color: 'black', }} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Nhập xuất kho</Text>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
            <View style={styles.bottom}>
                <ScrollView horizontal>
                    <View style={[styles.input, styles.shadow]}>
                        <View style={styles.input_left}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={isEnabledNhap ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitchNhap}
                                    value={isEnabledNhap}
                                />
                                <Text style={styles.text1}>Nhập</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                                    thumbColor={isEnabledXuat ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitchXuat}
                                    value={isEnabledXuat}
                                />
                                <Text style={styles.text1}>Xuất</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>QR Code</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Mã vật tư</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Tên vật tư</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Tổng sản lượng</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Đơn vị</Text>
                            </View>
                        </View>
                        <View style={styles.input_right}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Quét</Text>
                                <TextInput style={styles.text_input} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Số lượng</Text>
                                <TextInput style={styles.text_input} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Còn lại</Text>
                                <TextInput style={styles.text_input} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    tintColors={{ true: '#F15927', false: 'black' }}
                                    disabled={false}
                                    value={all_CheckBox}
                                    onValueChange={(newValue) => setall_CheckBox(newValue)} />
                                <Text style={styles.text1}>Tất cả</Text>
                                <TouchableOpacity style={[styles.button, styles.shadow]} >
                                    <Text style={styles.button_text}>Lưu</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
    },
    bottom: {
        flex: 8,

    },
    input: {
        flex: 1,
        marginBottom: 20,
        borderColor: '#B2C8DF',
        borderWidth: 3,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    input_left: {
        flex: 1,
        marginRight: 70
    },
    input_right: {
        flex: 1
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
    header_text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        fontWeight: '500'
    },
    title: {
        fontSize: 40,
        color: '#070A52',
        fontWeight: 500,
        flex: 2,
        textAlign: 'center'

    },
    qrcode: {
        color: 'black',
        marginRight: 10,
        width: '30%',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 5,
        padding: 10
    },
    dataWrapper: { marginTop: -1 },
    row: {
        padding: 10
    },
    text_input: {
        padding: 10,
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 2,
        flex: 2,
        marginRight: 10,
        width: 300
    },
    text1: {
        flex: 1,
        fontSize: 20,
        marginLeft: 10,
        color: 'black',
        fontWeight: '500',
        width: 200,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 40,
        shadowRadius: 10,
        elevation: 10,
    },
    button: { height:50,width: 150, margin: 5, backgroundColor: '#E7E6E1', borderColor: 'black', borderWidth: 2, borderRadius: 15, alignItems: 'center', justifyContent: 'center',marginRight:80 },
    button_text: { fontSize: 15, fontWeight: '700', color: '#070A52' },
})
export default Nhapkho;