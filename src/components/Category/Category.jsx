import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



//Static Imports
import COLORS from '../../config/theme';

const Category = ({title}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                {title || ''}
            </Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 20
    },
    text:{
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: '600'
    }

});
export default Category;