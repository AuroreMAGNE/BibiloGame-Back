import { DataTypes, Model } from 'sequelize';
import sequelize from '../data/database.js'; //on récupère notre instance de connexion

class User extends Model {} // on crée un users qui étend le corps model

User.init({
  //même pas besoin de mettre l'ID, il est géré par défaut par Sequelize
  // Model attributes are defined here
  firstName: {
    type: DataTypes.TEXT,
    // allowNull defaults to true
  },
  nickname: {
    type: DataTypes.TEXT,
    allowNull: false // tous les firstname sont obligatoires
  },
  lastName: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false 
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false 
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  tableName: 'users', // We need to choose the table name (puisque j'ai créé les tables manuellement en amont pour la CP5) 
});

export default User;