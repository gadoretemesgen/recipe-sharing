import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));


app.use(cors());
app.use(express.json());

const recipes = [
  { id: 1, title: "Spaghetti Aglio e Olio", minutes: 15 },
  { id: 2, title: "Shiro Wot", minutes: 40 },
  { id: 3, title: "Lemon Chicken", minutes: 30 }
];

app.get("/", (_req, res) => res.send("Recipe backend is running."));
app.get("/api/recipes", (_req, res) => res.json(recipes));

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
