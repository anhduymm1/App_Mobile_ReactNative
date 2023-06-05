import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'

function QC({hidemodal}) {

    const [tableHead, setTableHead] = useState(
        [
            'RY',
            'QC Date',
            'Kết Quả',
            'Diễn giải',
            'Lý Do',
            'Tài khoản',
            'Tên',
        ]
    );
    const [widthArr, setWidthArr] = useState([200, 150, 100, 300, 200, 100, 100]);

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
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={hidemodal}>
                        <Icon name="arrow-left" style={{ fontSize: 30, color: 'black',}} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Kiểm duyệt QC</Text>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TextInput style={styles.qrcode} />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.table1}>
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
        flex: 3,

    },
    table1: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#B2C8DF',
        padding: 10,
        borderRadius: 15
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
    }
})
export default QC;