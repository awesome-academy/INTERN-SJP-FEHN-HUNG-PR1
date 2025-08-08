import type { FlowerPot } from "@/types";
import { API_BASE_URL } from "./config";

interface FlowerPotsResponse {
  data: FlowerPot[];
  total: number;
}

// GET /flowerPots?params...
export async function getFlowerPotsByType(params?: URLSearchParams): Promise<FlowerPotsResponse> {
  const url = `${API_BASE_URL}/flowerPots?${params?.toString() || ''}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch flower pots.');
  }

  const total = Number(response.headers.get('X-Total-Count') || 0);
  
  const data: FlowerPot[] = await response.json();

  return { data, total };
}

// GET /flowerPots
export async function getAllFlowerPots(): Promise<FlowerPotsResponse> {
  const url = `${API_BASE_URL}/flowerPots`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch flower pots.');
  }

  const data: FlowerPot[] = await response.json();
  const total = data.length;

  return { data, total };
}

// GET /flowerPots/:id
export async function getFlowerPotById(id: number): Promise<FlowerPot> {
  const response = await fetch(`${API_BASE_URL}/flowerPots/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch flower pot with id: ${id}`);
  }
  return response.json();
}
