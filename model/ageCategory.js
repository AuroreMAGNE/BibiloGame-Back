import { DataTypes, Model } from 'sequelize';
import sequelize from '../data/database.js';

class AgeCategory extends Model {} 

AgeCategory.init({
  label: {
    type: DataTypes.TEXT,
  },
}, 
{
  sequelize, 
  tableName: 'ageCategories', 
});
export default AgeCategory;