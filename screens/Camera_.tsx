import { RootStackScreenProps } from '../types';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { ResizeMode, Video } from 'expo-av';

export default function Camera_({ navigation }: RootStackScreenProps<'Camera_'>) {
  const [hasAudioPermission, setHasAudioPermission]: any = useState(null);
  const [hasCameraPermission, setHasCameraPermission]: any = useState(null);
  const [camera, setCamera]: any = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const video: any = React.useRef(null);
  const [status, setStatus]: any = React.useState({});

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');
    })();
  }, []);

  const stopVideo = async () => {
    camera?.stopRecording();
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 10,
      });
      setRecord(data.uri);
      console.log(data.uri);
    }
  };

  return (
    <View>
      <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} type={type} ratio={'4:3'} />
      <Button
        title="Flip Video"
        onPress={() => {
          setType(type === CameraType.back ? CameraType.front : CameraType.back);
        }}
      ></Button>
      <Button title="Take video" onPress={() => takeVideo()} />
      <Button title="Stop Video" onPress={() => stopVideo()} />
      <Button
        title="Upload video"
        onPress={() => {
          if (record === null) return alert('No video recorded');
          handleUpload(record as any);
        }}
      />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: record as any,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() => (status.isPlaying ? video.current?.pauseAsync() : video.current.playAsync())}
        />
      </View>
    </View>
  );
}

const handleUpload = async (record: string | Blob) => {
  const videoData = new FormData();
  videoData.append('file', record, 'video.mp4');
  try {
    const response = await fetch('http://78.46.102.232:5001/users/upload', {
      method: 'POST',
      body: videoData,
    });
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.error(error);
  }
};

const styles = StyleSheet.create({
  fixedRatio: {
    width: '100%',
    height: '50%',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
