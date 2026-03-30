-- CreateTable
CREATE TABLE "Rota" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Rota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LocalToRota" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LocalToRota_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_LocalToRota_B_index" ON "_LocalToRota"("B");

-- AddForeignKey
ALTER TABLE "_LocalToRota" ADD CONSTRAINT "_LocalToRota_A_fkey" FOREIGN KEY ("A") REFERENCES "Local"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocalToRota" ADD CONSTRAINT "_LocalToRota_B_fkey" FOREIGN KEY ("B") REFERENCES "Rota"("id") ON DELETE CASCADE ON UPDATE CASCADE;
