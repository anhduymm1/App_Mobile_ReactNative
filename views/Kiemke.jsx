import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Button, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from '@react-native-community/checkbox';
import { Table, Row } from 'react-native-table-component';
import DateTimePicker from '@react-native-community/datetimepicker';

function Kiemke({navigation,route}) {

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
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() =>  {
                        if(route.params == undefined){                    
                            navigation.navigate('Chức năng')
                        }
                        else if(route.params["chuyentrang"] == "1"){                            
                            navigation.navigate('Nhập vật tư')
                        }      
                        }  
                    } >
                        <Icon name="arrow-left" style={{ fontSize: 30, color: 'black', marginLeft:20}} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Danh sách kiểm kê</Text>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <ScrollView horizontal>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <CheckBox
                                tintColors={{ true: '#F15927', false: 'black' }}
                                disabled={false}
                            />
                            <Text style={styles.text1}>Tất cả</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <CheckBox
                                tintColors={{ true: '#F15927', false: 'black' }}
                                disabled={false}
                            />
                            <Text style={styles.text1}>Ngày chốt tự động</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <CheckBox
                                tintColors={{ true: '#F15927', false: 'black' }}
                                disabled={false}
                            />
                            <TouchableOpacity style={styles.button1}>
                                <Icon name="angle-left" style={{fontSize:20,fontWeight:'600',color:'black'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShow(true)}>
                                <View style={{ flexDirection: "row", alignItems: 'center',borderColor:'black',borderWidth:2,borderRadius:15,padding:10,marginRight:10 }}>
                                    <Icon name="calendar" style={{fontSize:20,fontWeight:'600',color:'black',marginRight:10}}/>
                                    <Text style={[styles.text1,{marginRight:10}]}>{date.toLocaleDateString()}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button1}>
                                <Icon name="angle-right" style={{fontSize:20,fontWeight:'600',color:'black'}}/>
                            </TouchableOpacity>
                            {show &&
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={"date"}
                                    onChange={onChange}
                                />
                            }

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <TextInput style={{ width: 200, borderColor: 'black', borderRadius: 15, borderWidth: 2 }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <TextInput style={{ width: 100, borderColor: 'black', borderRadius: 15, borderWidth: 2 }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', marginLeft: 10, justifyContent: "center" }}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text1}>Tìm kiếm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={[styles.button,{marginRight:-10}]}>
                                <Text style={styles.text1}>Xuất excel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <CheckBox
                                tintColors={{ true: '#F15927', false: 'black' }}
                                disabled={false}
                            />
                            <Text style={styles.text1}>Pallet</Text>
                        </View>
                    </ScrollView>

                </View>
            </View>
            <View style={styles.bottom}>
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
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    top: {
        flex: 1,
        borderColor: '#B2C8DF',
        borderWidth: 3,
        borderRadius: 25
    },
    bottom: {
        flex: 3,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: '#B2C8DF',
    },
    title: {
        fontSize: 40,
        color: '#070A52',
        fontWeight: 500,
        flex: 2,
        textAlign: 'center'

    },
    text1: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
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
    header_text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        fontWeight: '500'
    },
    text: { textAlign: 'center', fontWeight: '400', color: 'black', fontSize: 20, },
    dataWrapper: { marginTop: -1 },
    row: {padding:13},

})
export default Kiemke