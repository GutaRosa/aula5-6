import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}> Welcome to my App</Text>
      <Text style= {styles.Text}>This is my first developed app</Text>
      <View style={styles.viewRN}>
        <Image source={require('./assets/rn.png')} style={styles.ImageRN}/>
        <Text style={styles.textRN}>developed in react native</Text>
      </View>
      <Button title= "Let's Start"/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'rgb(83,200,243)',
    fontSize: 30,
    fontWeight: 'bold', 
    margin: 10
  },
  text:{
    color: 'rgb(250, 250, 250)',
    fontSize: 20, 
  }, 
  ImageRN: {
    Width: 150,
    height: 100, 
    resizeMode: 'contain',
  },
  viewRN:{
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
  },
  TextRN: {
    color: 'rgb(250, 250, 250)',
    Width: 150, 
    fontSize: 20, 
  }
});
