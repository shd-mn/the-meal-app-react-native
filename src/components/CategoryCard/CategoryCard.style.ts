import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: window.width / 3,
    margin: 5,

    elevation: 4,
    shadowColor: '#343840',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 1,

    borderRadius: 20,

    backgroundColor: 'white',
  },
  imageBox: {
    flex: 1,
    padding: 5,
    marginBottom: 5,
  },
  image: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
