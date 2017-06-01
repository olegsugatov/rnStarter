import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Card extends Component {
	render() {
		const { viewStyle } = styles;
		return (
			<View style={ viewStyle }>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		padding: 8,
		margin: 8,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 2
	}
});

export { Card };