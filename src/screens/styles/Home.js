import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

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
  item: {
    alignItems: 'left',
    justifyContent: 'left',
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    color: '#888888',
  },
  matchText: {
    marginTop: 30,
    fontSize: responsiveFontSize(2),
    color: '#555555',
    fontWeight: 'bold',
    letterSpacing: 2,
    alignSelf: 'center'
  },
  matchImg: {
    marginTop: 1,
    marginRight: 2,
    width: responsiveWidth(60),
    height: responsiveHeight(17),
  }
});
