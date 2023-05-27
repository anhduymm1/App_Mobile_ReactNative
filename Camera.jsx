import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

function Camera() {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [text,setText] = useState('Not yet Scan')

  // const getBarCodeScannerPermissions = async () => {
  //   const { status } = await QRCodeScanner.requestPermissionsAsync();
  //   setHasPermission(status === 'granted');
  // };

  // useEffect(() => {
  //   getBarCodeScannerPermissions();
  // }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    await setScanned(true)
    await setText(data)
    await console.log(data)
  };


  return (
    <View style={styles.container}>
      <QRCodeScanner
        showMarker={true}
        onRead={scanned==false ? handleBarCodeScanned : undefined }
        
        camerastyle={styles.camera}
        topViewStyle={styles.topView}
        bottomViewStyle={styles.bottomView}
        markerStyle={styles.marker}
      />
      <Text>{text}</Text>
     {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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