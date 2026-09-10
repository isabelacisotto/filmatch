import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./GenresCard.styles";

export function GenresCard({ genre, onPress, icon }) {
    return (
        <TouchableOpacity style={styles.genreCardContainer} onPress={onPress}>
            <View style={styles.genreCardIcon}>
                {icon}
            </View>
            
            <Text style={styles.genreCardText}>{genre}</Text>
        </TouchableOpacity>
    )
}