/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

import { destinationData } from '../constants';

export default function Destinations() {
	const navigation = useNavigation();
	return (
		<View className="mx-4 flex-row justify-between flex-wrap">
			{destinationData.map((el, index) => (
				<DestinatioCard navigation={navigation} el={el} key={index} />
			))}
		</View>
	);
}

const DestinatioCard = ({ el, navigation }) => {
	const [toogleFavourite, setToogleFavourite] = useState(false);
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Destination', { ...el })}
			style={{ width: wp(44), height: wp(65) }}
			className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
		>
			<Image
				source={el.image}
				style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
				className="absolute"
			/>
			<LinearGradient
				colors={['transparent', 'rgba(0, 0,0,0.8)']}
				style={{
					width: wp(44),
					height: hp(15),
					borderBottomLeftRadius: 35,
					borderBottomRightRadius: 35,
				}}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				className="absolute bottom-0"
			/>

			<TouchableOpacity
				onPress={() => setToogleFavourite(!toogleFavourite)}
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
				className="absolute top-1 right-3 rounded-full p-3"
			>
				<HeartIcon size={wp(5)} color={toogleFavourite ? 'red' : 'white'} />
			</TouchableOpacity>

			<Text style={{ fontSize: wp(4) }} className="text-white font-semibold">
				{el.title}
			</Text>
			<Text style={{ fontSize: wp(2.2) }} className="text-white">
				{el.shortDescription}
			</Text>
		</TouchableOpacity>
	);
};
/* eslint-disable react/prop-types */
