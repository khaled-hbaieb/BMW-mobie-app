import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native'
import styles from './styles'



const Purchase = ({route}) => {
// console.log(route.params)
  const name = route.params.carName
  const price = route.params.price
  const image = route.params.image


    return (
        <View >
            <Text>{name}</Text>
    </View>
    )
}

export default Purchase