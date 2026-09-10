import { Bookmark, Compass, House, UserRound } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../colors";
import { styles } from "./Footer.styles";

const footerItems = [
    { label: "Início", icon: House },
    { label: "Explorar", icon: Compass },
    { label: "Minha Lista", icon: Bookmark  },
    { label: "Perfil", icon: UserRound },
];  

export function Footer({ onItemPress, isActive }) {

    return (
        <View style={styles.footerContainer}>
            {footerItems.map(({ label, icon: Icon }) => {
                const color = isActive === label ? colors.primary : colors.white;

                return (
                    <TouchableOpacity
                        key={label}
                        style={styles.footerItem}
                        onPress={() => onItemPress?.(label)}
                        activeOpacity={0.7}
                    >
                        <Icon size={22} color={color} strokeWidth={1.8} />
                        <Text style={[styles.footerLabel, { color }]}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}