const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD Pipeline from GitHub Actions to AWS EC2 working!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

