import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'

function ImportSheflERP({ hidemodal }) {

    const [tableHead, setTableHead] = useState(
        [
            'STT',
            'Vật tư',
            'Màu',
            'Số lượng',
            'Kệ',
        ]
    );
    const [widthArr, setWidthArr] = useState([100, 300, 100, 300, 300]);

    const data = [
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },
        {
            "Mã QR": "P89230418000042",
            "Mã vật tư": "P890009570",
            "Kệ": "O1-01",
            "Nhà cung ứng": "CHIYA",
            "Tên vật tư": "LJ B 0001 +DC",
            "Màu": "A0QM",
            "Số lượng": "33",
            "Số phiếu": "20230401387",
            "Cuộn": "6/6",
            "Tên người dùng": "24972",
            "Total_Qty": "1757,1000000"
        },


    ]

    var datatable = data.map((item) => [
        item['Mã QR'],
        item['Mã vật tư'],
        item['Kệ'],
        item['Nhà cung ứng'],
        item['Tên vật tư'],
        item['Màu'],
        item['Số lượng'],
        item['Số phiếu'],
        item['Cuộn'],
        item['Tên người dùng'],
        item['Total_Qty']
    ])

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', marginBottom: 15 }}>
                    <ScrollView horizontal>
                        <TouchableOpacity style={{ flex: 1 }} onPress={hidemodal}>
                            <Icon name="arrow-left" style={{ fontSize: 30, color: 'black', }} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Danh sách nhập kho</Text>
                        <View style={{ flex: 1 }}></View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.text}>Tên người dùng</Text>
                    <TextInput style={styles.qrcode} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.text}>Mật khẩu</Text>
                    <TextInput style={styles.qrcode} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 5 }}>
                    <TouchableOpacity style={[styles.button, styles.shadow]}>
                        <Text style={styles.button_text}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={[styles.table1]}>
                    <ScrollView horizontal>
                        <View>
                            <Table>
                                <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.header_text} />
                            </Table>
                            {/* <ScrollView style={styles.dataWrapper}>
                                <Table>
                                    {
                                        datatable.map((rowData, index) => (
                                            <TouchableOpacity>
                                                <Row
                                                    key={index}
                                                    data={rowData}
                                                    widthArr={widthArr}
                                                    style={styles.row}
                                                    textStyle={styles.text}
                                                />
                                            </TouchableOpacity>

                                        ))
                                    }
                                </Table>
                            </ScrollView> */}
                        </View>
                    </ScrollView>
                </View>
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
        flex: 2,

    },
    table1: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#B2C8DF',
        padding: 10,
        borderRadius: 15
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
        marginRight: 10
    },
    header_text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        fontWeight: '500'
    },
    title: {
        width: 1000,
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
    button: { flex: 1, height: 50, width: 150, margin: 5, backgroundColor: '#E7E6E1', borderColor: 'black', borderWidth: 2, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
    button_text: { fontSize: 15, fontWeight: '700', color: '#070A52' },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 30,
        shadowRadius: 10,
        elevation: 10,
    },

})
export default ImportSheflERP;