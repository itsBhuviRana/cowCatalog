import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../theme/color";

const Card = ({ earTag, sex, area, status, eventDate, onPress }) => {
    return (
        <View style={styles.card}>
            <View style={{ borderWidth: 2, borderRadius: 10, borderColor: Colors.secondary }}>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Ear Tag:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.value}>{earTag}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Sex:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.value}>{sex}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Pen (Area):</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.value}>{area}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Status:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.value}>{status}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Last Event:</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.value}>{eventDate}</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 20,
        marginHorizontal: 2,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        padding: 16,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3
    },
    column: {
        flex: 1,
        // borderWidth: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.dark,
        textAlign: "left",
    },
    value: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1a1a1a",
        textAlign: "center",
    },
    button: {
        backgroundColor: Colors.accent,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 14,
        marginBottom: 16,
        borderRadius: 12,
    },
    buttonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },
});

export default Card;
