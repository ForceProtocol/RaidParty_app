import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Container, Content, Header, Text, Title, ListItem, Icon, Left, Right, Body, Switch, Button } from "native-base";

const CustomButton = ({label, onClick}) => {
 return ( <Button
            block
            rounded
            style={[styles.button]}
            onClick={() => onClick}
        >
            <Text
                style={[styles.label]}
            >
                {label}
            </Text>
        </Button>)}


const styles = StyleSheet.create({
	button: {
		backgroundColor: 'transparent',
		borderWidth: 2,
		borderColor: 'gold',
		width: 300,
		height: 52,
		marginTop: 30,
	},
	label: {
		fontSize: 20,
	}
});

export default CustomButton;