const sortList = (list, sortBy, sortDirection) => {
  if (!list?.length || !sortBy) return list;
  try {
    let sortedList = list.sort(function (a, b) {
      var columnA;
      var columnB;
      if (typeof a[sortBy] === "string") {
        columnA = a[sortBy].toLowerCase();
        columnB = b[sortBy].toLowerCase();
      } else if (typeof a[sortBy] === "number") {
        columnA = a[sortBy];
        columnB = b[sortBy];
      } else if (typeof a[sortBy] === "boolean") {
        columnA = Number(a[sortBy]);
        columnB = Number(b[sortBy]);
      }
      if (columnA < columnB) {
        return -1;
      }
      if (columnA > columnB) {
        return 1;
      }
      return 0;
    });
    if (sortDirection === "desc") sortedList.reverse();
    return sortedList;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default { sortList };
