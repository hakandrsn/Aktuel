import React,{ useState,useEffect,createContext } from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore'

export const AuthContext = createContext()

export const AuthProvider = ({chilren}) => {
    return (
        <AuthContext.Provider
        value={{
            getDataForBim: async (coll,docc) => {
                try {
                    await firestore().collection(coll).doc(docc).get().then(result => {
                        console.log(result.data)
                        setData1(result.data())
                    })
                } catch (error) {
                    console.log(error)
                }
            },
            deneme: ()=> {
                <Text>HAKAN</Text>
            }
        }}
        
        >
            {chilren}
        </AuthContext.Provider>
    )
}

