import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
export default function Screen4() {

    return (
        <View style={styles.wrapper}>
            <Image style={styles.inputImg} source={require('../assets/vs_red.png')} />
            <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={styles.inpuStarWrapper}>
                <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                <Image style={styles.inputImgS} source={require('../assets/Star 1.png')} />
                <Text style={styles.inputText1}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.textPrice}>
                <Text style={[{'fontFamily':'Roboto'},{'fontSize':'18px'},{'lineHeight':'21.09px'}]}>1.790.000 đ</Text>
                <Text  style={[{'fontFamily':'Roboto'},{'fontSize':'15px'},{'lineHeight':'21.09px'},{'marginLeft':'60px'},{'textDecorationLine':'line-through'}]}>1.790.000 đ</Text>
            </View>
            <View style={styles.textPrice}>
                <Text style={[{'fontFamily':'Roboto'},{'fontSize':'12px'},{'lineHeight':'14.06px'},{'color':'#FA0000'},{'marginTop':'5px'}]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image style={[styles.inputImgS,{'marginLeft':'5px'},{'width':20},{'height':20}]} source={require('../assets/Group1.png')}/>
            </View>
            <TouchableOpacity style={styles.wrapperTouch}>
                <Text style={[{'fontFamily':'Roboto'},{'fontSize':'15px'},{'lineHeight':'17.58px'}]}>4 MÀU-CHỌN MÀU</Text>
                <Image style={[styles.inputImgS,{'marginLeft':'5px'},{'width':'11.5px'},{'height':'15px'},{'position':'absolute'},{'right':'25px'}]} source={require('../assets/Vector.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperChose}>
                <Text style={[{'fontFamily':'Roboto'},{'fontSize':'15px'},{'lineHeight':'17.58px'}]}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontSize: '15px',
        lineHeight: '17.58px',
        fontFamily: 'Roboto',   
    },
    inputImg: {
        width: '301px',
        height: '361px',    
    },
    inpuStarWrapper:{
        marginTop: '10px',
        flexDirection: 'row',
        width: '301px',
        marginLeft: '30px',
    },
    inputImgS:{
        width: '20px',
        height: '20px',
    },
    inputText1:{
        fontSize: '15px',
        lineHeight: '17.58px',
        fontFamily: 'Roboto', 
        flexDirection: '',
        marginLeft: '50px',
    },
    textPrice:{
        marginTop: '10px',
        flexDirection: 'row',
        width: '301px',
        marginLeft: '35px',
    },
    wrapperTouch:{
        marginTop: '10px',
        alignItems: 'center',
        borderColor: '#00000075',
        borderWidth: '1px',
        borderRadius: '20px',
        width: '326px',
        height: '44px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    wrapperChose:{
        marginTop: '90px',
        alignItems: 'center',
        borderColor: '#00000075',
        borderWidth: '1px',
        borderRadius: '20px',
        width: '326px',
        height: '44px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
    }
})