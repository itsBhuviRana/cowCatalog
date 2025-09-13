import React, { useCallback } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useCowContext } from "../context/CowProvider";
import CustomDropdown from "./CustomDropdown";
import Colors from "../theme/color";

const statusOptions = ["Active", "In Treatment", "Deceased"];
const penOptions = ["Indian", "African", "Netherland"];

const SearchFilterBar = () => {
    const { search, setSearch, statusFilter, setStatusFilter, penFilter, setPenFilter, resetFilters } = useCowContext();

    const handleSearch = useCallback((text) => {
        setSearch(text);
    }, [setSearch]);

    return (
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row-reverse" }}>
                <View style={{ flex: 0.7, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={resetFilters} style={styles.clearFilter}>
                        <Text style={{ color: Colors.dark, fontWeight: '600' }}>Clear Filters</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1.4, justifyContent: "center" }}>
                    {/* Search Box */}
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by Ear Tag"
                        placeholderTextColor={Colors.gray}
                        value={search}
                        onChangeText={handleSearch}
                    />
                </View>
            </View>

            {/* Dropdowns */}
            <View style={styles.filterRow}>
                <View style={[styles.filterColumn, { paddingRight: 3 }]}>
                    <CustomDropdown
                        label="Filter by Status"
                        options={statusOptions}
                        selectedValue={statusFilter}
                        onSelect={setStatusFilter}
                    />
                </View>
                <View style={[styles.filterColumn, { paddingLeft: 3 }]}>
                    <CustomDropdown
                        label="Filter by Pen"
                        options={penOptions}
                        selectedValue={penFilter}
                        onSelect={setPenFilter}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginBottom: 12 },
    clearFilter: {
        paddingVertical: 8,
        backgroundColor: Colors.accent,
        borderRadius: 6,
        width: 110,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    filterRow: {
        display: "flex",
        flexDirection: "row"
    },
    filterColumn: {
        flex: 1,
    },
    searchInput: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        fontSize: 14,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
});

export default React.memo(SearchFilterBar);
