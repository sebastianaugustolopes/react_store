-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "logoUrl" TEXT,
    "description" TEXT,
    "gamePageUrl" TEXT NOT NULL,
    "buttonText" TEXT,
    "originalPrice" REAL,
    "currentPrice" REAL,
    "discount" INTEGER,
    "isFavorite" BOOLEAN,
    "displayArea" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GameCategories" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_GameCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GameCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_gamePageUrl_key" ON "Game"("gamePageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GameCategories_AB_unique" ON "_GameCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_GameCategories_B_index" ON "_GameCategories"("B");
