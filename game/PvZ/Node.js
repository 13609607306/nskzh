const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.get('/execute-exe', (req, res) => {
  exec('game/PvZ/PVZ-BT.exe', (error, stdout, stderr) => {
    if (error) {
      res.send('Error executing exe file');
      return;
    }
    res.send('Exe file executed successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
