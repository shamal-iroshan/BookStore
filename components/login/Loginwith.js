import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content, Button, Text, Icon} from 'native-base';

export default class Loginwith extends Component {
  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <Button iconLeft danger style={styles.button}>
          <Text style={styles.text}>google</Text>
        </Button>
        <Button iconRight primary style={styles.button}>
          <Text style={styles.text}>facebook</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
    height: 40,
  },
  text: {
    width: '100%',
    textAlign: 'center',
  },
});
