import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: ISkillCardProps) {
	return (
		<TouchableOpacity style={styles.buttonSkill} key={`${skill}`} {...rest}>
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

