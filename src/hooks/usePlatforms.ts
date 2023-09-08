import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};

export default usePlatforms;