import path from "path";
import fs from "fs";
import { buildDatabase } from "./seedDataUtils";

const testSeed = buildDatabase();

const fileData = JSON.stringify(testSeed, null, 2);

fs.writeFile(
  path.join(process.cwd(), "data", "database-seed.json"),
  fileData,
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Test seed generated");
  }
);
