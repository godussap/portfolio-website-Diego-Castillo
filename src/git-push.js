const { exec } = require('child_process');

const commands = `
  git add . &&
  git commit -m "Automated commit with Node.js" &&
  git push -u origin main
`;

exec(commands, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
