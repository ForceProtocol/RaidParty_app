import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, StatusBar, ActivityIndicator, BackHandler, Dimensions, ImageBackground, Button } from 'react-native';
import { Container, Header, Content, Text, Footer, FooterTab, Left, Right, Icon, Body, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import store from '../redux/store';
import Splash from '../../assets/images/Splash.jpg';

class Page extends Component {
//  static navigationOptions = {
//    title: 'Welcome',
//  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Home page"
        onPress={() =>
            navigate('homePage', { name: 'Jane' })
        }
      />
    );
  }
}

export default Page;
