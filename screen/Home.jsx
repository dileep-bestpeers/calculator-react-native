import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'

export default function HomeScreen() {
    const [inputValues, setInputValues] = useState('')
    const [btnValue, setBtnValue] = useState(0)

    const backOnePlace = () => {
        if (inputValues) {
            let value = inputValues.slice(0, inputValues.length - 1)
            setInputValues(value)
            console.log(value);
        }
    }

    const result = () => {
        try {
            let res = eval(inputValues)
            setBtnValue(res)
        }
        catch (e) {
            console.log(e);
        }
    }
    const btnValueFunc = (value) => {
            const allValues = inputValues + value
            setInputValues(allValues)
        let oper = ['%', '-', '+', '*', '/']
        oper.map((item) => {
            if (item != value) {
                result()
            }
        })
    }
    useEffect(() => {
        result()
    }, [inputValues])
    return (
        <View style={styles.mostOuter}>
            <View style={styles.inputOuterBox}>
                <Text style={styles.resultBox}>{inputValues} {inputValues && '='} {btnValue}</Text>
                <TextInput
                    style={styles.inputValues}
                    onChangeText={text => { setInputValues(text) }}
                    value={inputValues}
                />
            </View>
            <View style={styles.numberOuterBox}>
                <View style={styles.numberRow}>
                    <TouchableOpacity onPress={() => { setInputValues(""); setBtnValue(0) }} style={styles.number}><Text style={styles.textInner}> C </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc("%") }} style={styles.number}><Text style={styles.textInner}> % </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { backOnePlace() }} style={styles.number}><Text style={styles.textInner}> X </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('/') }} style={styles.number}><Text style={styles.textInner}> / </Text></TouchableOpacity>
                </View>
                   <View style={styles.numberRow}>
                    <TouchableOpacity onPress={() => { btnValueFunc('7') }} style={styles.number}><Text style={styles.textInner}> 7 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('8') }} style={styles.number}><Text style={styles.textInner}> 8 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('9') }} style={styles.number}><Text style={styles.textInner}> 9 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('*') }} style={styles.number}><Text style={styles.textInner}> * </Text></TouchableOpacity>
                </View>
                <View style={styles.numberRow}>
                    <TouchableOpacity onPress={() => { btnValueFunc('4') }} style={styles.number}><Text style={styles.textInner}> 4 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('5') }} style={styles.number}><Text style={styles.textInner}> 5 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('6') }} style={styles.number}><Text style={styles.textInner}> 6 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('-') }} style={styles.number}><Text style={styles.textInner}> - </Text></TouchableOpacity>
                </View>
                <View style={styles.numberRow}>
                    <TouchableOpacity onPress={() => { btnValueFunc('1') }} style={styles.number}><Text style={styles.textInner}> 1 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('2') }} style={styles.number}><Text style={styles.textInner}> 2 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('3') }} style={styles.number}><Text style={styles.textInner}> 3 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('+') }} style={styles.number}><Text style={styles.textInner}> + </Text></TouchableOpacity>
                </View>
                <View style={styles.numberRow}>
                    <TouchableOpacity onPress={() => { btnValueFunc('00') }} style={styles.number}><Text style={styles.textInner}> 00 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('0') }} style={styles.number}><Text style={styles.textInner}> 0 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { btnValueFunc('.') }} style={styles.number}><Text style={styles.textInner}> . </Text></TouchableOpacity>
                    <TouchableOpacity onPress={result} style={styles.number}><Text style={styles.textInner}> = </Text></TouchableOpacity>
                </View>
            </View> 
        </View>
    )
}
const styles = StyleSheet.create({
    mostOuter:{
        backgroundColor:"powderblue",
        flex:1
    },
    inputOuterBox: {
        width: "100%",
        flex:2,
        marginTop:40,
        padding: 10,
    },
    resultBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontSize: 25,
        padding: 10,
        fontWeight: "bold",
        // borderWidth: 2,
        // borderColor: "thistle",
        // borderBottomWidth: 0,
        textAlign:'right',
        height:120,
    },
    inputValues: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        textAlign: 'right',
        // borderWidth: 2,
        // borderColor: "thistle",
        // borderTopWidth: 0,
        padding: 10,
    },
    numberRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'powderblue',
        height: 80,
    },
    number: {
        width: '25%',
        height:'100%',
        textAlign:'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textInner: {
        fontWeight: 'bold',
        fontSize: 27,
        borderWidth: 1,
        borderColor: "white",
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingVertical: 10,
        borderRadius:50,
        backgroundColor:"lightslategrey",
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:20,
        textAlign:"center"
    },
    numberOuterBox: {
        flex: 2,
        width: '100%',
        height:'100%'
        // position: 'absolute',
        // bottom:1,
    }

})