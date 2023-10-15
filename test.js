import dotenv from 'dotenv';
import database from './data/database.js';
import {AgeCategory,Category,Game,User} from './model/indexModel.js'

async function getGame(){
  const games = await Game.findAll();
  console.log(games);
}

/*async function getCategory(){
  const categories = await Category.findAll({
  });
  console.log(JSON.stringify(categories, null, 2));
}*/

getGame();