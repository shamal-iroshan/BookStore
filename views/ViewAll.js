import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {Button} from 'native-base';

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ISBN', 'Author', 'Publisher', 'Price', 'Update', 'Delete'],
      tableData: [
        ['1', '2', '3', '4', '3', '4'],
        ['a', 'b', 'c', 'd', '3', '4'],
        ['1', '2', '3', '4', '3', '4'],
        ['a', 'b', 'c', 'd', '3', '4'],
      ],
    };
  }

  _update(index) {
    Alert.alert(`This is update at ${index + 1}`);
  }

  _delete(index) {
    Alert.alert(`This is delete at ${index + 1}`);
  }

  render() {
    const state = this.state;
    const btnUpdate = (data, index) => (
      <TouchableOpacity onPress={() => this._update(index)}>
        <View style={styles.btnUpdate}>
          <Text style={styles.btnText}>Update</Text>
        </View>
      </TouchableOpacity>
    );
    const btnDelete = (data, index) => (
      <TouchableOpacity onPress={() => this._delete(index)}>
        <View style={styles.btnDelete}>
          <Text style={styles.btnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Button
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Add new');
              }}>
              <Text style={styles.btnText}>Add new</Text>
            </Button>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              {state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 4
                          ? btnUpdate(cellData, index)
                          : cellIndex === 5
                          ? btnDelete(cellData, index)
                          : cellData
                      }
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
            <Button
              light
              style={styles.btnSignOut}
              onPress={() => {
                this.props.navigation.replace('Sign in');
              }}>
              <Text style={styles.btnText}>Sign out</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 30,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  head: {height: 40, backgroundColor: '#808B97'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btnUpdate: {
    width: 58,
    height: 25,
    backgroundColor: 'orange',
    borderRadius: 2,
  },
  btnDelete: {
    width: 58,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 2,
  },
  btnText: {textAlign: 'center', color: '#fff'},
  button: {
    width: '30%',
    height: 50,
    paddingLeft: '7%',
    color: '#fff',
    marginBottom: 10,
  },
  btnSignOut: {
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 20,
    width: '20%',
    height: 30,
    paddingLeft: 8,
  },
});
