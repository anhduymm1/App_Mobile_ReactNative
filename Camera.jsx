import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

function Camera() {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [text,setText] = useState('Not yet Scan')
  const [acivate, setActive] = useState(true)

  // const getBarCodeScannerPermissions = async () => {
  //   const { status } = await QRCodeScanner.requestPermissionsAsync();
  //   setHasPermission(status === 'granted');
  // };

  // useEffect(() => {
  //   getBarCodeScannerPermissions();
  // }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    await setActive(false)
    await setScanned(true)
    console.log(data)
  }
 
  pressButton = async () =>{
    await setActive(true)
    await setScanned(false)
  }



  return (
    <View style={styles.container}>
      <QRCodeScanner
        showMarker={true}
        onRead={ handleBarCodeScanned}
        reactivate={acivate}
        camerastyle={styles.camera}
        topViewStyle={styles.topView}
        bottomViewStyle={styles.bottomView}
        markerStyle={styles.marker}
      />
     {scanned && <Button title={'Tap to Scan Again'} onPress={pressButton } />}
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
  camera: {
    height: '100%',
  },
  marker: {
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
  },
  topView: {
    flex: 0.3,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomView: {
    flex: 0.7,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Camera;