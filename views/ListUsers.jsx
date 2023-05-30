
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { DataTable } from 'react-native-paper';

function ListUsers() {
  var [data, setData] = useState([])
  const getUsers = async () => {
    const url = "http://192.168.30.100:8181/api/Values/getListUsers"
    let result = await fetch(url)
    result = await result.json()
    setData(result)
    console.log(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <View style={styles.container}>
      <Text style={styles.title}>List users</Text>
      <DataTable>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title><Text>User ID</Text></DataTable.Title>
          <DataTable.Title><Text>User Password</Text></DataTable.Title>
        </DataTable.Header>
        {
            data.map((item,index) =>
              <DataTable.Row key={index}>
                <DataTable.Cell><Text>{item["User_ID"]}</Text></DataTable.Cell>
                <DataTable.Cell><Text>{item["User_Password"]}</Text></DataTable.Cell>
              </DataTable.Row>

            )
        }
      </DataTable>
    </View>


  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center'
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
})
export default ListUsers;
