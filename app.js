// app.js
const express = require('express');
const sequelize = require('./config/database');
const wholesalerRoutes = require('./routes/wholesalerRoutes');
const retailerRoutes = require('./routes/retailerRoutes');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/wholesaler', wholesalerRoutes);
app.use('/retailer', retailerRoutes);
app.use('/stock', stockRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
