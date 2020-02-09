import { AsyncStorage } from 'react-native';


export const saveRegisteredUser = async (username) => {
    try{
        await AsyncStorage.setItem('USER', username)
    } catch(error) {

    }
}

export const removeRegisteredUser = async () => {
  try{
    await AsyncStorage.removeItem('USER')
  } catch(error) {

  }
}

export const checkIfStorageHasAnUser = async () => {
    try{
      const userValueinAsyncStorage = await AsyncStorage.getItem('USER');
      return userValueinAsyncStorage;
    } catch(error) {
      return null;
    }
}
