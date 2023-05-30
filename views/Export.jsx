import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'

const Export = () => {
    const [tableHead, setTableHead] = useState(
        [
            'Mã QR',
            'Mã vật tư',
            'Kệ',
            'Nhà cung ứng',
            'Tên vật tư',
            'Màu',
            'Kích thước',
            'Số lượng',
            'Số lượng in',
            'Số phiếu',
            'Cuộn',
            'Ngày sản xuất',
            'Mã nhà cung ứng',
            'Lệnh',
            'Tên người dùng',
            'Qty_Shelves',
            'Total_Qty'
        ]
    );
    const [widthArr, setWidthArr] = useState([200, 150, 100, 100, 200, 80, 160, 80, 100, 100, 80, 100, 80, 400, 100, 100, 100]);

    const data = [{
        "Mã QR": "P89230418000042",
        "Mã vật tư": "P890009570",
        "Kệ": "O1-01",
        "Nhà cung ứng": "CHIYA",
        "Tên vật tư": "LJ B 0001 +DC",
        "Màu": "A0QM",
        "Kích thước": '44"',
        "Số lượng": "33",
        "Số lượng in": "33/1757.1 YRD",
        "Số phiếu": "20230401387",
        "Cuộn": "6/6",
        "Ngày sản xuất": "",
        "Mã nhà cung ứng": "VC11",
        "Lệnh": "AH2306-476 AH2305-A84-A83-A82-A81-A80-A79-A78-A77-A76-A75-A74-A73-A72-A71-A70",
        "Tên người dùng": "24972",
        "Qty_Shelves": "",
        "Total_Qty": "1757,1000000"
    }]

    var datatable = data.map((item) => [
        item['Mã QR'],
        item['Mã vật tư'],
        item['Kệ'],
        item['Nhà cung ứng'],
        item['Tên vật tư'],
        item['Màu'],
        item['Kích thước'],
        item['Số lượng'],
        item['Số lượng in'],
        item['Số phiếu'],
        item['Cuộn'],
        item['Ngày sản xuất'],
        item['Mã nhà cung ứng'],
        item['Lệnh'],
        item['Tên người dùng'],
        item['Qty_Shelves'],
        item['Total_Qty']
    ])

    const [chedo_CheckBox, setchedo_CheckBox] = useState(false)
    const [all_CheckBox, setall_CheckBox] = useState(false)
    const [shelf_CheckBox, setshelf_CheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.function}>
                <ScrollView>
                    <View style={styles.function_header}>
                        <View style={styles.function_header_title}>
                            <Text>Nhập vật tư</Text>
                            <Icon name="camera" />
                        </View>
                    </View>
                    <View style={styles.function_bottom}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={styles.function_bottom_left}>
                                <View style={styles.function_bottom_left_1}>
                                    <CheckBox
                                        disabled={false}
                                        value={chedo_CheckBox}
                                        onValueChange={(newValue) => setchedo_CheckBox(newValue)} />
                                    <Text style={styles.text}>Chế độ</Text>
                                    <CheckBox
                                        disabled={false}
                                        value={all_CheckBox}
                                        onValueChange={(newValue) => setall_CheckBox(newValue)} />
                                    <Text  style={styles.text}>Tất cả</Text>
                                </View>
                                <View style={styles.function_bottom_left_2}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <CheckBox
                                            disabled={false}
                                            value={shelf_CheckBox}
                                            onValueChange={(newValue) => setshelf_CheckBox(newValue)} />
                                        <Text  style={styles.text}>Kệ</Text>
                                    </View>
                                    <Text  style={styles.text}>O1-01</Text>
                                    <Text  style={styles.text}>Tổng: 528,00 (Cuộn: 16)</Text>
                                </View>
                                <View style={styles.function_bottom_left_3}>
                                    <Text  style={styles.text}>Quét</Text>
                                    <TextInput style={{ borderColor: 'black', borderWidth: 1, borderRadius: 15 }} />
                                    <Text  style={styles.text}>SL Quét: 0</Text>
                                </View>
                            </View>
                            <View style={styles.function_bottom_right}>
                                <View style={{ flex: 1 }}>
                                    <View style={styles.function_bottom_right_1}>
                                        <ScrollView horizontal>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Nhập kho ERP</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Xuất kho ERP</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Nhập kệ ERP</Text>
                                            </TouchableOpacity>     
                                        </ScrollView>
                                    </View>
                                    <View style={styles.function_bottom_right_2}>
                                        <ScrollView horizontal>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Thông tin</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Thống kê</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Kiểm kê</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>QC</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button}>
                                                <Text>Nhập kho</Text>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.datatable}>
                <ScrollView horizontal>
                    <View>
                        <Table>
                            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                {
                                    datatable.map((rowData, index) => (
                                        <TouchableOpacity onLongPress={() => console.log(index)}>
                                            <Row
                                                key={index}
                                                data={rowData}
                                                widthArr={widthArr}
                                                style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
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
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100', color: 'black' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    function: { flex: 1, marginBottom: 10 },
    function_header: { flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' },
    function_header_title: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
    function_bottom: { flex: 2, backgroundColor: 'gray', height: '100%' },
    function_bottom_left: { flex: 1 },
    function_bottom_left_1: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    function_bottom_left_2: { flex: 1, flexDirection: 'row', alignItems: 'center', },
    function_bottom_left_3: { flex: 1, flexDirection: 'row', alignItems: 'center', },
    function_bottom_right: { flex: 1 },
    function_bottom_right_1: { flex: 1, flexDirection: 'row' },
    function_bottom_right_2: { flex: 1, flexDirection: 'row' },
    datatable: { flex: 2 },
    button: { width: 100, margin: 5, backgroundColor: 'gray', borderColor: 'white', borderWidth: 2, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
});

export default Export;