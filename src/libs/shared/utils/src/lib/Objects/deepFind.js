// Find all values by specific key in a deep nested object
const deepFind = (obj, path = "") => {
  const paths = path.split(".");
  let current = obj;

  // Determine if the field is typeof array
  let isArray = false;
  paths.some(path => {
    // if we found out that we need to iterate array we need to:
    // 1. make sure next iteration knows its array
    // 2. skip this iteration so we dont make an invalid assignment
    if (path === "[]") {
      isArray = true;
      return false;
    }
    // we make sure that wehave that path in the object
    if (!current) {
      return true;
    }
    // if our object is not valid and we didnt detect its an array something
    // went wrong so we return empty string
    if (current[path] === undefined && !isArray) {
      current = "";
      return true;
    } else {
      // if we checked it's an array now we can iterate and make our value
      if (isArray && current instanceof Array) {
        current = current.map(item => (item ? item[path] : ""));
      } else if (isArray && Object.keys(current)) {
        current = Object.keys(current).filter(key => current[key] === JSON.parse(path));
      } else {
        current = current[path];
      }
    }
    return false;
  });

  return current;
};

export default deepFind;
