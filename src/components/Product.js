import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Card, CardSection } from './common';

class Product extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<View style={{ flexDirection: 'row'}}>
						<Image 
							style={{ width: null, height: 200, flex: 1 }}
							source = {{uri: 'https://static.pexels.com/photos/33385/giant-rubber-bear-gummibar-gummibarchen-fruit-gums.jpg'}}
						/>
					</View>
					<Text style= {{ fontWeight: '600', fontSize: 18, color: '#383838'}}>
						Hipster Ipsum
					</Text>
				</CardSection>
				<CardSection>
					<Text>
						Sriracha street art craft beer wayfarers edison bulb, ugh XOXO freegan. 
						Williamsburg pinterest green juice try-hard. Shabby chic DIY squid +1 scenester humblebrag heirloom.
						Try-hard butcher bespoke +1, selvage neutra banjo activated charcoal keffiyeh ennui readymade fap. 
						Twee yr scenester, neutra lumbersexual echo park put a bird on it locavore. 
					</Text>
				</CardSection>
			</Card>
		);
	}
}

export default Product;
