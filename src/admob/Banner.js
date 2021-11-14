import React from 'react'
import { View, Text } from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob'

const Banner = () => {
    return (
        <View style={{width:"100%"}}>
            <AdMobBanner
                adSize="largeBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
            />
        </View>
    )
}

export default Banner
