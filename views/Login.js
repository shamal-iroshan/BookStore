import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';

import LoginWith from '../components/login/Loginwith';

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Form style={styles.form}>
            <Item floatingLabel style={styles.textInput}>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.textInput}>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button
              block
              style={styles.btnLogin}
              onPress={() => {
                this.props.navigation.replace('View all');
              }}>
              <Text>Login</Text>
            </Button>
            <Button
              block
              bordered
              style={styles.btnSignup}
              onPress={() => {
                this.props.navigation.navigate('Sign up');
              }}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
          <LoginWith style={styles.loginWith} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6F8FA',
    paddingTop: '35%',
  },
  form: {
    width: '100%',
    padding: 20,
    marginBottom: '5%',
  },
  textInput: {
    margin: 0,
    width: '90%',
  },
  btnLogin: {
    width: '95%',
    marginLeft: '2.5%',
    marginTop: '10%',
    backgroundColor: '#07A7E1',
  },
  btnSignup: {
    width: '95%',
    marginLeft: '2.5%',
    marginTop: '3%',
  },
  loginWith: {
    width: '100%',
  },
});
