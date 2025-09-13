import { useQuery, useMutation } from '@tanstack/react-query';
import cowsData from '../data/cows.json';

export const useCows = () => {
    return useQuery({
        queryKey: ['cows'],
        queryFn: async () => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(cowsData), 3000)
            });
        },
    });
};
