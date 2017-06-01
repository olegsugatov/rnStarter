import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class CardSection extends Component {
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
		borderBottomWidth: 1,
		borderColor: '#ccc',
	}
});

export { CardSection };