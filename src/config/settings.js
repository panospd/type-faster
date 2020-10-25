const settings = {
  word: {
    delimiter: /\s+/,
  },
  timer:
    process.env.NODE_ENV === "production"
      ? 60
      : process.env.NODE_ENV === "development"
      ? 10
      : 2,
};

export default settings;
