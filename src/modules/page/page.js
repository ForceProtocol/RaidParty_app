import React, { Component } from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import Background from '../../assets/images/bg_logo_small.png';
import LoginForm from '../../components/Authentication/LoginForm'
import AboutHeader from '../../components/common/header.js'

class AboutPage extends Component {
	rightComponent = () => <Button transparent> <Icon name="menu" /> </Button>
	render() {
        const { navigate } = this.props.navigation;
		const openDrawer = () => navigate("DrawerOpen");
		let { height, width } = Dimensions.get('window');

		return (
			<Container>
				<ImageBackground
				  source={Background}
				  style={[styles.backgroundImage, { height:height, width: width }]}
				>
				    <AboutHeader
				        pageName="About"
						nav={openDrawer}
						rightComponent={this.rightComponent}
				    />
				    <Content>
						<Button
							title="Go to Home page"
							onPress={() => navigate('home', { name: 'Jane' })
							}
						/>
				    </Content>
				</ImageBackground>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default AboutPage