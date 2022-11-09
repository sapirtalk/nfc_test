import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image source={require('./assets/nfc.png')} style={styles.image} />
			<View style={styles.btnContainer}>
				<TouchableOpacity style={styles.readBtn}>
					<Text style={styles.buttonText}>Read From NFC Device</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.writeBtn}
					onPress={() => {
						navigation.navigate('Write to NFC device');
					}}
				>
					<Text style={styles.buttonText}>Write To NFC Device</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 100,
		paddingBotom: 100
	},
	writeBtn: {
		backgroundColor: 'lightblue',
		padding: 10,
		margin: 10,
		marginTop: 50,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		width: 375
	},
	readBtn: {
		backgroundColor: 'orange',
		padding: 10,
		margin: 10,
		marginTop: 50,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		alignItems: 'center',
		width: 375
	},
	buttonText: {
		color: 'black',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		alignSelf: 'center',
		padding: 10,
		fontStyle: 'italic'
	},
	btnContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		margin: 10
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'contain'
	}
});
