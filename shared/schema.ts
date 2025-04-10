import { pgTable, text, serial, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const enneagramResults = pgTable("enneagram_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  answers: json("answers").$type<number[]>().notNull(),
  typeScores: json("type_scores").$type<Record<string, number>>().notNull(),
  primaryType: integer("primary_type").notNull(),
  wingType: integer("wing_type"),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertResultSchema = createInsertSchema(enneagramResults).pick({
  userId: true,
  answers: true,
  typeScores: true,
  primaryType: true,
  wingType: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertResult = z.infer<typeof insertResultSchema>;
export type EnneagramResult = typeof enneagramResults.$inferSelect;
