// React Imports
import React from 'react'

// Libs Imports
import { Alert as ReactAlert} from 'react-native'


const Alert = (message) => {
    return (
        ReactAlert.alert(
            'Oops',
            message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          )
      );
}
 
export default Alert;