import React, { useState, useMemo, useCallback } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Animated,
    Dimensions,
} from "react-native";
import Colors from "../theme/color";

const { height } = Dimensions.get("window");

const CustomDropdown = ({ label, options, selectedValue, onSelect }) => {
    const [visible, setVisible] = useState(false);
    const slideAnim = useMemo(() => new Animated.Value(height), []);

    const openModal = useCallback(() => {
        setVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [slideAnim]);

    const closeModal = useCallback(() => {
        Animated.timing(slideAnim, {
            toValue: height,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setVisible(false));
    }, [slideAnim]);

    return (
        <View>
            {/* Dropdown */}
            <TouchableOpacity style={styles.trigger} onPress={openModal}>
                <View style={{ borderWidth: 2, borderRadius: 10, padding: 5, borderColor: Colors.secondary}}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{selectedValue || "Select"}</Text>
                </View>
            </TouchableOpacity>

            {/* Modal */}
            <Modal transparent visible={visible} animationType="none">
                <View style={styles.backdrop}>
                    <Animated.View
                        style={[
                            styles.modalContent,
                            { transform: [{ translateY: slideAnim }] },
                        ]}
                    >
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{label}</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Text style={styles.closeBtn}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => {
                                        onSelect(item);
                                        closeModal();
                                    }}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </Animated.View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    trigger: {
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    label: { fontSize: 14, color: "#666" },
    value: { fontSize: 16, fontWeight: "600", color: "#111" },
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingBottom: 20,
        maxHeight: "60%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    headerText: { fontSize: 16, fontWeight: "600", color: "#222" },
    closeBtn: { fontSize: 20, fontWeight: "bold", color: Colors.dark },
    option: { padding: 16, borderBottomWidth: 1, borderColor: "#eee" },
    optionText: { fontSize: 15, color: "#333" },
});

export default React.memo(CustomDropdown);
