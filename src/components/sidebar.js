import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Content, Text, List, ListItem, Icon, Left, Right, Body, Separator } from "native-base";
import Background from '../assets/images/bg.png';
import Logo from '../assets/images/logo_small.png';

const routes = [{
	icon: 'home',
	label: "Home page",
	componentName: 'home',
}, {
	icon: 'menu',
	label: "About",
	componentName: 'about',
}];

class SideBar extends React.Component {
  render() {
    let { height, width } = Dimensions.get('window');

    return (
       <ImageBackground
          source={Background}
          style={[styles.backgroundImage]}
        >
	      <Container>
	        <Content>
	          <Image
	            source={{
	              uri: "http://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2015/08/17/redhead-health.jpg"
	            }}
	            style={{
	              height: 120,
	              alignSelf: "stretch",
	              justifyContent: "center",
	              alignItems: "flex-start"
	            }}>
	            <Image
	              square
	              style={[styles.logo]}
	              source={Logo}
	            />
	          </Image>
	          <List
	            dataArray={routes}

	            renderRow={data => {
	              return (
	                <ListItem
		                icon
						onPress={() => this.props.navigation.navigate(data.componentName)}>
						<Left>
                          <Icon
                            style={styles.menuStyling}
                            name={data.icon} />
                        </Left>
                        <Body
                            style={styles.listItem}
                        >
                          <Text
				                style={styles.menuStyling}
			                >
			                {data.label}
			                </Text>
                        </Body>
	                </ListItem>
	              );
	            }}
	          />
	          <List>
	              <ListItem
	                  icon
	                  onPress={() => this.props.navigation.navigate('login')}>
	                  <Left>
	                    <Icon
	                      style={styles.menuStyling}
	                      name='home' />
	                  </Left>
	                  <Body
	                      style={styles.listItem}
	                  >
	                    <Text
	                          style={styles.menuStyling}
	                      >
	                      LogOut
	                      </Text>
	                  </Body>
	              </ListItem>
              </List>
	        </Content>
	      </Container>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
	logo: {
		height: 80,
		width: 80,
		marginLeft: 20,
	},
    backgroundImage: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    listItem: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
    },
    menuStyling: {
        color: '#cea630',
    }
});


export default SideBar;