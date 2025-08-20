import type { Category, CategoryWithCount, FlowerPot } from "@/types";
import { API_BASE_URL } from "./config";

export async function getCategoriesWithPotCount(): Promise<CategoryWithCount[]> {
  const [categoriesResponse, potsResponse] = await Promise.all([
    fetch(`${API_BASE_URL}/categories`),
    fetch(`${API_BASE_URL}/flowerPots`)
  ]);

  if (!categoriesResponse.ok || !potsResponse.ok) {
    throw new Error('Failed to fetch data.');
  }

  const categories: Category[] = await categoriesResponse.json();
  const flowerPots: FlowerPot[] = await potsResponse.json();

  const potCounts = new Map<number, number>();
  for (const pot of flowerPots) {
    const currentCount = potCounts.get(pot.categoryId) || 0;
    potCounts.set(pot.categoryId, currentCount + 1);
  }

  const categoriesWithCount: CategoryWithCount[] = categories.map(category => ({
    ...category,
    potCount: potCounts.get(category.id) || 0 
  }));

  return categoriesWithCount;
}
