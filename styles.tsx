import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#f8f8f8',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'Helvetica',
    fontSize: 17.5,
    paddingTop: 12,
  },
  inputContainer: {
    margin: 16,
  },
  noDataText: {
    color: 'gray',
    fontFamily: 'Helvetica',
    marginTop: 16,
    fontSize: 15,
    alignSelf: 'center',
  },
  requiredIdText: {
    color: '#ff0000b3',
    fontFamily: 'Helvetica',
    marginTop: 14,
    fontSize: 13,
    alignSelf: 'center',
  },
  employeeGreetingContainer: {
    marginTop: 18,
    alignSelf: 'center',
  },
  employeeGreetingText: {
    color: '#a4a4a4',
    fontFamily: 'Helvetica',
  },
  employeeGreetingBottomLine: {
    paddingBottom: 8,
    alignSelf: 'center',
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  clearDataButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  clearDataButton: {
    borderRadius: 8,
  },
  clearDataButtonText: {
    fontSize: 17,
    fontFamily: 'Helvetica',
  },
  checkDataButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  checkDataButton: {
    borderRadius: 8,
    backgroundColor: '#1472ffe3',
  },
  checkDataButtonText: {
    fontSize: 17,
    fontFamily: 'Helvetica',
  },
  textInput: { 
    color: '#676767', 
    fontFamily: 'Helvetica', 
    fontSize: 16, 
    paddingLeft: 2 
  }
});
