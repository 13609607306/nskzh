// server.js
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/execute', (req, res) => {
  exec('game\\PvZ\\PvZ-BT.exe', (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(`Error executing the .exe file: {error}`);
    }
    
    res.send(`Execution result: {stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
