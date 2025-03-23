const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sales_admin_panel', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Models
const Wholesaler = sequelize.define('Wholesaler', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  mobile_number: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

const Retailer = sequelize.define('Retailer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  mobile_number: { type: DataTypes.STRING, allowNull: false },
  wholesaler_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Wholesalers', key: 'id' } }
}, { timestamps: false });

const Stock = sequelize.define('Stock', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  wholesaler_id: { type: DataTypes.INTEGER, allowNull: false },
  retailer_id: { type: DataTypes.INTEGER, allowNull: false },
  stock_amount: { type: DataTypes.FLOAT, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false }
}, { timestamps: false });

// Associations
Retailer.belongsTo(Wholesaler, { foreignKey: 'wholesaler_id' });
Wholesaler.hasMany(Retailer, { foreignKey: 'wholesaler_id' });

Stock.belongsTo(Retailer, { foreignKey: 'retailer_id' });
Retailer.hasMany(Stock, { foreignKey: 'retailer_id' });

Stock.belongsTo(Wholesaler, { foreignKey: 'wholesaler_id' });
Wholesaler.hasMany(Stock, { foreignKey: 'wholesaler_id' });

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error creating database tables:', err);
  });

module.exports = { sequelize, Wholesaler, Retailer, Stock };
