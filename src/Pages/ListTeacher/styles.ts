import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5'
  },
  listTeacher: {
    marginTop: -40
  },
  searchForm: {
    marginBottom: 24
  },
  label: {
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular'
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBlock: {
    width: '48%'
  },
  input: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  formButton: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: '#04D361',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFFFFF',
    fontSize: 16
  }
})

export default styles