import { PrismaClient } from "../src/generated/prisma/index.js"
const prisma = new PrismaClient()

async function main() {
  // Apaga dados antigos
  await prisma.game.deleteMany()
  await prisma.category.deleteMany()

  // Create categories
  const adventure = await prisma.category.create({
    data: { name: "Aventura" },
  })
  const action = await prisma.category.create({
    data: { name: "Ação" },
  })
  const puzzle = await prisma.category.create({
    data: { name: "Puzzle" },
  })

  // Create SLIDE games
  const ori = await prisma.game.create({
    data: {
      title: "Ori and the Blind Forest",
      imageUrl:
        "https://store-images.s-microsoft.com/image/apps.7767.14566546603801090.bfdd0400-3c33-4fef-8e32-472bcf6c08e6.91d25cc7-4edd-4a75-b85b-f5f704636066",
      logoUrl: "https://ori.iam8bit.com/wp-content/uploads/2020/09/Ori-Logo-About.png",
      description:
        "Platform game with artistic visuals and touching narrative, where you explore a magical forest with precision challenges.",
      gamePageUrl: "ori",
      buttonText: "Play now",
      displayArea: "SLIDE",
      categories: {
        connect: { id: adventure.id },
      },
    },
  })

  const tinyGlade = await prisma.game.create({
    data: {
      title: "Tiny Glade",
      imageUrl: "https://cdn2.steamgriddb.com/hero/faa5aad41ef2c4db0f1a437408fcecaa.jpg",
      logoUrl: "https://cdn2.steamgriddb.com/logo_thumb/145820b8b519a60ff94f3536c837716f.png",
      description:
        "Building simulator where you create small castles and gardens freely and creatively.",
      gamePageUrl: "tiny_glade",
      buttonText: "Build now",
      displayArea: "SLIDE",
      categories: {
        connect: { id: puzzle.id },
      },
    },
  })

  const godOfWar = await prisma.game.create({
    data: {
      title: "God of War",
      imageUrl:
        "https://c.wallhere.com/photos/80/d6/video_games_Video_Game_Art_God_of_War_God_of_War_2018_ultrawide_ultra_wide_Kratos-1405289.jpg!d",
      logoUrl: "https://cdn2.steamgriddb.com/logo_thumb/c3f7c464a6d899fcac5f76acf186807f.png",
      description:
        "Kratos and his son Atreus face Norse gods and monsters in an epic of action and emotion.",
      gamePageUrl: "god_of_war",
      buttonText: "Play now",
      displayArea: "SLIDE",
      categories: {
        connect: { id: action.id },
      },
    },
  })

  const hogwartsLegacy = await prisma.game.create({
    data: {
      title: "Hogwarts Legacy",
      imageUrl: "https://cdn2.steamgriddb.com/hero_thumb/8b33ab221257b074d1d967042ad1d9d0.jpg",
      logoUrl: "https://cdn2.steamgriddb.com/logo_thumb/d2c5bd21bd0749daa5bb9edfdff68dc5.png",
      description:
        "Explore Hogwarts as a 19th-century student in an RPG full of magic, creatures, and choices.",
      gamePageUrl: "hogwarts_legacy",
      buttonText: "Explore Hogwarts",
      displayArea: "SLIDE",
      categories: {
        connect: { id: adventure.id },
      },
    },
  })

  const littleNightmares = await prisma.game.create({
    data: {
      title: "Little Nightmares",
      imageUrl:
        "https://external-preview.redd.it/2k2IWr1LNL9amWwqDBm0plXMLyUV9I2fLKf6HGl0crs.png?format=pjpg&auto=webp&s=6cfa15f3a34d30f55a63149218867db84b68201c",
      logoUrl: "https://cdn2.steamgriddb.com/logo_thumb/8cc76aa60d671138e037520930656242.png",
      description:
        "Venture into a dark world with traps and strange creatures in this platform suspense.",
      gamePageUrl: "little_nightmares",
      buttonText: "Start adventure",
      displayArea: "SLIDE",
      categories: {
        connect: { id: action.id },
      },
    },
  })

  console.log({
    ori,
    tinyGlade,
    godOfWar,
    hogwartsLegacy,
    littleNightmares,
  })
}

// Run ad treat errors
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
