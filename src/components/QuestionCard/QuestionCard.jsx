import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';


// Libs Import
import { LinearGradient } from 'expo-linear-gradient';
const Entities = require('html-entities').AllHtmlEntities;

// Static Import 
import COLORS from '../../config/theme';

const QuestionCard = ({gradientColor, question, onSelectAnswer}) => {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState();
    const correctAnswer = question.correct_answer
    const answers = ['True', 'False'];
    const entities = new Entities();

    useEffect(() => {
        setSelectedAnswer('');
        setIsCorrect(null);
    }, [question])

    const handleSelect = async (answer) => {
        setSelectedAnswer(answer);
        let result = correctAnswer === answer ? true : false;
        setIsCorrect(result)
        onSelectAnswer(result);
    }

    const setAnswerStyle = (answer) => {
        let style = styles.answerBtn;
        if(selectedAnswer === '') return style;
        if(answer === correctAnswer){
            style = {...style, backgroundColor: COLORS.green, borderWidth: 0}
        } else {
            style = {...style, backgroundColor: COLORS.pink, borderWidth: 0}
        }
        return style
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.header(gradientColor)}>
                <Text style={styles.title}>{entities.decode(question.question)}</Text>
            </View>
            <View style={styles.answersContainer}>
                {answers.map(answer => (
                    <TouchableOpacity
                        disabled={selectedAnswer !== ''}
                        onPress={() => {handleSelect(answer)}}
                        key={answer} style={setAnswerStyle(answer)}
                    >
                       <Text style={selectedAnswer !== '' ? {color: COLORS.primary} : ''}>{answer}</Text> 
                    </TouchableOpacity>
                ))}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      marginTop: 120,
      width: '80%',
      height: 250
    }, 
    header: (gradientColor) => ({
        backgroundColor: gradientColor[0],
        padding: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }),
    title:{
        color: COLORS.primary
    },
    answersContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around'
    },
    answerBtn:{
        marginHorizontal: 20,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: COLORS.soft,
        borderWidth: 1,
        paddingVertical: 10
    }
});
 
export default QuestionCard;