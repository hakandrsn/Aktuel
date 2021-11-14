import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        marginTop:10
    },
    renderItemStyle:{
        width:"95%",
        borderWidth:1,
        borderRadius:13,
        marginBottom:8,
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:"#FEF7E0"
    },
    renderItemMainView:{
        flexDirection:"row"
    },
    renderItemView:{
        width:"80%",
        borderRadius:17,
        marginLeft:5,
        
    },
    renderItemTxt:{
        color:"black",
        fontSize:16
    },
    renderItemImage:{
        width:45,
        height:45,
        borderColor:"tomato",
        borderWidth:.4,
        borderRadius:50,
        marginLeft:5,
        alignSelf:"center"
    }
})
export default Styles