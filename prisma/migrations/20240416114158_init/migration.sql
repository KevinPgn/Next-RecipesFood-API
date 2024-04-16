-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "favory" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Recipe" ("id", "image_url", "publisher", "title") SELECT "id", "image_url", "publisher", "title" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
