const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/students', require('./routes/students'));
app.use('/api/teachers', require('./routes/teachers'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/term-marks', require('./routes/termMarks'));
// Add this line to serve uploaded files
app.use('/uploads', express.static('uploads'));
// Root route
app.get('/', (req, res) => {
  res.send('SCC Student Management System Backend Running...');
});

app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', require('./routes/students'));
app.use('/api/teachers', require('./routes/teachers'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/notifications', require('./routes/notifications'));

// Root route
app.get('/', (req, res) => {
  res.send('SCC Student Management System Backend Running...');
});

app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});
