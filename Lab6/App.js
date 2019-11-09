import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (

    <View style={styles.container}>
      <Text style={styles.title}>My favorite TV show is South Park</Text>
      <Text>{"\n"}South Park tackles many real topics that most would find controversial. The writing is clever enough to take these touchy subjects and make really funny jokes out of them. More importantly, the show isn't afraid to show suppport to the politically incorrect side of the conversation.</Text>
    </View>

    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    color: 'blue',
    backgroundColor: 'orange',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default App;
