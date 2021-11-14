import React, { createContext, useEffect, useState } from "react"
import firestore from "@react-native-firebase/firestore"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [countProduct, setCountProduct] = useState()

    async function getData(coll = "BİM") {
        await firestore().collection(coll).get().then(result => {
            setCountProduct(result.size)
            let comp = []
            result.forEach(result2 => {
                comp.push({ ...result2.data(), Key: result2.id })
            })
            setData(comp)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <UserContext.Provider
            value={{
                data,getData
            }}
        >
            {children}
        </UserContext.Provider>
    )
}