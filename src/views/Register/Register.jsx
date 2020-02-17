// React Imports
import React, { useState, useEffect } from 'react'
import {StyleSheet, TouchableOpacity, View, Text, Image, TextInput, Button} from 'react-native';

// Libs Import
import { LinearGradient } from 'expo-linear-gradient';

// Components and Services
import Alert from '../../components/Alert';
import {saveRegisteredUser, checkIfStorageHasAnUser, removeRegisteredUser} from '../../services/asyncstorage';

//Static Imports
import LOGO from '../../assets/images/g2i.png'; 
import COLORS from '../../config/theme';


const Register = ({navigation}) => {

    const [name, setName] = useState('');

    const handleRegister = async () => {
        try{
            await saveRegisteredUser(name)
            redirectToWelcomePage()
        }
        catch (error) {
            Alert(error)
        } 
    }

    const redirectToWelcomePage = () => {
        navigation.replace('Welcome')
    }

    useEffect(() => {
        (async function checkIfItsRegistered() {
          const isRegisterd = await checkIfStorageHasAnUser();
          if(isRegisterd) redirectToWelcomePage()
        })();
    }, []);

    return ( 
        <LinearGradient style={styles.container} colors={COLORS.gradients[0]}>
            <View style={styles.registerSection}>
                <Text style={styles.label}>Welcome to Trivia Game</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="Type your name to play!"
                    placeholderTextColor="#333"
                    onChangeText={text => setName(text)}
                ></TextInput>
                <TouchableOpacity 
                    onPress={() => handleRegister()}
                    style={styles.playBtn} 
                    disabled={name === ''}
                >
                    <Text style={styles.btnText}>Play!</Text>    
                </TouchableOpacity>
            </View>
        </LinearGradient>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    registerSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandLogo:{
        marginBottom: 20
    },
    label:{
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20
    },
    input:{
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        textAlign: 'center',
        marginBottom: 15,
        marginBottom: 20
    },
    playBtn: {
        backgroundColor: COLORS.background,
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    btnText:{
        color: COLORS.primary,
        fontWeight: 'bold'
    }
  });


export default Register;