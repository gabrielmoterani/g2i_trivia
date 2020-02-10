// React Imports
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


// Libs Import
import { LinearGradient } from 'expo-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';


//Static Imports 
import COLORS from '../../config/theme';

const Welcome = ({navigation}) => {
    return (       
    
    <LinearGradient style={styles.container} colors={COLORS.gradients[0]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to the Trivia Chalenge!</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            You will be presented with 
             <Text style={styles.true}> True </Text>
             or 
             <Text style={styles.false}> False </Text> 
            questions.
            </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Can you score 100%?
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
          onPress={() => {navigation.push('Quiz')}}
          style={styles.btn}>
            <Text style={styles.btnText}>
              Begin
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient > 
      
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 20
    },
    welcomeContainer:{
      flex: 1,
      marginTop: 30,
      marginLeft: 10,
      alignSelf: 'flex-start',
    },
    welcomeText: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',
      width: 250,
      color: COLORS.primary
    },
    description:{
      flex: 0.5,
    },
    descriptionText:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginHorizontal: 70,
      color: COLORS.primary,
    },
    true:{
      color: COLORS.green
    },
    false: {
      color: COLORS.pink
    },
    btnContainer: {},
    btn: {        
      backgroundColor: COLORS.background,
      paddingVertical: 10,
      borderRadius: 5,
    },
    btnText: {
      color: COLORS.primary,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      width: 220
    }
  });
 
export default Welcome;