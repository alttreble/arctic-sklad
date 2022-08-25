import cpy from 'cpy';

await cpy(
  [
    "src/**/*.graphql", // Copy all .graphql files
    "!src/**/*.{tsx,ts,js,jsx}", // Ignore already built files
  ],
  "dist"
)

await cpy(
  ["prisma/**/*"],
  "dist/prisma"
)
