import React from 'react'
import {Image,Text, View,StyleSheet} from 'react-native'

const VideoDetail=({video})=>{
    return (
        <View  >
            <Image style={styles.imageStyle} source={video.poster}/>
            <Text style={styles.textStyle}>Video name: {video.videoName}</Text>
            <View style={styles.lineStyle}/>
                
           
        </View>
    )
}

const styles= StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight:20
    },
    imageStyle:{
        borderRadius:10,
        width:325,
        height:200,
        alignSelf: 'center'
        
    },
    itemStyle:{
        marginBottom: 20,
        alignItems: 'center'
    },
    lineStyle:{
        width:340,
        alignSelf: 'center',
        borderColor: 'grey',
        borderBottomWidth: 2,
        marginTop:5

    }
    
    
});
export default VideoDetail;