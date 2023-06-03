import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Text, LogBox, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import Register from './Register';
import Camera1 from './Camera1';
import Camera from './Camera';
import Thongke from './Thongke';

LogBox.ignoreLogs(['Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.']);

const Import = () => {

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
    const [widthArr, setWidthArr] = useState([200, 150, 100, 140, 200, 80, 160, 100, 200, 200, 80, 200, 100, 400, 150, 130, 100]);

    const data = [
        {
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
        },
        {
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
        },

    ]

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

    const [qrcode, setQRCode] = useState('');

    const [chedo_CheckBox, setchedo_CheckBox] = useState(false)
    const [all_CheckBox, setall_CheckBox] = useState(false)
    const [shelf_CheckBox, setshelf_CheckBox] = useState(false)
    const [visible, setVisible] = useState(false);
    const [visibleThongKe, setVisibleThongKe] = useState(false);

    const showModalCamera = () => setVisible(true);
    const hideModalCamera = () => setVisible(false);

    const showModalThongKe = () => setVisibleThongKe(true);
    const hideModalThongKe = () => setVisibleThongKe(false);


    const containerStyle = { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 20, margin: 250, borderRadius: 20, marginLeft: 300, marginRight: 300 };
    const containerStyle1 = { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 20, margin: 50, borderRadius: 20 };

    const handleModalData = async (data) => {
        await setQRCode(data);
    };


    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={[styles.shadow, styles.function]}>
                    <ScrollView>
                        <View style={styles.function_header}>
                            <View style={styles.function_header_title}>
                                <View style={[styles.shadow, { borderColor: 'black', borderWidth: 2, justifyContent: 'center', padding: 5, borderRadius: 30, marginLeft: 30, marginTop: 10, backgroundColor: '#AEC2B6' }]}>
                                    <TouchableOpacity onPress={showModalCamera}>
                                        <Icon name="camera" style={{ fontSize: 20, color: 'black' }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TouchableOpacity >
                                        <Icon name="list" style={{ fontSize: 30, marginRight: 50, marginTop: 10, color: 'black' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.function_bottom]}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.function_bottom_left}>
                                    <View style={styles.function_bottom_left_1}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <CheckBox
                                                tintColors={{ true: '#F15927', false: 'black' }}
                                                disabled={false}
                                                value={chedo_CheckBox}
                                                onValueChange={(newValue) => setchedo_CheckBox(newValue)} />
                                            <Text style={styles.text_function}>Chế độ</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 70 }} >
                                            <CheckBox
                                                tintColors={{ true: '#F15927', false: 'black' }}
                                                disabled={false}
                                                value={all_CheckBox}
                                                onValueChange={(newValue) => setall_CheckBox(newValue)} />
                                            <Text style={styles.text_function}>Tất cả</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.function_bottom_left_2, { justifyContent: 'space-between' }]}>
                                        <ScrollView horizontal>
                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', width: 100 }}>
                                                    <CheckBox
                                                        tintColors={{ true: '#F15927', false: 'black' }}
                                                        disabled={false}
                                                        value={shelf_CheckBox}
                                                        onValueChange={(newValue) => setshelf_CheckBox(newValue)} />
                                                    <Text style={styles.text_function}>Kệ</Text>
                                                </View>
                                                <View style={{ flex: 1, width: 250 }}>
                                                    <Text style={[styles.text_function]}>{qrcode}</Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={[styles.text_function]}>Tổng: 528,00 (Cuộn: 16)</Text>
                                                </View>
                                            </View>
                                        </ScrollView>
                                    </View>

                                    <View style={[styles.function_bottom_left_3]}>
                                        <ScrollView horizontal >
                                            <View style={{ flex: 1, width: 50, marginRight: 50, justifyContent: 'center' }}>
                                                <Text style={[styles.text_function,]}>Quét</Text>
                                            </View>
                                            <View style={{ flex: 2, width: 200, marginRight: 50 }}>
                                                <TextInput style={{ borderColor: 'black', borderWidth: 2, borderRadius: 15 }} />
                                            </View>
                                            <View style={{ flex: 1, width: 300, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text style={[styles.text_function]} >SL Quét: 0</Text>
                                            </View>
                                        </ScrollView>
                                    </View>

                                </View>
                                <View style={styles.function_bottom_right}>
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.function_bottom_right_1}>
                                            <ScrollView horizontal>
                                                <TouchableOpacity style={[styles.button, styles.shadow]}>
                                                    <Text style={styles.button_text}>Nhập kho ERP</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.button, styles.shadow]}>
                                                    <Text style={styles.button_text}>Xuất kho ERP</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.button, styles.shadow]}>
                                                    <Text style={styles.button_text}>Nhập kệ ERP</Text>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </View>
                                        <View style={styles.function_bottom_right_2}>
                                            <ScrollView horizontal>
                                                <TouchableOpacity style={[styles.button, styles.shadow]} >
                                                    <Text style={styles.button_text}>Thông tin</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.button, styles.shadow]} onPress={showModalThongKe}>
                                                    <Text style={styles.button_text}>Thống kê</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.button, styles.shadow]}>
                                                    <Text style={styles.button_text}>Kiểm kê</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.button, styles.shadow]}>
                                                    <Text style={styles.button_text}>QC</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.button, styles.shadow]}>
                                                    <Text style={styles.button_text}>Nhập kho</Text>
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
                <Portal>
                    <Modal visible={visible} onDismiss={hideModalCamera} contentContainerStyle={containerStyle}>
                            <Camera1 callback={handleModalData} />
                    </Modal>
                    <Modal visible={visibleThongKe} onDismiss={hideModalThongKe} contentContainerStyle={containerStyle1}>
                        <ScrollView>
                            <Thongke />
                        </ScrollView>
                    </Modal>
                </Portal>

            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#FBFFDC' },
    header: {},
    text: { textAlign: 'center', fontWeight: '300', color: 'black', fontSize: 20, },
    text_function: { textAlign: 'center', fontWeight: '400', color: 'black', fontSize: 20, },
    dataWrapper: { marginTop: -1 },
    row: {},
    function: { flex: 1, marginBottom: 10, borderColor: '#9DB2BF', borderWidth: 2, borderRadius: 20, backgroundColor: 'white' },
    function_header: { flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    function_header_title: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
    function_bottom: { flex: 2, height: '100%' },
    function_bottom_left: { flex: 1 },
    function_bottom_left_1: { flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10, },
    function_bottom_left_2: { flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    function_bottom_left_3: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
    function_bottom_right: { flex: 1 },
    function_bottom_right_1: { flex: 1, flexDirection: 'row', justifyContent: 'center' },
    function_bottom_right_2: { flex: 1, flexDirection: 'row' },
    datatable: {
        flex: 2,
        backgroundColor: '#B2C8DF',
        padding: 10,
        borderRadius: 15
    },
    button: { width: 150, margin: 5, backgroundColor: '#E7E6E1', borderColor: 'black', borderWidth: 2, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
    button_text: { fontSize: 15, fontWeight: '700', color: '#070A52' },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 30,
        shadowRadius: 10,
        elevation: 10,
    },
    header_text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        fontWeight: '500'
    },
});

export default Import;