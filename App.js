import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Home } from './src/Pages/Home';

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor={'#121015'} />
			<Home />
		</>
	);
}
