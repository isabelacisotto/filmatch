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

            <SafeAreaView style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
                <View style={styles.header}>

                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Entrar</Text>
                    <Text style={styles.subtitle}>Continue sua sessão e descubra novas recomendações.</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}