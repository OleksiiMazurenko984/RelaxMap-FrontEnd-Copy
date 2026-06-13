import type { Location } from "@/types/profile";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

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
  const response = await fetch(`${API_URL}/categories/location-types`);

  if (!response.ok) {
    throw new Error("Failed to fetch location types");
  }

  return response.json();
};

export const getRegions = async (): Promise<Region[]> => {
  const response = await fetch(`${API_URL}/categories/regions`);

  if (!response.ok) {
    throw new Error("Failed to fetch regions");
  }

  return response.json();
};

export const getLocations = async ({
  page,
  limit,
  search,
  region,
  locationType,
  sort,
}: GetLocationsParams): Promise<LocationsResponse> => {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", String(limit));

  if (search) params.set("search", search);
  if (region) params.set("region", region);
  if (locationType) params.set("locationType", locationType);
  if (sort) params.set("sort", sort);

  const res = await fetch(`${API_URL}/locations?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch locations");
  }

  return res.json();
};
