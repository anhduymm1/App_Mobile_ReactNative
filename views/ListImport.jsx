import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

function ListImport() {
    const [dateto, setDateTo] = useState(new Date());
    const [showdateto, setShowDateTo] = useState(false);

    const [datefrom, setDateFrom] = useState(new Date());
    const [showdatefrom, setShowDateFrom] = useState(false);

    const onChangeDateTo = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDateTo(false);
        setDateTo(currentDate);
    };

    const onChangeDateFrom = (event, selectedDate) => {
        const currentDate1 = selectedDate;
        setShowDateFrom(false);
        setDateFrom(currentDate1);
    };

    const [all_CheckBox, setall_CheckBox] = useState(false)
    const [tableHead, setTableHead] = useState(
        [
            'Mã QR',
            'Mã vật tư',
            'Kệ',
            'Nhà cung ứng',
            'Tên vật tư',
            'Màu',
            'Số lượng',
            'Số phiếu',
            'Cuộn',
            'Tên người dùng',
            'Total_Qty'
        ]
    );
    const [widthArr, setWidthArr] = useState([200, 150, 100, 100, 200, 80, 100, 200, 80, 100, 200]);

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
                    <TouchableOpacity style={{ flex: 1 }} >
                        <Icon name="arrow-left" style={{ fontSize: 30, color: 'black', }} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Danh sách nhập</Text>
                    <TouchableOpacity >
                        <Icon name="camera" style={{ fontSize: 20, color: 'black' }} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
            <View style={styles.bottom}>
                <ScrollView horizontal>
                    <View style={[styles.input, styles.shadow]}>
                        <View style={styles.input_left}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Số phiếu</Text>
                                <TextInput style={styles.text_input} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Mã vật tư</Text>
                                <TextInput style={styles.text_input} />
                            </View>
                        </View>
                        <View style={styles.input_right}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={styles.text1}>Nhà cung ứng</Text>
                                <TextInput style={styles.text_input} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',marginBottom: 10}}>
                                <Text style={styles.text2}>Từ</Text>
                                <TouchableOpacity onPress={() => setShowDateTo(true)}>
                                    <View style={{ flexDirection: "row", alignItems: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 15, padding: 10, marginRight: 10 }}>
                                        <Icon name="calendar" style={{ fontSize: 20, fontWeight: '600', color: 'black', marginRight: 10 }} />
                                        <Text style={styles.text2}>{dateto.toLocaleDateString()}</Text>
                                    </View>
                                </TouchableOpacity>
                                {showdateto &&
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={dateto}
                                        mode={"date"}
                                        onChange={onChangeDateTo}
                                    />
                                }
                                <Text style={styles.text2}>Đến</Text>
                                <TouchableOpacity onPress={() => setShowDateFrom(true)}>
                                    <View style={{ flexDirection: "row", alignItems: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 15, padding: 10, marginRight: 10 }}>
                                        <Icon name="calendar" style={{ fontSize: 20, fontWeight: '600', color: 'black', marginRight: 10 }} />
                                        <Text style={styles.text2}>{datefrom.toLocaleDateString()}</Text>
                                    </View>
                                </TouchableOpacity>
                                {showdatefrom &&
                                    <DateTimePicker
                                        testID="dateTimePicker1"
                                        value={datefrom}
                                        mode={"date"}
                                        onChange={onChangeDateFrom}
                                    />
                                }
                            </View>

                        </View>
                    </View>   
                </ScrollView>

                <View style={styles.table2}>
                    <ScrollView horizontal>
                        <View>
                            <Table>
                                <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.header_text} />
                            </Table>
                            <ScrollView style={styles.dataWrapper}>
                                <Table >
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
                            </ScrollView>
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
        backgroundColor: 'white',
        width: 1260,
        marginLeft: 10,
        marginRight: 10
    },
    input_left: {
        flex: 1,
        marginRight: 70
    },
    input_right: {
        flex: 1
    },
    input_button:{
        flex:0.5,
        backgroundColor:'red'
    },
    table2: {
        flex: 1.5,
        backgroundColor: '#B2C8DF',
        padding: 10,
        borderRadius: 15,
        width: 1260,
        marginLeft: 10,
        marginRight: 10
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
        width: 200
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 40,
        shadowRadius: 10,
        elevation: 10,
    },
    button1: {
        height: 50,
        width: 40,
        backgroundColor: '#E7E6E1',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    text2: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginRight: 10
    },
    button: {
        height: 60,
        width: 100,
        backgroundColor: '#E7E6E1',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
})
export default ListImport;