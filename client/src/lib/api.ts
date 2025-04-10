import { apiRequest } from "./queryClient";
import { type InsertResult } from "@shared/schema";

// Save enneagram test result to server
export async function saveResult(result: InsertResult): Promise<any> {
  const response = await apiRequest("POST", "/api/enneagram/results", result);
  return response.json();
}

// Get enneagram test result by ID
export async function getResultById(id: number): Promise<any> {
  const response = await apiRequest("GET", `/api/enneagram/results/${id}`);
  return response.json();
}

// Get all enneagram test results for a user
export async function getResultsByUserId(userId: number): Promise<any> {
  const response = await apiRequest("GET", `/api/users/${userId}/enneagram/results`);
  return response.json();
}
