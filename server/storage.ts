import { users, type User, type InsertUser, enneagramResults, type EnneagramResult, type InsertResult } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveEnneagramResult(result: InsertResult): Promise<EnneagramResult>;
  getEnneagramResultsByUserId(userId: number): Promise<EnneagramResult[]>;
  getEnneagramResult(id: number): Promise<EnneagramResult | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private enneagramResults: Map<number, EnneagramResult>;
  userCurrentId: number;
  resultCurrentId: number;

  constructor() {
    this.users = new Map();
    this.enneagramResults = new Map();
    this.userCurrentId = 1;
    this.resultCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveEnneagramResult(insertResult: InsertResult): Promise<EnneagramResult> {
    const id = this.resultCurrentId++;
    const createdAt = new Date().toISOString();
    const result: EnneagramResult = { ...insertResult, id, createdAt };
    this.enneagramResults.set(id, result);
    return result;
  }

  async getEnneagramResultsByUserId(userId: number): Promise<EnneagramResult[]> {
    return Array.from(this.enneagramResults.values()).filter(
      (result) => result.userId === userId,
    );
  }

  async getEnneagramResult(id: number): Promise<EnneagramResult | undefined> {
    return this.enneagramResults.get(id);
  }
}

export const storage = new MemStorage();
