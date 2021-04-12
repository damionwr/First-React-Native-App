import React from 'react'
import {View, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import CartItem from '../carItem/index'
import cars from './cars'

const CarContent = () => {
  return (
    <View style={styles.listWrapper}>
      <FlatList 
          
       data={cars}
       renderItem={({item}) => <CartItem car={item} />}
       snapToAlignment={'start'}
       decelerationRate={'fast'}
       snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarContent
