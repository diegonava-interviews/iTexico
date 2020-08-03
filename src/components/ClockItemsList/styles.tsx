import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    marginTop: 40,
  },
  listItem: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7ec5f3',
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 36,
    marginBottom: 20,
    marginRight: 16,
  },
  idTextContainer: {
    alignSelf: 'center',
    paddingLeft: 20,
    width: 60
  },
  idText: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 22,
  },
  dateAndStatusContainer: {
    marginLeft: 12,
    marginRight: 60
  },
  dateTitle: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 17,
  },
  date: {
    fontFamily: 'Helvetica',
    fontSize: 17,
  },
  statusTitle: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 17,
  },
  status: {
    fontFamily: 'Helvetica',
    fontSize: 17,
  },
  icon: {
    color: 'black',
    fontSize: 32,
  }
});