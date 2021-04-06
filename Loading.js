import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>오늘의 멋진 날씨를 알아보세요 😉 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 150,
        backgroundColor: "#2c3e50"
    },
    text: {
        color: "white",
        fontSize: 23
    }
});