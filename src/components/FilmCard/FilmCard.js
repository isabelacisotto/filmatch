import { Image, Text, View } from "react-native";
import { Star } from "lucide-react-native";
import { styles } from "./FilmCard.styles";
import { colors } from "../../colors";

export function FilmCard({ item }) {
    return (
        <View style={styles.filmCardContainer}>
            <Image source={item.image} style={styles.filmImage} />
            <Text style={styles.filmTitle} numberOfLines={1}>{item.title}</Text>

            <View style={styles.filmDetails}>
                <Star size={11} color={colors.primary} fill={colors.primary} />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.detailSeparator}>•</Text>
                <Text style={styles.year}>{item.lauchYear}</Text>
            </View>

            <Text style={styles.niche} numberOfLines={1}>{item.niche.join(", ")}</Text>
        </View>
    )
}