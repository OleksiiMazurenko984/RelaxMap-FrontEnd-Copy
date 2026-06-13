import axios from "axios";
import type { Location } from "@/types/profile";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const api = axios.create({ baseURL: API_URL });

interface GetLocationsParams {
  page: number;
  limit: number;
  search?: string;
  region?: string;
  locationType?: string;
  sort?: string;
}
interface LocationsResponse {
  page: number;
  limit: number;
  totalLocations: number;
  totalPages: number;
  locations: Location[];
}
interface LocationType {
  _id: string;
  type: string;
  slug: string;
  shortDescription?: string;
}
interface Region {
  _id: string;
  region?: string;
  name?: string;
  type?: string;
  slug: string;
}
export const getLocationTypes = async (): Promise<LocationType[]> => {
  const { data } = await api.get<LocationType[]>("/categories/location-types");
  return data;
};
export const getRegions = async (): Promise<Region[]> => {
  const { data } = await api.get<Region[]>("/categories/regions");
  return data;
};
export const getLocations = async ({
  page,
  limit,
  search,
  region,
  locationType,
  sort,
}: GetLocationsParams): Promise<LocationsResponse> => {
  const { data } = await api.get<LocationsResponse>("/locations", {
    params: {
      page,
      limit,
      search: search || undefined,
      region: region || undefined,
      locationType: locationType || undefined,
      sort: sort || undefined,
    },
  });
  return data;
};
