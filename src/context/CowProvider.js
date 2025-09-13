import React, { createContext, useState, useContext, useMemo } from 'react';

const CowContext = createContext(null);

export const CowProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState(null);
    const [penFilter, setPenFilter] = useState(null);

    const resetFilters = () => {
        setSearch('');
        setStatusFilter(null);
        setPenFilter(null);
    };

    const value = useMemo(
        () => ({
            search,
            setSearch,
            statusFilter,
            setStatusFilter,
            penFilter,
            setPenFilter,
            resetFilters,
        }),
        [search, statusFilter, penFilter]
    );

    return <CowContext.Provider value={value}>{children}</CowContext.Provider>;
};

export const useCowContext = () => {
    const context = useContext(CowContext);
    if (!context) {
        throw new Error('useCowContext must be used within CowProvider');
    }
    return context;
};
