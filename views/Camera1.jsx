import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

function Camera1({callback}) {
  const [qrcode,setQRCode] = useState('')



  const handleBarCodeScanned =  ({ type, data }) => {
     setQRCode(data)
     callback(data);
  }


  return (
    <View style={styles.container}>
      <View style={styles.view_camera}>
        <QRCodeScanner
          cameraStyle={styles.camera}
          onRead={handleBarCodeScanned}
         />
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_camera: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  camera: {
  },
});

export default Camera1;