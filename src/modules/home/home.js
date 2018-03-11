import React, { Component } from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import Background from '../../assets/images/bg_logo_small.png';
import LoginForm from '../../components/Authentication/LoginForm'
import HomeHeader from '../../components/common/header.js'

class HomeScreen extends Component {

	componentWillMount() {
		// if token expired
		// this.props.navigation.navigate('login');
	}

	render() {
		const rightComponent = () => <Button transparent> <Icon name="menu" /> </Button>
		const openDrawer = () => this.props.navigation.navigate("DrawerOpen");
		let { height, width } = Dimensions.get('window');

		return (
			<Container>
				<ImageBackground
				  source={Background}
				  style={[styles.backgroundImage, { height:height, width: width }]}
				>
				    <HomeHeader
				        pageName="Home"
						nav={openDrawer}
						rightComponent={this.rightComponent}
				    />
				    <Content>
						<Card>
							<CardItem>
								<Body>
									<Text>Home page</Text>
								</Body>
							</CardItem>
						</Card>
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

export default HomeScreen