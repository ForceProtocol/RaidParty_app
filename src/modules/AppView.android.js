import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import {View, StyleSheet, StatusBar, ActivityIndicator, BackHandler, Dimensions, ImageBackground, Navigator } from 'react-native';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import { StackNavigator } from 'react-navigation';
import Splash from '../assets/images/Splash.jpg';
import LoginForm from '../components/Authentication/LoginForm'
import SideBar from "../components/sidebar.js";
import { DrawerNavigator } from "react-navigation";

import { Container, Header, Content, Text, Button, Footer, FooterTab, Left, Right, Icon, Body, Title} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import theme from './../themes/raidParty'
import Home from './home/home.js';
import Page from './page/page.js';

const AppView = DrawerNavigator(
  {
      homePage: { screen: Home },
      aboutPage: { screen: Page },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default AppView;
