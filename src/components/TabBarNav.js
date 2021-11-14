import React, {useState, useEffect, useContext} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { UserContext } from '../context/userContext'
import tabStyle from '../styles/tabStyle'


const tabBarNav = () => {
    const value = useContext(UserContext)
    return (
        <View style={tabStyle.container}>
            <TouchableOpacity 
           onPress={()=>{value.getData("BİM")}}
            style={tabStyle.touch}>
                <View style={tabStyle.bimarea}>
                    <Text style={tabStyle.bimareatxt}>
                        BİM
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{value.getData("SOK")}}
            style={tabStyle.touch}>
                <View style={tabStyle.sokarea}>
                    <Text style={tabStyle.sokareatxt}>
                        Ş O K
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{value.getData("A101")}}
            style={tabStyle.touch}>
                <View style={tabStyle.a101area}>
                    <Text style={tabStyle.a101areatxt}>
                        A-101
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default tabBarNav
