import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
export default function Screen3() {
    const [url, setUrl] = useState(require('../assets/vs_red.png'));
    const [textcoler, setTextcoler] = useState('đỏ');
  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Image style = {styles.imgheader} source={url}></Image>
            <View style = {styles.contentInfoPhone}>
                <Text style = {styles.txtInfoPhone}>Điện Thoại Vsmart Joy 3</Text>
                <Text style = {styles.txtInfoPhone}>Hàng chính hãng</Text>
                <View style = {styles.contenttxtColorPhone}>
                    <Text style = {styles.txtColor}>Màu:</Text>
                    <Text style = {styles.txtdo}> {textcoler}</Text>
                </View>
                <View style = {styles.contenttxtsup}>
                    <Text style = {styles.txtSuplier}>Cung cấp bởi</Text>
                    <Text style = {styles.txttiki}> Tiki Tradding</Text>
                </View>
                <Text style = {styles.txtPrice}>1.790.000 đ</Text>
            </View>
        </View>
        <View style = {styles.contentColor}>
                <Text style = {styles.txtContentColor}>
                Chọn một màu bên dưới:
                </Text>
                <TouchableOpacity style = {styles.btnColor1} onPress={()=>{
                    setUrl (require('../assets/vs_silver.png'))
                    setTextcoler('bạc')
                }} ></TouchableOpacity>
                <TouchableOpacity style = {styles.btnColor2} onPress={()=>{
                    setUrl ( require('../assets/vs_red.png'))
                    setTextcoler('đỏ')
                }}></TouchableOpacity>
                <TouchableOpacity style = {styles.btnColor3} onPress={()=>{
                    setUrl (require('../assets/vs_black.png'))
                    setTextcoler('đen')
                }}></TouchableOpacity>
                <TouchableOpacity style = {styles.btnColor4} onPress={()=>{
                    setUrl (require('../assets/vs_blue.png'))
                    setTextcoler('xanh')
                }}></TouchableOpacity>
                <TouchableOpacity style = {styles.btnXong} onPress={() =>{
                     navigation.navigate("screen1");
                     }}>
                    <Text style = {styles.txtBtnXong}>XONG</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 160,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    imgheader: {
        width: 124,
        height: 138,
        top: 10,
        resizeMode: 'contain'
    },
    contentInfoPhone: {
        flexDirection: 'column',
        left: 15,
    },
    txtInfoPhone: {
        fontSize: 18,
        top: 17
    },
    contenttxtColorPhone: {
        flexDirection: 'row',
        top: 22,
    },
    txtColor: {
        fontSize: 17,
    },
    txtdo: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    contenttxtsup: {
        flexDirection: 'row',
        top: 24,
    },
    txtSuplier: {
        fontSize: 17,
    },
    txttiki: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    txtPrice:{
        top: 28,
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentColor: {
        flex: 8,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
    },
    txtContentColor: {
        alignSelf: 'flex-start',
        fontSize: 22,
        color: 'black',
        margin: 15,
    },
    btnColor1: {
        width: 90,
        height: 80,
        backgroundColor: '#C5F1FB',
        marginVertical: 5,
        shadowColor: '#00000040'
    },
    btnColor2: {
        width: 90,
        height: 80,
        backgroundColor: '#F30D0D',
        marginVertical: 5

    },
    btnColor3: {
        width: 90,
        height: 80,
        backgroundColor: '#000000',
        marginVertical: 5

    },
    btnColor4: {
        width: 90,
        height: 80,
        backgroundColor: '#234896',
        marginVertical: 5
    },
    btnXong: {
        backgroundColor: '#1952E294',
        width: 336,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 25,
        borderColor: '#CA1536',
        borderWidth: 1
    },
    txtBtnXong: {
        color: '#F9F2F2',
        fontSize:  22,
        fontWeight: 'bold',
        
    }
 
})