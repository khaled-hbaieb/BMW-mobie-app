import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './styles'
import Button from '../ButtonComponent'


const CarDetails = ({route}) => {
const carName = route.params.carName
const image = route.params.image
const overView = route.params.overView


    return (
        <View style={styles.carContainer}>
      <Text style={styles.text}>{carName}</Text>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text}>OverView</Text>
      <Text>{overView}</Text>
    </View>
    )
}

export default CarDetails