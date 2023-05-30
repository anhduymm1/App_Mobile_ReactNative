import React from "react";
import { View, Text, StyleSheet, Table, ScrollView } from "react-native";
import { DataTable } from 'react-native-paper';

function Import() {

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

    return (
        <View style={styles.container}>
            <DataTable style={styles.table} >
                    <DataTable.Header >
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Mã QR</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Mã vật tư</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Kệ</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Nhà cung ứng</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Tên vật tư</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Màu</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Kích thước</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Số lượng</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Số lượng in</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Số phiếu</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Cuộn</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Ngày sản xuất</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Mã nhà cung ứng</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Lệnh</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Tên người dùng</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Qty_Shelves</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={styles.header}>
                            <View>
                                <Text style={styles.title}>Total_Qty</Text>
                            </View>
                        </DataTable.Title>
                    </DataTable.Header>

                    {/* {
                        data.map((item, index) => 
                          
                                <DataTable.Row key={index}>
                                    <DataTable.Cell>
                                        <Text>{item["Mã QR"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell><
                                        Text>{item["Mã vật tư"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Kệ"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Nhà cung ứng"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Tên vật tư"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Màu"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Kích thước"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Số lượng"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Số lượng in"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Số phiếu"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Cuộn"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Ngày sản xuất"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Mã nhà cung ứng"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Lệnh"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Tên người dùng"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Qty_Shelves"]}</Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text>{item["Total_Qty"]}</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            
                        )
                    } */}
              

            </DataTable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll_view: {
        flex: 1
    },
    table: {

    },
    header: {
    },
    title: {
        color: 'black'
    },

})
export default Import;