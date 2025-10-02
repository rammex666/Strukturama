import dotenv from "dotenv";
dotenv.config();

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import authRoutes from "./routes/auth";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Servir les fichiers statiques en production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../dist")));
}

app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson;
        return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
        const duration = Date.now() - start;
        if (path.startsWith("/api")) {
            let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
            if (capturedJsonResponse) {
                logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
            }

            if (logLine.length > 80) {
                logLine = logLine.slice(0, 79) + "…";
            }

            console.log(logLine);
        }
    });

    next();
});

(async () => {
    const server = await registerRoutes(app);
    app.use("/api/auth", authRoutes);

    // Route catch-all pour le SPA en production
    if (process.env.NODE_ENV === "production") {
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../dist/index.html"));
        });
    }

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
        throw err;
    });

    const port = parseInt(process.env.PORT || '3000', 10);

    if (process.env.NODE_ENV !== "production") {
        server.listen({ port, host: "127.0.0.1" }, () => {
            console.log(`serving on port ${port}`);
        });
    }
})();

// Export pour Vercel
export default app;
