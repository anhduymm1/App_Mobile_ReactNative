import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { DataTable } from 'react-native-paper';

function Camera() {
  const [scanned, setScanned] = useState(false);
  const [active, setActive] = useState(false);
  const [material, setListMaterial] = useState([])
  let scanner;

  const startScan = () => {
    if (scanner) {
      scanner._setScanning(false);
    }
  };

  getMaterial = async (material) => {
    const url = "http://192.168.30.100:8181/api/Values/getListMaterial"
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        material
      )
    }
    ).then(response => response.json())
      .then(data => {
        setListMaterial(data)
      })
  }


  const handleBarCodeScanned = async ({ type, data }) => {
    await setScanned(true)
    await getMaterial(data);
    setActive(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.view_camera}>
        <QRCodeScanner
          cameraStyle={styles.camera}
          onRead={handleBarCodeScanned}
          ref={(camera) => scanner = camera}
         
         />
       {active && <Button title={'Tap to Scan Again'} onPress={() => [startScan(),setActive(false)]} />}
      </View>
       
      {/* <View style={styles.view_table}> */}
         <ScrollView horizontal > 
          <DataTable >
            <DataTable.Header>
              <DataTable.Title>
                <View >
                  <Text>Barcode</Text>
                </View>
              </DataTable.Title>
              <DataTable.Title>
                <View>
                  <Text>Stock_In_Out_Status</Text>
                </View>
              </DataTable.Title>
              <DataTable.Title >
                <View>
                  <Text>QTY</Text>
                </View>
              </DataTable.Title>
              <DataTable.Title>
                <View>
                  <Text>Storage_Serial</Text>
                </View>
              </DataTable.Title>
              <DataTable.Title>
                <View>
                  <Text>Material_No</Text>
                </View>
              </DataTable.Title>
              <DataTable.Title>
                <View>
                  <Text>Material_Name</Text>
                </View>                
              </DataTable.Title>
            </DataTable.Header>
            {
              material.length ?
                material.map((item) =>
                  <DataTable.Row key={item["Barcode"]}>
                    <DataTable.Cell >
                      <View>
                        <Text > {item["Barcode"]}</Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell >
                      <View >
                        <Text >{item["Stock_In_Out_Status"]}</Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell >
                      <View >
                        <Text>{item["QTY"]}</Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <View>
                        <Text>{item["Storage_Serial"]}</Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell >
                      <View>
                        <Text>{item["Material_No"]}</Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell >
                      <View>
                        <Text>{item["Material_Name"]}</Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                )
                : null
            }
          </DataTable>
         </ScrollView> 
      {/* </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_camera: {
    flex:1,
  },
  view_table:{
    flex:2,
    flexDirection:'row'
  },
  camera: {
    height:'50%',
    width:'50%',
  },
  marker: {
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    height:'200%',
   
  },
  topView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

});

export default Camera;