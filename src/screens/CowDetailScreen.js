import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useCows } from '../hooks/useCows';
import Colors from '../theme/color';

export default function CowDetailScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { cowId } = route.params;
    const { data } = useCows();

    const cow = data.find((c) => c.id === cowId);

    if (!cow) {
        return (
            <View style={styles.center}>
                <Text style={styles.noData}>No data available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backBtn}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cow {cow.earTag}</Text>
                <View style={{ width: 50 }} />
            </View>

            <View style={styles.contentWrapper}>
                <View style={styles.topSection}>
                    <View style={[styles.infoCard, { backgroundColor: Colors.primaryGlass }]}>
                        <Text style={styles.label}>Tag:</Text>
                        <Text style={styles.value}>{cow.earTag}</Text>
                    </View>
                    <View style={[styles.infoCard, { backgroundColor: Colors.secondaryGlass }]}>
                        <Text style={styles.label}>Sex:</Text>
                        <Text style={styles.value}>{cow.sex}</Text>
                    </View>
                    <View style={[styles.infoCard, { backgroundColor: Colors.accentGlass }]}>
                        <Text style={styles.label}>Pen:</Text>
                        <Text style={styles.value}>{cow.pen}</Text>
                    </View>
                    <View style={[styles.infoCard, { backgroundColor: Colors.darkGlass }]}>
                        <Text style={styles.label}>Weight:</Text>
                        <Text style={styles.value}>{cow.weight} kg</Text>
                    </View>
                </View>

                <View style={styles.eventSection}>
                    <View style={styles.eventTitleCard}>
                        <Text style={styles.eventTitle}>Recent Events</Text>
                    </View>
                    <FlatList
                        data={cow.events}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.eventCard}>
                                <Text style={styles.eventDate}>{item.date}</Text>
                                <Text style={styles.eventType}>{item.type}</Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backBtn: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '500',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.white,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: -10,
    },
    topSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 20,
    },
    infoCard: {
        width: '48%',
        borderRadius: 12,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.dark,
        marginBottom: 3
    },
    value: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    eventSection: {
        flex: 1,
    },
    eventTitleCard: {
        backgroundColor: Colors.accent,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 10,
        marginBottom: 15
    },
    eventTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.dark,
        textDecorationLine: "underline"
    },
    eventCard: {
        backgroundColor: Colors.lightGray,
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 5,
        marginVertical: 8,
    },
    eventDate: {
        fontSize: 13,
        color: Colors.gray,
    },
    eventType: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.dark,
    },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    noData: { fontSize: 16, fontWeight: '500' },
});
