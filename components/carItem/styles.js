import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
   image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  secondContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 40,
    fontWeight: '500'
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 16,
    
    color: '#5c5e62',
    
  },
  buttonWrapper:{
    position: 'absolute',
    bottom: 50,
    width: '100%'
  },
  subCTA:{
    textDecorationLine: 'underline',
  }
 

})

export default styles