import figlet from "figlet";

export function printAsciiArt(text) {
  return new Promise((resolve, reject) => {
    figlet(text, function (err, data) {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}
