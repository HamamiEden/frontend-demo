const downloadFile = (fileName, linkSource) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
  downloadLink.remove();
};

const downloadFileFromBuffer = (buffer, fileType, fileName, Uint = true) => {
  const linkSource = window.URL.createObjectURL(new Blob([Uint ? new Uint8Array(buffer).buffer : buffer], { type: fileType }));
  downloadFile(fileName, linkSource);
};

export default {
  downloadFileFromBuffer
};
