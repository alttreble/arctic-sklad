module.exports = {
  postbuild: async () => {
    const cpy = (await import("cpy")).default;
    await cpy(
      [
        "src/**/*.graphql", // Copy all .graphql files
        "!src/**/*.{tsx,ts,js,jsx}", // Ignore already built files
      ],
      "dist"
    );
  },
};
