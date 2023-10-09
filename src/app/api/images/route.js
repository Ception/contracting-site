import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req) {
  // console.log("INSIDE route.js");
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const res = NextResponse;

  if (
    !category ||
    category.length === 0 ||
    category === null ||
    searchParams.length === 0 ||
    !searchParams
  ) {
    return res.json({ error: "Category is required" }, { status: 400 });
  }

  const directoryPath = path.join(process.cwd(), `public/${category}`);
  try {
    const files = fs
      .readdirSync(directoryPath)
      .filter(
        (file) =>
          file.endsWith(".jpeg") ||
          file.endsWith(".jpg") ||
          file.endsWith(".png")
      );

    // console.log(`Found ${files.length} files in ${category} directory`);
    // console.log(files);
    return res.json({ files }, { status: 200 });
  } catch (err) {
    return res.json(
      {
        error: `Unable to read directory: ${err.message}`,
      },
      { status: 500 }
    );
  }
}
