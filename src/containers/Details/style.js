import {StyleSheet} from 'react-native';
import {Constants} from '../../utility';
const {
  COLOR: {BLUE, RED, BLACK, SKY_BLUE},
} = Constants;
const Style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: BLUE,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: 220,
    height: 220,
    marginTop: 80,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: BLACK,
    alignSelf: 'center',
  },
  details: {
    marginHorizontal: 32,
    height: 'auto',
    marginTop: 44,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
  loader: {
    marginTop: 44,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  likeButton: {
    height: 44,
    aspectRatio: 1,
    borderRadius: 22,
    marginTop: 32,
    backgroundColor: SKY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Style;
