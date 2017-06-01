import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
	render() {
		const { viewStyle, textStyle } = styles;
		return (
			<View style={viewStyle}>
				<Text style={textStyle}>
					{this.props.children}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		paddingTop: 32,
		paddingBottom: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#ccc'
	},
	textStyle: {
		fontSize: 18,
		color: '#383838',
		fontWeight: '600'
	}
});

export { Header };