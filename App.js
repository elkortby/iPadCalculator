import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { stylesHeight, stylesWidth } from './Styles';

export default function App() {
  const [display, setdisplay] = useState("0")
  const [oldDisplay, setoldDisplay] = useState("0")
  const [operator, setoperator] = useState(null)
  const [oldOperator, setoldOperator] = useState(null)
  const [result, setresult] = useState(false)
  
  const [styles, setOrientation] = useState(Dimensions.get("window").width < Dimensions.get("window").height ? stylesHeight : stylesWidth);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
        if (width > height) {
            setOrientation(stylesWidth)
        } else {
            setOrientation(stylesHeight)
        }
    })
  }, []);

  const setnumber = (number) => {
    if (number === ".") {
      let contains = false
      for (let i = 0; i < display.length; i++) {
        const char = display.charAt(i)
        if (char === ".") contains = true
      }
      if (contains) return null
    }
    if (result) {
      if (operator) {
        setoldDisplay(display)
        setdisplay("0")
        setdisplay(old => old === "0" ? number : old + number)
        setoldOperator(operator)
        setoperator(null)
      } else {
        setdisplay(number)
        setresult(false)
      }
    } else {
      if (operator) {
        setoldDisplay(display)
        setdisplay("0")
        setdisplay(old => old === "0" ? number : old + number)
        setoldOperator(operator)
        setoperator(null)
      } else {
        setdisplay(old => old === "0" ? number : old + number)
      }
    }
  }

  const devid = () => {
    const num = parseFloat(display)
    setdisplay(num / 100)
  }

  const setOperator = (op) => {
    setoperator(old => old === op ? null : op)
  }

  const calculate = () => {
    const num1 = parseFloat(oldDisplay)
    const num2 = parseFloat(display)
    if (oldOperator === "÷") setdisplay(num1 / num2)
    if (oldOperator === "×") setdisplay(num1 * num2)
    if (oldOperator === "−") setdisplay(num1 - num2)
    if (oldOperator === "+") setdisplay(num1 + num2)
    setoldDisplay("0")
    setoldOperator(null)
    setoperator(null)
    setresult(true)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{
        width: 470,
        alignSelf: 'flex-end',
      }}> 
        <View>
          <Text style={[styles.displayText, { textAlign: 'right', fontSize: display.length < 7 ? (Dimensions.get("window").height / 8) : (Dimensions.get("window").height / 8 - display.length * 2) }]}>{display}</Text>
        </View>
        <View> 
          <View style={styles.row}> 
            <TouchableOpacity 
              onPress={() => setOperator("÷")}
              style={[operator === "÷" ? styles.white : styles.orange, styles.rounded, styles.center]}
            >
              <Text style={operator === "÷" ? styles.orangeText : styles.whiteText}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={devid}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>﹪</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setdisplay(old => old.charAt(0) === "-" ? old.slice(1, old.length) : "-" + old)}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>⁺/₋</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setdisplay("0")}
              // onPress={() => display === "0" ? setdisplay("0") : setdisplay(old => old.length !== 1 ? old.slice(0, -1) : "0")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>{display === "0" ? "AC" : "C"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}> 
            <TouchableOpacity 
              onPress={() => setOperator("×")}
              style={[operator === "×" ? styles.white :  styles.orange, styles.rounded, styles.center]}
            >
              <Text style={operator === "×" ? styles.orangeText :  styles.whiteText}>×</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("9")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("8")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("7")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}> 
            <TouchableOpacity 
              onPress={() => setOperator("−")}
              style={[operator === "−" ? styles.white : styles.orange, styles.rounded, styles.center]}
            >
              <Text style={operator === "−" ? styles.orangeText : styles.whiteText}>−</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("6")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("5")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("4")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}> 
            <TouchableOpacity 
              onPress={() => setOperator("+")}
              style={[operator === "+" ? styles.white : styles.orange, styles.rounded, styles.center]}
            >
              <Text style={operator === "+" ? styles.orangeText : styles.whiteText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("3")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("2")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("1")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}> 
            <TouchableOpacity 
              onPress={calculate}
              style={[styles.orange, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber(".")}
              style={[styles.space, styles.rounded, styles.center]}
            >
              <Text style={styles.whiteText}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setnumber("0")}
              style={[styles.space, styles.roundedZero, styles.center]}
            >
              <Text style={styles.whiteText}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}