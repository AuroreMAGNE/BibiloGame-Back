import { DataTypes, Model } from 'sequelize';
import sequelize from '../data/database.js';

class Comment extends Model {} 

Comment.init({
  comment: {
    type: DataTypes.TEXT,
  },
  mark: {
    type: DataTypes.TEXT,
  }
}, 
{
  sequelize, 
  tableName: 'comments', 
});

export default Comment;