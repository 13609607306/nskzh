<!DOCTYPE html>
<html>
<head>
    <title>Sidebar Example</title>
    <style>
        .sidebar {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            background-color: #f2f2f2;
            padding: 10px;
            border: 1px solid #ccc;
        }
        .button {
            display: block;
            width: 100px;
            text-align: center;
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            margin-bottom: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>nskzh</h1>
    <t>Welcome to my site!<br></t>
    <t>As you see, it isn't finish yet.<br></t>
    <t>But you might like to try one of these below:<br></t>
    <a href="/calc/index.html">标准计算器</a><br>
    <a href="/game/guessnum/index.html">标准猜数字游戏</a><br>
    <a href="/game/2048/index.html">2048游戏</a>
    <div class="sidebar">
        <button class="button" onclick="countClicks()">点击我</button>
        <p id="clickCount">按钮被点击了0次</p>
    </div>

    <script>
        var clicks = 0;
        function countClicks() {
            clicks++;
            document.getElementById("clickCount").innerText = "按钮被点击了" + clicks + "次";
        }
    </script>
</body>
</html>
