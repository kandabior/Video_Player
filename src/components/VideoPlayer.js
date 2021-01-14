import React, {useState} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import Video from 'react-native-video'

VideoPlayer=({url}) => {
    // console.log(url)
    return (<View >
          
            <Video
                source={url}   
                style={styles.backgroundVideo}
                muted={false}
                repeat={false}
                volume={1.0}
                rate={1.0}/>
        </View>
    )
}

const styles= StyleSheet.create({
    
    backgroundVideo: {
        alignSelf:'center',
        
        width:'100%',
        height:200,
        flex:1,
        
        
      },
     
    
})

export default VideoPlayer;
