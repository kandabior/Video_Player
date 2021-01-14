import React, {useState} from 'react'
import {View,FlatList,StyleSheet,Text,TouchableOpacity} from 'react-native'
import VideoDetail from '../components/VideoDetail'

const videos=[
	{
		id: '0',
		videoName:'Omer Adam',
		poster: require('../../assets/sample1.jpg'),
		url: require('../../assets/sample1.mp4')
	},{
		id:'1',
		videoName:'Yuval Dayan',
		poster:require('../../assets/sample2.jpg'),
		url:require('../../assets/sample2.mp4')
	},{
		id:'2',
		videoName:'Idan Haviv',
		poster: require('../../assets/sample3.jpg'),
		url:require('../../assets/sample3.mp4')
	}
];

const HomeScreen=({navigation})=>{
	// const [URL, setURL] =useState('');
	return (
		<View>
			
			<FlatList
				horizontal={false}
				data ={videos}
				keyExtractor={(item)=>item.id}
				renderItem={({item})=> {
					return <TouchableOpacity style= {styles.itemStyle} onPress={()=>{
						// setURL(item.url)
						navigation.navigate('WatchScreen', {video: item})
					}}>
 								<VideoDetail style={styles.itemStyle} video={item}/>
					</TouchableOpacity>
				} }
			/>
		</View>
	)
};

const styles =StyleSheet.create({
	itemStyle:{
		justifyContent:"center",
		marginBottom: 5,
		marginTop:10
    }

});

export default HomeScreen;