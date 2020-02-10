// React Imports
import React from 'react';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens Import
import WelcomeScreen from '../views/Welcome';
import RegisterScreen from '../views/Register';
import QuizScreen from '../views/Quizz';
import ScoreScreen from '../views/Score';


const Stack = createStackNavigator()

const MainNavigation = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{headerShown: false}}

                />
                <Stack.Screen 
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Quiz"
                    component={QuizScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Score"
                    component={ScoreScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
     );
}
 
export default MainNavigation;