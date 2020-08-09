import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6E6FE',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: '#EEEEEE'
  },
  profileInfo: {
    marginLeft: 16
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
    fontSize: 20
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 12,
    marginTop: 0
  },
  bio: {
    fontFamily: 'Poppins_400Regular',
    marginHorizontal: 24,
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6180'
  },
  footer: {
    backgroundColor: '#FAFAFC',
    padding: 24,
    alignItems: 'center'
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257E5',
    fontSize: 16
  },
  containerButtons: {
    flexDirection: 'row',
    marginTop: 16
  },
  favoriteButton: {
    height: 56,
    width: 56,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactButton: {
    flex: 1,
    width: 56,
    flexDirection: 'row',
    backgroundColor: '#04D361',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFFFFF',
    marginLeft: 16,
    fontSize: 16
  }
})

export default styles