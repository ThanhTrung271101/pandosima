import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { startTransition, useEffect, useRef, useState } from 'react';
import Button from './src/components/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync()
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermission(cameraStatus.status === 'granted')
    })()
  }, [])

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync()
        console.log(data)
        setImage(data.uri)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const savePicture = async () => {
    if (image) {
      try {
        await MediaLibrary.getAssetsAsync(image)
        alert('Saved picture! 😀')
        setImage(null)
      } catch (e) {
        console.log(e)
      }
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={styles.container}>
      {!image ?
        <Camera
          style={styles.camera}
          type={type}
          FlashMode={flash}
          ref={cameraRef}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 50
          }}>
            <Button icon={"retweet"} onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back)
            }}></Button>
            <Button
              icon={"flash"}
              color={
                flash === Camera.Constants.FlashMode.off
                  ? 'red'
                  : 'white'
              } onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off)
              }}></Button>
          </View>
        </Camera>
        : <Image source={{ uri: image }} style={styles.camera} />
      }
      <View>
        {image ?
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 50
          }}>
            <Button title={"Re-take"} icon={"retweet"} onPress={() => setImage(null)}></Button>
            <Button title={"Save"} icon={"camera"} onPress={savePicture}></Button>
          </View>
          :
          <Button title={"Take a picture"} icon={"camera"} onPress={takePicture}></Button>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});
