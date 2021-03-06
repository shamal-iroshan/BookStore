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

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Form style={styles.form}>
            <Item floatingLabel style={styles.textInput}>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.textInput}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.textInput}>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.textInput}>
              <Label>Repeat Password</Label>
              <Input />
            </Item>
            <Button block style={styles.button}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
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
  button: {
    width: '95%',
    marginLeft: '2.5%',
    marginTop: '10%',
    backgroundColor: '#07A7E1',
  },
  loginWith: {
    width: '100%',
  },
});
