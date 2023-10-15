import { DataTypes, Model } from 'sequelize';
import sequelize from '../data/database.js';

class Category extends Model {} 

Category.init({
  label: {
    type: DataTypes.TEXT,
  },
}, 
{
  sequelize, 
  tableName: 'categories', 
});
export default Category;