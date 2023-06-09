// import express, { Express } from 'express';
// import { connectDB } from './db';
// import router from './routes';

// const app: Express = express();

// // Body parser
// app.use(express.json());

// // Allow CORS
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   if ('OPTIONS' === req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });

// // Connect to database
// connectDB();

// // Routes
// app.use('/Listing', router);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
