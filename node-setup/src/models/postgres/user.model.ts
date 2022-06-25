import { DataTypes, Sequelize } from 'sequelize';
// dbConnect.sync({ force: false }).then(() => console.log('table created'));

const user = (db: Sequelize) => db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

export default user;
