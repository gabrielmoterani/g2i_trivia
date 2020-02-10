// React Imports
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// Static Imports
import COLORS from '../../config/theme';

const Loading = () => {
    return ( 
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={COLORS.background} />
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
 
export default Loading;