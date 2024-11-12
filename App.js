// Exercise 1
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop: 50}}>
//         <Text style={{fontSize: 24}}>
//           RP Values
//         </Text>
//         <Text style={{color: 'green'}}>
//           Excellence
//         </Text>
//         <Text style={{backgroundColor: 'yellow'}}>
//           Customer-Centric
//         </Text>
//         <Text style={{fontStyle: 'italic'}}>
//           Integrity
//         </Text>
//         <Text style={{textAlign: 'center'}}>
//           Teamwork
//         </Text>
//         <Text style={{backgroundColor: 'black', color: 'white'}}>
//           Enterprising
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise1;


// Exercise 2
// import React from 'react';
// import {View, Text} from 'react-native';
// import {StyleSheet} from "react-native";
//
// const Exercise2 = () => {
//   return (
//       <View>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who We are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   )
// }
//
// const styles = StyleSheet.create ({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'white'
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white'
//   },
//   title: {
//     fontWeight: 'bold'
//   }
//     }
// )
//
// export default Exercise2;


// Exercise 3A
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     }
// })
//
// const Exercise3a = () => {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>Child One</Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
//         </View>
//     )
// }
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
//
// });
//
// export default Exercise3A;


// Exercise 3B
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     }
// })
//
// const Exercise3b = () => {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>Child One</Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
//         </View>
//     )
// }
//
// export default Exercise3B;


// Exercise 3C
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3C = () => {
//   return (
//       <View style={[styles.Parent]}>
//           <Text style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>
//             Child One
//           </Text>
//           <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//             Child Two
//           </Text>
//           <Text style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>
//             Child Three
//           </Text>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
//
// });
//
// export default Exercise3C;


// Exercise 3D
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent]}>
//           <Text style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>
//             Child One
//           </Text>
//           <Text style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>
//             Child Two
//           </Text>
//           <Text style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>
//             Child Three
//           </Text>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
//
// });
//
// export default Exercise3D;


// Exercise 3E
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around,
//     justifyContent: 'space-between',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
//
// const Exercise3e = () => {
//   return (
//       <View style={styles.Parent}>
//         <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3e;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create ({
    Parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        justifyContent: 'space-around',
    }
})

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
            <Text style={[styles.Child, {backgroundColor: 'lightgreen'}]}>Square 2</Text>
            <Text style={[styles.Child, {backgroundColor: 'red'}]}>Square 3</Text>
        </View>
    )
}

export default Exercise4;

