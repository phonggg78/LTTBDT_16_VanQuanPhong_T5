import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
export default function Screen2() {
    return(
        <View style={styles.wrapper}>  
            <View style={styles.header}>
                <Image style={styles.inputImg} source={require('../assets/vs_blue.png')}/>
                    <Text style={[styles.title,{'marginTop':'10px'}]}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
            <View style={styles.choseWrapper}>
                <Text style={[styles.titleChose,{'marginTop':'10px'}]}>Chọn một màu bên dưới:</Text>.
                <View style={styles.colorPhone}>
                    <TouchableOpacity>
                        <Image style={[styles.inputImgChose,{'marginTop':'10px'}]} source={require('../assets/Rectangle4.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={[styles.inputImgChose,{'marginTop':'10px'}]} source={require('../assets/Rectangle5.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={[styles.inputImgChose,{'marginTop':'10px'}]} source={require('../assets/Rectangle6.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={[styles.inputImgChose,{'marginTop':'10px'}]} source={require('../assets/Rectangle7.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrapperChose}>
                        <Text >XONG</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor:'white',

    },
    header:{
        marginTop: '10px',
        marginLeft: '30px',
        flexDirection:'row',
        height: '36',
        width: '350px',
        backgroundColor: 'white',
        marginBottom: '10px',
    },
    inputImg:{
        width: '112px',
        height: '132px',
    },
    inputImgChose:{
        width: '80px',
        height: '80px',
    },
    title:{
        marginLeft: '30px',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '17.58px',
    },
    choseWrapper:{
        backgroundColor: '#C4C4C4',
        width: '400px',
        height: '80%',
    },
    titleChose:{
        fontSize: '20px',
        marginLeft: '30px',
    },
    colorPhone:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperChose:{
        marginTop: '40px',
        alignItems: 'center',
        borderColor: '#00000075',
        borderWidth: '1px',
        borderRadius: '20px',
        width: '326px',
        height: '44px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#1952E294'
    }
})