import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'
import ButtonItem from '../buttons/index'

const CartItem = ({car: {name, tagline, taglineCTA, image}}) => {
  return (
    <View style={styles.secondContainer}>
    <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          
          <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subCTA}>{taglineCTA}</Text>
          </Text>
          </View>

          <View style={styles.buttonWrapper}>
           
          <ButtonItem type="primary" content={"custom order"} onPress={() =>{
            console.warn("you press this")
          }} />
          <ButtonItem type="secondary" content={"Existing inventory"} onPress={() =>{
            console.warn("you press this inventory")
          }} />
          </View>



      </View>
  )
}

export default CartItem
