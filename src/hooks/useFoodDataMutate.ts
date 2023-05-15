import { useMutation, useQueryClient } from "react-query";
import { FoodData } from "../interface/FoodData";
import { AxiosPromise } from "axios";
import axios from "axios";

const API_URL = "http://localhost:8080/food/";

const postData = async (data: FoodData): AxiosPromise<any> => {
  const response = axios.post(API_URL + "cadastrar", data);
  return response;
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate;
}
