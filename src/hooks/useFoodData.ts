import { useQuery } from 'react-query';
import { FoodData } from '../interface/FoodData';
import { AxiosPromise } from './../../node_modules/axios/index.d';
import axios from "axios";

const API_URL = "localhost:8080";

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response
}

export function useFoodData() {
    const query = useQuery ({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}
