import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
    margin: 5,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#343840',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 1,

    borderRadius: 10,
  },
  imageBox: {
    borderRadius: 10,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 70,
  },
  image: {
    flex: 1,
    width: window.width / 4,
    minHeight: 100,
    maxHeight: 200,
    // borderRadius: 10,
  },

  content: {
    flex: 3,
    padding: 5,
  },
});
