const path = require("path");
const fs = require("fs").promises;

const reservedWords = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with"
]);

async function createImportFile(directoryPath, outputFile) {
  try {
    const files = await fs.readdir(directoryPath);
    const imageElements = files
      .map(file => {
        if (file.endsWith(".js")) return `<span />`;
        let fileName = path.parse(file).name.replace(/[-.]/g, "_");
        if (reservedWords.has(fileName)) {
          fileName = fileName.toUpperCase();
        }
        return `<div><img width="30px" height="30px" src="${directoryPath}/${file}" alt="${fileName}"><p>${path.parse(file).name}</p></div>`;
      })
      .join("\n");

    const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Image Gallery</title>
                <style>
                    div {
                        display: inline-block;
                        margin: 10px;
                        text-align: center;
                    }
                    img {
                        max-width: 100px;
                        max-height: 100px;
                    }
                </style>
            </head>
            <body>
                ${imageElements}
            </body>
            </html>
        `;

    await fs.writeFile(outputFile, htmlContent);
    console.log(`HTML file created at ${outputFile}`);
  } catch (err) {
    console.error("Error:", err);
  }
}
const directoryPath = "./Icons";
// Usage
createImportFile(directoryPath, "./icons.html");
