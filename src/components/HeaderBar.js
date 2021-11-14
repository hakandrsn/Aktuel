import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderStyles from '../styles/HeaderStyles'
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons"

const headerBar = () => {
    return (
        <SafeAreaView style={HeaderStyles.container}>
            <Text style={HeaderStyles.left}></Text>
            <Text style={HeaderStyles.mid}>BİM</Text>
            <View style={HeaderStyles.right}>
            <MatIcon name="clock-time-three-outline" size={30} color="#f44" />
            <Text>Time</Text>
            </View>
        </SafeAreaView>
    )
}

export default headerBar
