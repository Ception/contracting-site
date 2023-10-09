import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const category = req.query.category;

  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }

  const directoryPath = path.join(process.cwd(), `public/${category}`);
  try {
    const files = fs
      .readdirSync(directoryPath)
      .filter((file) => file.endsWith(".jpeg"));
    res.status(200).json(files);
  } catch (err) {
    res.status(500).send(`Unable to read directory: ${err}`);
  }
}
