import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { calc, op } from '../Slice';

function Calculator(){
    const calculator = useSelector(state => state.calculator)
    const dispatch = useDispatch()
    const buttons = ['+', '-', '*', '/', '=', 'AC']
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    //Boutons opérateurs
    function displayButtons(){
        return buttons.map(button=> {
            return (
                <TouchableOpacity key={button} onPress={()=>dispatch(op(button))}>
                    <Text style={styles.buttons}>{button}</Text>
                </TouchableOpacity>
            )
        })
    }

    //Chiffres
    function displayNumbers(){
        return numbers.map(number=> {
            return (
                <TouchableOpacity style={{borderRadius: 50,}} key={number} onPress={()=>dispatch(calc(number))}>
                    <Text style={styles.numbers}>{number}</Text>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={{ flexDirection: "column"}}>
            <View style={styles.title}>
                <Text style={{fontSize: 30,}}>Calculatrice</Text>
            </View>
            <View style={styles.values}>
                <Text style={{fontSize: 50, padding: 20, textAlign:"center"}}>{calculator.firstValue}</Text>
                <Text style={{color: "gray", fontSize: 20, padding: 20, textAlign:"right"}}>{calculator.actualValue}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.displayNumbers}>{displayNumbers()}</View>
                <View style={styles.displayButtons}>{displayButtons()}</View>
            </View>
        </View>
    )
}

export default Calculator;

const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexWrap: 'wrap',
      flexDirection: 'row',
      paddingTop: 20,
    },
    
    numbers: {  
      textAlign: "center",
      paddingTop: 20,
      borderRadius: 50,
      color: 'white',
      backgroundColor: "#474350",
      fontWeight: 'bold',
      fontSize: 30,
      width: 80,
      height: 80,
      margin: 10,
    },

    buttons: {
        color: 'gray',
        paddingTop: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 30,
        height: 60,
  
    },

    values: {
        flex: 2,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },

    title: {
        flex: 1,
        alignItems: "center",
        color: 'black',
        fontWeight: 'bold',
        fontSize: 100,
        marginTop: 60,
    },

    displayNumbers: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "75%",
  
    },

    displayButtons: {
        flexDirection: "column",
        width: "25%",
        textAlign: "center",
    }
  });