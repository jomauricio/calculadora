import React from "react";
import { Text, StyleSheet } from "react-native";

export default props => {
    return (
        <>
        <Text style={style.historico}>259,04</Text>
        <Text style={style.resultado}>259,04</Text>
        </>
    )
}

const style = StyleSheet.create({
    historico:{
        fontSize: 46,
        textAlign: "right",
        paddingEnd: 30,
        paddingTop: 30
    },
    resultado:{
        fontSize: 32,
        textAlign: "right",
        paddingEnd: 30,
        paddingTop: 20
    }
})