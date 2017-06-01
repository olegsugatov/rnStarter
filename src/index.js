import React, { Component } from 'react';
import { View } from 'react-native';

// components
import { Header } from './components/common';
import Product from './components/Product';

class App extends Component {
	render() {
		return (
			<View>
				<Header>
					Title
				</Header>
				<Product />
			</View>
		);
	}
}

export default App;