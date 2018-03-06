import React, { Component } from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

import Splash from '../../assets/images/Splash.jpg';
import LoginForm from '../../components/Authentication/LoginForm'

class HomeScreen extends Component {
  render() {
      let { height, width } = Dimensions.get('window');

    return (
      <Container>
       <ImageBackground
          source={Splash}
          style={[styles.backgroundImage, {height:height, width: width}]}
        >
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>home page screan</Text>
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
        backgroundColor:'transparent',
//        justifyContent: 'center',
//        alignItems: 'center',
    },
});

export default HomeScreen