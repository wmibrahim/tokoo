import { Product } from "@/types";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/products.json");

export function getLocalProducts(): Product[] {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function saveLocalProducts(products: Product[]) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
}