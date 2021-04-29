const fs = require("fs").promises;

const generateSupermurderCode = async (text) => {
  let chars = [];
  let supermurderCode = "";
  for (let i = 0; i < text.length; i++) {
    chars[i] = text.charCodeAt(i);
  }
  await fs.writeFile(`generated.supermurder`, `#${text}\n`);
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    let charInSupermurder = "";
    for (let j = 0; j < char; j++) {
      charInSupermurder += "supermurder ";
    }
    await fs.appendFile(`generated.supermurder`, charInSupermurder + "\n");
  }
  return console.log("");
};

generateSupermurderCode(process.argv.slice(2).join(" "));
