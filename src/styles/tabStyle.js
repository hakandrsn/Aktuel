import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: .3,
        backgroundColor: "#F7F7F7",
        position: "absolute",
        height: 50,
        width: "100%",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        opacity:.9,
        borderTopWidth:.5
    },
    bimarea: {
        backgroundColor: "red",
        width: 50,
        alignSelf: "center",
        height: 22,
        borderRadius: 6,

    },
    bimareatxt: {
        fontSize: 17,
        color: "white",
        textAlign: "center",
        fontWeight: "600"
    },
    sokarea: {
        backgroundColor: "#F7DA00",
        width: 50,
        alignSelf: "center",
        height: 22,
        borderRadius: 6
    },
    sokareatxt: {
        fontSize: 17,
        color: "blue",
        textAlign: "center",
        fontWeight: "600"
    },
    a101area: {
        backgroundColor: "#00A7C6",
        width: 50,
        alignSelf: "center",
        height: 22,
        borderRadius: 6
    },
    a101areatxt: {
        fontSize: 17,
        color: "white",
        textAlign: "center",
        fontWeight: "600"
    },
    touch:{
        width:"33%",
        height:50,
        justifyContent:"center",
        borderRightWidth:.3,
        borderColor:"tomato"
    }
})
export default Styles