import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { Camera, CameraType } from 'expo-camera';
import * as faceapi from 'face-api.js';
import { useEffect, useState } from 'react';

export default function Camera_({ navigation }: RootStackScreenProps<'Camera_'>) {
  const [faces, setFaces] = useState<faceapi.FaceDetection[]>([]);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      await faceapi.loadTinyFaceDetectorModel('/models');
      setIsCameraReady(true);
    })();
  }, []);

  const handleFacesDetected = ({ faces }: { faces: any }) => {
    setFaces(faces);
  };

  console.log(isCameraReady);

  return (
    <View style={styles.container}>
      {isCameraReady && (
        <Camera
          style={styles.camera}
          type={CameraType.front}
          // onFacesDetected={handleFacesDetected}
          // faceDetectorSettings={{
          //   mode: 'fast',
          //   detectLandmarks: true,
          //   runClassification: true,
          // }}
        >
          {faces.length > 0 && <Text style={styles.faceCount}>{faces.length} face(s) detected</Text>}
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexbox1: {
    flex: 1,
    flexDirection: 'row',
  },
  flexbox2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },

  BackCard: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  signupbtn: {
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: 200,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    borderColor: '#077294',
  },

  roundButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 80,
    marginStart: 15,
    backgroundColor: 'orange',
  },

  textInput: {
    width: 300,
    height: 40,
    margin: 10,
    marginTop: 80,
    borderWidth: 1,
    padding: 10,

    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  btn: {
    width: 200,
    height: 45,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: '#077294',
  },

  camera: {
    width: '100%',
    height: '50%',
  },
  faceCount: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
