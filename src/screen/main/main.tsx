import { SafeAreaView, Text } from "react-native"
import Header from "../../component/header/header"

const Main = () => {
    return (
        <SafeAreaView>
            <Header
                goBack={true}
                title={'gdgd'}
            />
            <Text>메인 뷰</Text>
        </SafeAreaView>
    )
}

export default Main
