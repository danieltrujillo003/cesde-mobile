import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Button, 
  Alert 
} from 'react-native';

export default function App() {
  const dummyErrorMessage = 
    `    Wrong email or password.
    All you are doing is wrong.`
  const [title, setTitle] = useState("Dummy title");
  const [message, setMessage] = useState(dummyErrorMessage);

  const displayErrorMessage = () =>{ Alert.alert(message) };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.main}>
      <TextInput maxLength={15} style={styles.textInput} placeholder="Write title here" onChangeText={(text)=>setTitle(text)}/>
      <TextInput maxLength={60} style={styles.textInput} placeholder="Write alert message here" onChangeText={(text)=>setMessage(text)}/>
      <Button title="lalala" onPress={displayErrorMessage}></Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.box}>Create Account</Text>
        <Text style={styles.box}>Forgot Password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 300,  
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase"
  },
  main: {},
  textInput: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    width: 400, // Working fine on emulated SM-G965N
    textAlign: 'center',
    marginBottom: 30,
    height: 60,
    color: '#fff'
  },
  footer: {
    width: 450, // Working fine on emulated SM-G965N
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  box: {
    fontSize: 20,
    margin: 25 // Working fine on emulated SM-G965N
  }
});

/* 
 * SECOND EXERCISE. README:
 *TOGGLE COMMENTS OFF WHEN _App()_ AND _styles_ ARE COMMENTED ON
*/

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.superbox}>
//         <View style={{...styles.box1, ...styles.genericBox}}>
//          <Text style={styles.text}>upper left</Text>
//         </View>
//         <View style={{...styles.box2, ...styles.genericBox}}>
//           <Text style={styles.text}>upper right</Text>
//         </View>
//       </View>
//       <View style={styles.superbox}>
//         <View style={{...styles.box3, ...styles.genericBox}}>
//           <Text style={styles.text}>middle left</Text>
//         </View>
//         <View style={{...styles.box4, ...styles.genericBox}}>
//           <Text style={styles.text}>middle right</Text>
//         </View>
//       </View>
//       <View style={styles.superbox}>
//         <View style={{...styles.box5, ...styles.genericBox}}>
//           <Text style={styles.text}>bottom left</Text>
//         </View> 
//         <View style={{...styles.box6, ...styles.genericBox}}>
//           <Text style={styles.text}>bottom right</Text>
//         </View>        
//       </View>        
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaa',
//     flexDirection: 'column'
//   },
//   text: {
//     color: '#000'
//   },
//   superbox: {
//     flex: 1,
//     flexDirection: 'row'
//   },
//   genericBox: {
//     width: '40%',
//     height: '80%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: '#000',
//     margin: 25 // Working fine on emulated SM-G965N
//   },
//   box1: {
//     backgroundColor: '#1b54cf',
//   },
//   box2: {
//     backgroundColor: '#1ed87d'
//   },
//   box3: {
//     backgroundColor: '#7d2dd1'
//   },
//   box4: {
//     backgroundColor: '#deb1e2'
//   },
//   box5: {
//     backgroundColor: '#fdea13'
//   },
//   box6: {
//     backgroundColor: '#baa788'
//   }
// });
