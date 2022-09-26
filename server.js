import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
//import 'dotenv/config';


//const PORT = process.env.PORT||8080;
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*',(req,res) => {
res.sendFile(path.join(__dirname,'build','index.js'))
})

app.listen(PORT)
