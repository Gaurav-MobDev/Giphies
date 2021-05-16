import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {getApi} from '../../network';
import {
  Constants,
  COLOR,
  LOCAL_IMAGES_PATH,
  HelperFunctions,
} from '../../utility';
import {navigate} from '../../navigation/service';
import {
  setGiphyAction,
  setFavouriteAction,
  removeFavouriteAction,
  getGiphyAction,
} from '../redux';

import Style from './style';
const {
  SCREEN_NAMES: {DETAILS},
} = Constants;
const {likeGiphy, addFavourite} = HelperFunctions;
const {like} = LOCAL_IMAGES_PATH;
const {RED, SKY_BLUE} = COLOR;
const GiphyList = () => {
  const dispatch = useDispatch();
  const {giphies: giphiesList, favourites} = useSelector(
    state => state.giphyReducer,
  );
  const [giphies, setGiphies] = useState(giphiesList);

  useEffect(() => {
    getGiphyData();
  }, []);

  const getGiphyData = async () => {
    const {
      data: {data},
    } = await getApi();
    const requiredData = data.map(item => {
      const {
        images: {
          original: {url},
        },
        type,
        rating,
        id: giphyid,
      } = item;
      const dataRequired = {
        url,
        id: giphyid,
        type,
        rating,
        like: false,
      };
      return dataRequired;
    });
    setGiphies([...requiredData]);
    dispatch(getGiphyAction([...requiredData]));
  };

  const goToDetailsView = (details, index) => {
    const {url, type, rating, id: giphyid} = details;
    const data = {
      url,
      type,
      rating,
      id: giphyid,
    };
    dispatch(setGiphyAction({details: data, index}));
    navigate(DETAILS);
  };

  const likeGiphyAction = index => {
    const giphiesCopy = likeGiphy(index, giphies, favourites);
    if (giphiesCopy) {
      dispatch(getGiphyAction([...giphiesCopy]));
      addFavouriteAction(giphiesCopy[index].id);
    }
  };

  const addFavouriteAction = giphyid => {
    const isLiked = addFavourite(giphyid, favourites);
    if (isLiked >= 0) {
      dispatch(removeFavouriteAction(giphyid));
      return;
    }
    dispatch(setFavouriteAction(giphyid));
  };

  const renderItem = ({item, index}) => listItem(item, index);

  const listItem = (item, index) => {
    return (
      <View style={Style.listItemContainer}>
        <TouchableOpacity
          style={Style.listItem}
          onPress={() => goToDetailsView(item, index)}>
          <Image source={{uri: item.url}} style={Style.image} />
          <TouchableOpacity
            style={[
              Style.likeButton,
              {backgroundColor: item.like ? RED : SKY_BLUE},
            ]}
            onPress={() => likeGiphyAction(index)}>
            <Image source={like} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Giphy</Text>

      <FlatList
        style={Style.flatlist}
        data={giphies}
        extraData={giphies}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({
          length: 220,
          offset: 220 * index,
          index,
        })}
        removeClippedSubviews={true}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GiphyList;
