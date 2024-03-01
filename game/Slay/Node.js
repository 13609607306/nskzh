const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.get('/runexe', (req, res) => {
 // 启动exe程序
 const exeProcess = spawn('SlayTheSpire.exe', ['arg1', 'arg2']);
 // 监听程序的输出
 exeProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    // 将输出发送到Web端
     res.send(data);
  });

  exeProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    // 将错误信息发送到Web端
    res.send(`Error: ${data}`);
  });

  exeProcess.on('close', (code) => {
  	  console.log(`child process exited with code ${code}`);
  });
});

  app.listen(port, () => {
 	 console.log(`API listening at http://localhost:${port}`);
});
