import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 100,
        backgroundColor: 'black',
    },
           text: {
         fontSize: 30,
         fontWeight: 'bold',
         color: 'white',
         marginTop: 10,
     },
          title: {
         color: 'white',
         fontWeight: 'bold',
         fontSize: 20,
         marginTop: 10,
         marginLeft: 15,
         marginBottom: 10,
     },
     overView: {
         color: 'white',
         marginTop: 10,
         fontSize:15,
         padding: 15
     },
     image: {
         width: '100%',
// height:'auto',
height: (Dimensions.get('window').height)/2,
marginTop: 10,
padding: 10
     }
})

export default styles