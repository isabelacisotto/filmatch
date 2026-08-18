import { Image, Text, View } from "react-native";
import { styles } from "./Login.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {
    return(
        <View style={styles.container}>
            <Image
                source={require("../../../assets/background.png")}
                style={styles.image}
                resizeMode="cover"
            />

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>

                </View>
                <Text>Entrar</Text>
            </SafeAreaView>
        </View>
    )
}