import fs from "fs";
import path from "path";

export default async function GET(req, res) {
  console.log("INSIDE getImages.js");
  const category = req.query.category;

  console.log("hello");

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
