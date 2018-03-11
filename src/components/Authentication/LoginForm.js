import React, { Component } from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Item, Form, Label, Input} from "native-base";
import Background from '../../assets/images/bg_logo_small.png';
import LoginForm from '../../components/Authentication/LoginForm'
import AboutHeader from '../../components/common/header.js'

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: '',
		};
	}
	render() {
        const { navigate } = this.props.navigation;
		let { height, width } = Dimensions.get('window');
		return (
			<Container>
				<ImageBackground
				  source={Background}
				  style={[styles.backgroundImage, { height:height, width: width }]}
				>
		            <Content>
			            <Button onPress={() => navigate('home')}>
	                      <Text>Authentication</Text>
			            </Button>
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
    button: {
        marginLeft: 10,
    },
});

export default LoginPage;