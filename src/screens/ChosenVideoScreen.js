import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import VideoPlayer from '../components/VideoPlayer'

const ChosenVideoScreen=({navigation})=>{
    // const {name} = route.params;
    const video=navigation.getParam('video','NO-URL');
	return (
		<View style={styles.viewStyle} >
            <View style={styles.innnerViewStyle}>
                <Text style={styles.textStyle}>Playing Now: {video.videoName} </Text>
                <VideoPlayer url={video.url}/>
            </View>
		</View>
	)
};

const styles =StyleSheet.create({
    innnerViewStyle:{
        marginTop:10,
        flex:1
    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color:'white',
        marginBottom:10
    },
});

export default ChosenVideoScreen;