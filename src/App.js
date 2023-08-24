import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Display from "./Display";
import Botao from "./Botao";

export default () => {
    return (
        <View style={style.app}>
            <View style={style.display}>
                <Display/>
            </View>
            <View style={style.botoes}>
                <Botao valor="C" operador/>
                <Botao valor="()" operador/>
                <Botao valor="%" operador/>
                <Botao valor="<<" operador/>
                <Botao valor="7"/>
                <Botao valor="8"/>
                <Botao valor="9"/>
                <Botao valor="X" operador/>
                <Botao valor="4"/>
                <Botao valor="5"/>
                <Botao valor="6"/>
                <Botao valor="-" operador/>
                <Botao valor="1"/>
                <Botao valor="2"/>
                <Botao valor="3"/>
                <Botao valor="+" operador/>
                <Botao valor="."/>
                <Botao valor="0"/>
                <Botao valor="/"/>
                <Botao valor="=" operador/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    fonte:{
        fontSize: 36
    },
    app: {
        flex: 1
    },
    display:{
        flex: 3,
    },
    botoes:{
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap"    
    }

})


