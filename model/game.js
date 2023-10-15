import { DataTypes, Model } from 'sequelize';
import sequelize from '../data/database.js';

class Game extends Model {} 

Game.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  brand: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  picture_path: {
    type: DataTypes.TEXT,
    //allowNull: false
  }
}, 
{
  sequelize, 
  tableName: 'games', 
});

export default Game;