import React, { useContext, useEffect, useState, Component } from 'react'
import { Text, SafeAreaView, FlatList, TouchableOpacity, View, Image } from 'react-native'
import ContainerStyles from '../styles/ContainerStyles'
import { UserContext } from '../context/userContext'
const container = () => {
    const value = useContext(UserContext)
    const renderItem = ({item}) =>(
        <TouchableOpacity style={ContainerStyles.renderItemStyle}>
            <View style={ContainerStyles.renderItemMainView}>
                <Image source={require("../Image/bim.png")} style={ContainerStyles.renderItemImage} />
                <View style={ContainerStyles.renderItemView}>
                    <Text style={ContainerStyles.renderItemTxt}>Markası : {item.Marka} </Text>
                    <Text style={ContainerStyles.renderItemTxt}>Fiyatı : {item.Fiyat} ₺</Text>
                    <Text style={ContainerStyles.renderItemTxt}>Stok Adedi : </Text>

                </View>
            </View>
        </TouchableOpacity>
    )


    return (

        <SafeAreaView style={ContainerStyles.container}>
            <FlatList
                data={value.data}
                keyExtractor={(item) => item.Key}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default container
