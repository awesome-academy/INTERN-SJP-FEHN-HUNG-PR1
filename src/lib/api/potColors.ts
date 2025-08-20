import type { Color } from "@/types";
import { API_BASE_URL } from "./config";

// GET /colors
export async function getPotColors(): Promise<Color[]> {
  const response = await fetch(`${API_BASE_URL}/colors`);

  if (!response.ok) {
    throw new Error("Failed to fetch pot colors");
  }

  return response.json();
}
