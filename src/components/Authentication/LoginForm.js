import React, { Component } from "react";
import { ImageBackground, Image, StyleSheet, Dimensions, Animated,  Easing} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Item, Form, Label, Input} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Background from '../../assets/images/bg.png';
import LoginForm from '../../components/Authentication/LoginForm'
import AboutHeader from '../../components/common/header.js'
import CustomButton from '../../components/common/button.js';
import Logo from '../../assets/images/logo_full.png';
import * as Animatable from 'react-native-animatable';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: '',
		};
	}

	handleButton() {
		alert('Custom button clicked');
	}

	renderNext(currentIndex){
			this.refs.view.fadeInLeft(300);
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
		                      <Grid>
                                <Row style={{ backgroundColor: 'transparent', height: 150}}>
                                    <Button onPress={() => navigate('home')}>
                                      <Text>Authentication</Text>
                                    </Button>
                                </Row>
                                <Row style={{ backgroundColor: 'transparent', height: 200}}>
									<Animatable.Image
										animation="bounceIn"
										delay={500}
										style={[styles.logo]}
										source={Logo}
									/>
                                </Row>
                                <Row
	                                style={[styles.buttons]}>
									<Animatable.View
										animation="bounceIn"
										delay={1000}
									>
										<CustomButton
											label={'Create Account'}
											onClick={() => this.handleButton()}
										/>
									</Animatable.View>
									<Animatable.View
										animation="bounceIn"
										delay={1500}
									>
										<CustomButton
											label={'Log In'}
											onClick={() => this.handleButton()}
										/>
									</Animatable.View>
                                </Row>
                              </Grid>
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
    logo: {
	    flex: 1,
	    width: 200,
	    height: 200,
	    resizeMode: 'contain',
    },
    buttons: {
        flex: 1,
        flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center',
        backgroundColor: 'transparent',
        height: 200
    },
    button: {
        marginLeft: 10,
    },
      instructions: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
        backgroundColor: 'transparent',
      },
});

export default LoginPage;