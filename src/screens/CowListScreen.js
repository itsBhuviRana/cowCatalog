import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCows } from '../hooks/useCows';
import { useCowContext } from '../context/CowProvider';
import Card from '../components/Card';
import Colors from '../theme/color';
import SearchFilterBar from '../components/SearchFilterBar';

export default function CowListScreen() {
    const navigation = useNavigation();
    const { data, isLoading } = useCows();
    const { search, statusFilter, penFilter } = useCowContext();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.primary }}>
                <ActivityIndicator size="large" color={Colors.dark} />
                <Text style={{ color: Colors.dark, size: 18, fontWeight: "bold" }}>Data Loading...</Text>
            </View>
        );
    }

    const cows = data.filter((cow) => {
        if (search && !String(cow.earTag).includes(search)) return false;
        if (statusFilter && cow.status !== statusFilter) return false;
        if (penFilter && cow.pen !== penFilter) return false;
        return true;
    });

    const renderItem = ({ item }) => (
        <Card
            earTag={item.earTag}
            sex={item.sex}
            area={item.pen}
            status={item.status}
            eventDate={item.lastEventDate}
            onPress={() => navigation.navigate('CowDetail', { cowId: item.id })}
        />
    );

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: Colors.primary }}>
            <SearchFilterBar />
            <FlatList
                data={cows}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
