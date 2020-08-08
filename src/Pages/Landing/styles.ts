import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8557E5'
  },
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular'
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },
  buttonPrimary: {
    backgroundColor: '#9871F5'
  },
  buttonSecondary: {
    backgroundColor: '#04D361'
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
    color: '#FFFFFF'
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 160,
    marginTop: 40
  }
})

export default styles