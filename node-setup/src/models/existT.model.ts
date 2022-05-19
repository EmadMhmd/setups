/* eslint-disable linebreak-style */
import { DataTypes, Sequelize } from 'sequelize';

const dbConnect = new Sequelize(
  'indexima',
  'root',
  'corelia',
  {
    host: '10.198.0.3',
    dialect: 'mariadb',
  },
);

dbConnect.sync({ force: false }).then(() => console.log('table created'));

const alias = () => dbConnect.define('testGstatsV2', {
  id_ticket: {
    type: DataTypes.INTEGER,
  },
  shop_id_shop: {
    type: DataTypes.INTEGER,
  },
  shop_label_shop: {
    type: DataTypes.STRING,
  },
  shop_label_network: {
    type: DataTypes.STRING,
  },
  shop_id_network: {
    type: DataTypes.INTEGER,
  },
  prod_ean: {
    type: DataTypes.STRING,
  },
  prod_label_product: {
    type: DataTypes.STRING,
  },
  prod_label_brand: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

export default alias();
