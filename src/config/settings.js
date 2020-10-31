const settings = {
  word: {
    delimiter: /\s+/,
  },
  timer: process.env.REACT_APP_TIMERVALUE ?? 2,
};

export default settings;
