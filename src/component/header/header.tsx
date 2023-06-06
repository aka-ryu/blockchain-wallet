import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import style from './style';

interface IHeader {
    goBack: boolean;
    title: string;
}

const Header = ({ goBack, title }: IHeader) => {
    const navigation = useNavigation();
    return (
        <View style={style.headerWrap}>

            <View style={style.left}>
                {goBack && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>뒤로가기</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={style.center}>
                <Text>{title}</Text>
            </View>

            <View style={style.right} >
                <Text>홈으로</Text>
            </View>

        </View>
    );
};

export default Header