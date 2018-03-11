import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Content, Header, Text, Title, ListItem, Icon, Left, Right, Body, Switch, Button } from "native-base";

class HomeHeader extends React.Component {
  render() {
    return (
     <Header
	     noShadow
	     style={[styles.headerBg]}
     >
      <Left>
        <Button
          transparent
          onPress={() => this.props.nav()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{this.props.pageName}</Title>
      </Body>
      <Right>
        {this.props.rightComponent}
      </Right>
    </Header>
    );
  }
}


const styles = StyleSheet.create({
	headerBg: {
		backgroundColor: 'transparent',
	},
});

export default HomeHeader;