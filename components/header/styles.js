import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
 headerWrapper:{
  position: 'absolute',
  top: 50,
  zIndex: 100,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  paddingHorizontal: 20

 },
 menu:{
   width: 25,
   height: 25,
   resizeMode: 'contain',
 },
 logo:{
   width: 100,
   height: 20,
   resizeMode: 'contain'
 }
 

})

export default styles