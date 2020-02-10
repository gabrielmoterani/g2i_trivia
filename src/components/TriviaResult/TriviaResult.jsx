import React from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native';


//Libs Import
const Entities = require('html-entities').AllHtmlEntities;


//Static Import
import COLORS from '../../config/theme';

const TriviaResult = ({questions}) => {
    const entities = new Entities();

    return ( 
        <ScrollView style={styles.container}>
            {questions.map((question, index) => (
                <View key={index}>
                    <View style={styles.text(question.answerWasCorrect)}>
                        <Text style={styles.text(question.answerWasCorrect)}>
                            {question.answerWasCorrect ? '+' : '-'} {' '}
                            {entities.decode(question.question)}
                        </Text>
                    </View>
                </View>
            ))}
        </ScrollView>
     );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50,
        marginHorizontal: 20
    },
    text:(isCorrect) => ( {
        color: isCorrect ? COLORS.green : COLORS.pink,
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10
    }),
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})
 
export default TriviaResult;