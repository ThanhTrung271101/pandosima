import { View, Text, StyleSheet, Platform, Image} from 'react-native'

const getTypeDetails = (type) => {
    switch(type.toLowerCase()) {
        case "electric":
            return {borderColor: "#DFF90A", emoji: "⚡️"}
        case "water":
            return { borderColor: "#0AE8F9", emoji: "💧"}
        case "fire":
            return { borderColor: "#EE0202", emoji: "🔥"}
        case "grass":
            return { borderColor: "#0AF970", emoji: "🍀"}
        default:
            return { borderColor: "#0A0A09", emoji: "❓"}
    }
}

export default function PokemonCard({
    name,
    avatar,
    type,
    hp,
    moves,
    weaknesses
}) {

    const { borderColor, emoji} = getTypeDetails(type)
    
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>

            <Image source={avatar} accessibilityLabel={`${name} pokemon`} style={styles.image} resizeMode='contain'>

            </Image>
            <View style={styles.typeContainer}>
                <View style={[styles.typeBagde, {borderColor}]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>
                        {type}
                    </Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.moves}>
                    Moves: {moves.join(", ")}
                </Text>
            </View>
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknesses}>
                    Weaknesses: {weaknesses.join(", ")}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: "16",
        borderWidth: "2",
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {width: 2, height: 2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%", height: 200, marginBottom: 16, alignContent: "center"
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40
    },
    typeBagde: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 4
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    movesContainer: {
        marginBottom: 16,
    },
    moves: {
        fontSize: 22,
        fontWeight: "bold",
        color: "blue"
    },
    weaknessesContainer: {
        marginBottom: 16
    },
    weaknesses: {
        fontSize: 22,
        fontWeight: "bold",
        color: "purple"
    }
})