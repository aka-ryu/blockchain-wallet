import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Routes from "../../navigation/Routes"
import style from './style';
import WInput from "../../component/input/input";

const Login = ({ navigation }: any) => {
    return (
        <SafeAreaView>
            <View style={style.titleLayer}>
                <Text style={style.title}>Ryu's Wallet</Text>
            </View>
            <View>
                <WInput/>
            </View>
        </SafeAreaView>
    )
}

export default Login
