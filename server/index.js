import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import cors from 'cors';
import postsRouter from './routes/posts.js';
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRouter);

const CONNECTION_URL = 'mongodb+srv://memories:memories123@cluster0.zgobyvd.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
// const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

// if (isNode) {
//   // Node.js-specific code
//   console.log('Running in Node.js environment');
// } else {
//   // Browser-specific code
//   console.log('Running in browser environment');
// }

mongoose.connect(CONNECTION_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false 
})
.then(() => app.listen(PORT, ()=>console.log(`Server running on port : ${PORT}`)))
.catch((error) => console.log(error.message));
