import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import {View, StyleSheet, StatusBar, ActivityIndicator, BackHandler, Dimensions, ImageBackground } from 'react-native';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import {NavigationActions} from 'react-navigation';
import Splash from '../assets/images/Splash.jpg';
import LoginForm from '../components/Authentication/LoginForm'

import { Container, Header, Content, Text, Button, Footer, FooterTab, Left, Right, Icon, Body, Title} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import theme from './../themes/raidParty'

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  navigateBack() {
    const navigatorState = store.getState().get('navigatorState');

    const currentStackScreen = navigatorState.get('index');
    const currentTab = navigatorState.getIn(['routes', 0, 'index']);

    if (currentTab !== 0 || currentStackScreen !== 0) {
      store.dispatch(NavigationActions.back());
      return true;
    }

    // otherwise let OS handle the back button action
    return false;
  }

  componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.navigateBack);
        const config = {
            apiKey: "AIzaSyBiwZd8au_vQfg6La5VVZ_s2wORv8tEDMs",
            authDomain: "raidparty-80cce.firebaseapp.com",
            databaseURL: "https://raidparty-80cce.firebaseio.com",
            projectId: "raidparty-80cce",
            storageBucket: "raidparty-80cce.appspot.com",
            messagingSenderId: "153960200371"
        };
        firebase.initializeApp(config);
  }

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  render() {
    let { height, width } = Dimensions.get('window');

    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <Container>
       <ImageBackground
          source={Splash}
          style={[styles.backgroundImage, {height:height, width: width}]}
        >
            <Header>
                <Left>
                  <Title>Header</Title>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Right>
          </Header>
        <Content>
        <StatusBar backgroundColor="transparent" barStyle='dark-content' />
          <Grid>
            <Row style={{ backgroundColor: 'transparent' }}>
                <LoginForm />
            </Row>
            <Row>

            </Row>
          </Grid>

          {__DEV__ && <DeveloperMenu />}
        </Content>
        <Footer>
         <FooterTab>
            <Button>

              <Icon theme={{ iconFamily: 'FontAwesome' }} name='arrow-up' />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
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

export default AppView;
