module.exports = (type, name, data) => {
  const linkSource = `data:${type};base64,${data}`;
  const downloadLink = document.createElement("a");
  const fileName = name;
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
  downloadLink.remove();
};
