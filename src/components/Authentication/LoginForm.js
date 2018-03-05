import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        login: '',
        password: '',
    };

    render() {
        return (
          <Container>
            <Content>
              <Form>
                <Item fixedLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
            </Content>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 10,
    },
});
export default LoginForm;