import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertResultSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Save enneagram test results
  app.post("/api/enneagram/results", async (req: Request, res: Response) => {
    try {
      const data = insertResultSchema.parse(req.body);
      const result = await storage.saveEnneagramResult(data);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  // Get enneagram test result by id
  app.get("/api/enneagram/results/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid result ID" });
      }

      const result = await storage.getEnneagramResult(id);
      if (!result) {
        return res.status(404).json({ message: "Result not found" });
      }
      
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Get all enneagram test results for a user
  app.get("/api/users/:userId/enneagram/results", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      const results = await storage.getEnneagramResultsByUserId(userId);
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
