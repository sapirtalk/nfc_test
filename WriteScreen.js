import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { React, useEffect } from 'react';
import { useState } from 'react';
import writeNdef from './functions/writeNdef';
import NfcManager from 'react-native-nfc-manager';

NfcManager.start();

const WriteScreen = () => {
	const [ status, setStatus ] = useState(false);

	useEffect(
		() => {
			if (status === false) {
				writeNdef({ type: 'text', value: 'Hello NFC' }).then((result) => {
					setStatus(result);
				});
			} else {
				alert('NFC written successfully');
			}
		},
		[ status ]
	);

	return (
		<View style={styles.container}>
			{status ? (
				<View style={styles.container}>
					<Text style={styles.text}>NFC Tag Written</Text>
					<Button
						title="Write again"
						onPress={() => {
							setStatus(false);
						}}
					/>
				</View>
			) : (
				<View>
					<Text style={styles.text}>
						Please make sure the NFC tag is less then 5cm away from the mobile device
					</Text>

					<ActivityIndicator
						size="large"
						color="blue"
						style={{ transform: [ { scaleX: 2 }, { scaleY: 2 } ], marginTop: 100 }}
					/>
				</View>
			)}
		</View>
	);
};

export default WriteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 25,
		color: 'black',
		textAlign: 'center',
		margin: 10,
		padding: 10
	}
});
