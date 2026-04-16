const generateCSV = (title = "", columns = [], rows = [], columnId = "id", columnName = "name") => {
  try {
    let category;
    if (columns) {
      category = columns.map(col => col[columnName]).join(", ");
    }

    const csvRows = {
      title,
      category,
      data: rows.map(d => columns.map(col => d[col[columnId]]).join(", ")).join("\n")
    };

    let csvString = Object.values(csvRows)
      .map(item => [item])
      .map(e => e.join("\n"))
      .join("\n");

    return csvString;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const downloadCSV = (filename = "", csvString = "") => {
  const blob = new Blob([csvString], {
    type: "application/json"
  });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);
  }
};

export default {
  generateCSV,
  downloadCSV
};
