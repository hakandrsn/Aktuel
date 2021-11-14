import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import Banner from './admob/Banner'
import Container from './components/Container'
import TabBarNav from './components/TabBarNav'
import AppStyles from './styles/AppStyles'
import firestore from "@react-native-firebase/firestore"
import { UserProvider } from './context/userContext'



const App = () => {
    return (
        <UserProvider>
        <SafeAreaView style={AppStyles.container}>
            <View style={AppStyles.banner}>
                <Banner />
            </View>
            <Container />
            <TabBarNav />
        </SafeAreaView>
        </UserProvider>
    )
}

export default App
