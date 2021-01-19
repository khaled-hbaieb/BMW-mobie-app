import React from 'react'
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native'
import styles from './styles'
import details from './details'


const CarDetails = ({route}) => {
    const carName = route.params.carName
    const image = route.params.image
    const overView = route.params.overView
    const data = details.filter(detail => detail[0][0]['name'] === carName)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>{data[0][0][0].name}</Text>
                {data[0][0].map((item) => {
                    return (
                    <View key={item['id']} style={styles.carContainer}>
                        <Image style={styles.image} source={item.image}/>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.overView}>{item.overView}</Text> 
                    </View>
             )
           })
          
           } 
        </ScrollView>
    )
}


export default CarDetails