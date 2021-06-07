import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginButton(props) {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: props.backgroundColor}]}
            onPress={props.onPress}
        >
            <View style={styles.iconWrapper}>
                <FontAwesome name={props.iconName} style={styles.icon} size={22} color={"#fff"}/>
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, {color: "#fff"}]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: '10%',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});