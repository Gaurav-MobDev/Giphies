import {StyleSheet} from 'react-native';
import {Constants} from '../../utility';
const {
  COLOR: {WHITE},
} = Constants;
const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: WHITE,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
  flatlist: {
    margin: 16,
  },
  listItemContainer: {
    padding: 16,
    height: 220,
  },
  listItem: {
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 4,
    flex: 1,
    borderColor: 'black',
  },
  description: {width: 'auto'},
  image: {flex: 1},
  likeButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Style;
