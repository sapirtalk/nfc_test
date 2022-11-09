import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import WriteScreen from './WriteScreen';

export default function App() {
	const Stack = createNativeStackNavigator();

	const infoAlert = () =>
		Alert.alert('Info', 'This is a simple app to experiment with read and write NFC tags. Made by Sapir Talker', [
			{ text: 'OK', onPress: () => console.log('OK Pressed') }
		]);

	return (
		<NavigationContainer>
			<StatusBar style="light" />
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#f4511e',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center'
					},
					headerTintColor: '#fff',
					headerTitleAlign: 'center',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 20,
						textAlign: 'center',
						alignSelf: 'center'
					}
				}}
			>
				<Stack.Screen
					name="NFC Reader/Writer"
					component={HomeScreen}
					options={{
						headerRight: () => <Button onPress={infoAlert} title="Info" color="black" />
					}}
				/>
				<Stack.Screen name="Write to NFC device" component={WriteScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	writeBtn: {
		backgroundColor: 'blue',
		color: 'white',
		padding: 10,
		borderRadius: 5
	}
});
