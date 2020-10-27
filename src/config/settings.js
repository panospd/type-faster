const settings = {
  word: {
    delimiter: /\s+/,
  },
  timer: process.env.REACT_APP_TIMERVALUE ?? 10,
};

export default settings;
