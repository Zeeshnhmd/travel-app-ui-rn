import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { sortCategoryData } from '../constants';
import { theme } from '../../theme';

export default function ShortCategories() {
	const [activeSort, setActiveSort] = useState('Popular');
	return (
		<View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full">
			{sortCategoryData.map((el, index) => (
				<TouchableOpacity
					onPress={() => setActiveSort(el)}
					key={index}
					className={`p-3 px-4 rounded-full flex ${
						activeSort === el ? 'bg-white shadow' : ''
					}`}
				>
					<Text
						className="font-semibold"
						style={{
							fontSize: wp(4),
							color: activeSort === el ? theme.text : 'rgba(0,0,0,0.6)',
						}}
					>
						{el}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}
