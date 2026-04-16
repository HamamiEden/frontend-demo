const get = (key, parse = false) => {
  let settings;
  try {
    settings = localStorage.getItem(key);
    return parse ? JSON.parse(settings) : settings;
  } catch (e) {
    return false;
  }
};

const set = (key, value, stringify = false) => {
  try {
    localStorage.setItem(key, stringify ? JSON.stringify(value) : value);
    return true;
  } catch (e) {
    return false;
  }
};

export default {
  set,
  get
};
