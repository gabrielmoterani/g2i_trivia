import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


// Libs Import
import { LinearGradient } from 'expo-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';

// Components and Services
import {getQuestionsFromApi} from '../../services/questions';
import Alert from '../../components/Alert';
import Loading from '../../components/Loading';

import Category from '../../components/Category';
import QuestionCard from '../../components/QuestionCard';

//Static Imports 
import COLORS from '../../config/theme';

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState([])
    const [loading, setloading] = useState(true)
    const [actualQuestionIndex, setactualQuestionIndex] = useState(0)
    const [backgroundGradient, setBackgroundGradient] = useState(COLORS.gradients[0])
    const [answerHistory, setAnswerHistory] = useState([])

    const backgroundColorSelect = () => {
        return COLORS.gradients[[Math.floor(Math.random() * COLORS.gradients.length)]]
    }

    useEffect(() => {
        (async function feetchQuestions() {
            try{
                setBackgroundGradient(backgroundColorSelect());
                setloading(true);
                const {data} = await getQuestionsFromApi();
                setQuestions(data.results);
                setactualQuestionIndex(0);
            } catch (error) {
                Alert(error)
            }
            setloading(false);
        })();
    }, []);

    const handleSelectAnswer = (isCorrect) => {
        let history = answerHistory;
        let actualQuestion = questions[actualQuestionIndex];
        actualQuestion['answerWasCorrect'] = isCorrect,
        history.push(actualQuestion);
        setAnswerHistory(history);
        let index = actualQuestionIndex
        if((index + 1) === questions.length) return navigation.navigate('Score', {history});
        setTimeout(() => {
            setactualQuestionIndex(++index);
            setBackgroundGradient(backgroundColorSelect());
        }, 1000)
    }


    return ( 
        <LinearGradient style={styles.container} colors={backgroundGradient}>
            <SafeAreaView style={styles.container}>
                {loading ? <Loading/> : 
                    <>
                        <Category 
                            title={questions[actualQuestionIndex]['category']}
                        />
                        <QuestionCard
                            onSelectAnswer={(isCorrect) => {handleSelectAnswer(isCorrect)}}
                            gradientColor={backgroundColorSelect()}
                            question={questions[actualQuestionIndex]}
                        />
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>{actualQuestionIndex} of {questions.length}</Text>
                        </View>
                    </>
                }
            </SafeAreaView>
        </LinearGradient>
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    categoryContainer:{},
    footer: {
        alignSelf: 'center',
        marginTop: 100
    },
    footerText: {
        color: COLORS.primary,
        fontSize: 15,
        fontWeight: '600'
    }

});
 
export default Quiz;