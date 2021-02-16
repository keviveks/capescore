import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 5,
  },
  headerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  matchText: {
    marginTop: 30,
    fontSize: responsiveFontSize(2),
    color: '#555555',
    fontWeight: 'bold',
    letterSpacing: 2,
    alignSelf: 'center'
  },
});
