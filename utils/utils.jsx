import RNFS from 'react-native-fs';
import {
  Platform,
  PermissionsAndroid,
  Alert,
  Share,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const onShare = async url => {
  try {
    await Share.share({
      message: `Check out this wallpaper: ${url}`,
      url: url,
    });
  } catch (error) {
    console.error('error while shareing', error);
  }
};

export const requestStoragePermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    // console.log(
    //   'Storage permission granted:',
    //   granted === PermissionsAndroid.RESULTS.GRANTED,
    // );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }

  return true;
};

export const saveImage = async url => {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) return;
  const cleanUrl = url.split('?')[0];
  const fileName = cleanUrl.split('/').pop(); // image name liya url se
  const localPath = `${RNFS.DownloadDirectoryPath}/${fileName}`; // path to save

  RNFS.downloadFile({
    fromUrl: url,
    toFile: localPath,
  })
    .promise.then(() => {
      ToastAndroid.show(
        'Image saved successfully! in download folder',
        ToastAndroid.SHORT,
      );
    })
    .catch(err => {
      ToastAndroid.show('Error saving image:', ToastAndroid.SHORT);
    });
};

// fun to save favorite

export const saveFavorite = async url => {
  try {
    let favorite = await AsyncStorage.getItem('favorites');
    favorite = favorite ? JSON.parse(favorite) : [];
    console.log('localFavorite', favorite);

    if (!favorite.includes(url)) {
      favorite.push(url);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorite));
      ToastAndroid.show('Added to favorite', ToastAndroid.SHORT);
    } else {
      const updatedFav = favorite.filter(item => item !== url);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFav));
      ToastAndroid.show('Removed from favorite', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};
