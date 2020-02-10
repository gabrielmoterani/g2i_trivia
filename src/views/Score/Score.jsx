import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

// Libs Import
import { LinearGradient } from 'expo-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';

// Components and Service Imports
import TriviaResult from '../../components/TriviaResult';

//Static Imports
import COLORS from '../../config/theme';

const Score = ({navigation, route}) => {
    const historyFromRouter = route.params?.history;
    let countCorrectAnswers = historyFromRouter.reduce(function (n, question) {
        return n + (question.answerWasCorrect == true);
    }, 0);

    const handlePlayAgain = () => {
        navigation.replace('Welcome');
    }
    


    return (
        <LinearGradient style={styles.container} colors={COLORS.gradients[0]}>
            <SafeAreaView style={styles.container}>
                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreText}>You Scored</Text>
                    <Text style={styles.scoreText}>{countCorrectAnswers} out of {historyFromRouter.length}</Text>
                </View>
                <TriviaResult
                    questions={historyFromRouter}
                />
                <TouchableOpacity 
                    onPress={() => handlePlayAgain()}
                    style={styles.playBtn} 
                >
                    <Text style={styles.btnText}>Play Again!</Text>    
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    scoreContainer: {
        marginTop: 20
    },
    scoreText:{
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    playBtn: {
        backgroundColor: COLORS.background,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    btnText:{
        color: COLORS.primary,
        fontWeight: 'bold'
    }
})
 
export default Score;