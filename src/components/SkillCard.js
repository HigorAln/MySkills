import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export function SkillCard({ skill }) {
	return (
		<TouchableOpacity style={styles.buttonSkill} key={`${skill}`}>
			<Text style={styles.textSkill}>{skill}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonSkill: {
		padding: 15,
		backgroundColor: '#1f1e25',
		borderRadius: 50,
		marginVertical: 5,
		alignItems: 'center',
	},
	textSkill: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
	},
});
