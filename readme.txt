slowly building up javascript from dinosaur age to modern time
https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

learn cli and vm https://www.learnenough.com/command-line-tutorial

cd C:\Temp\htmlElements\modern-js-incr>
npm init  --> package.json default created
npm install moment --save  --> add dependencies block in package.json
and add "moment": "^2.22.2" module with version
create node_modules directory under it create folder for moment module

C:\Temp\htmlElements\modern-js-incr>webpack js/app.js bundle.js
Hash: d0c7e11f49f02cf419ad
Version: webpack 3.8.1
Time: 600ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
 [124] ./js/app.js 309 bytes {0} [built]
 [125] (webpack)/buildin/module.js 495 bytes {0} [built]
 [126] ./node_modules/moment/locale ^\.\/.*$ 2.98 kB {0} [optional] [built]
    + 124 hidden modules
Now change the html <script> include with bundle.js
