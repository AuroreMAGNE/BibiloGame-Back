import AgeCategory from './ageCategory.js';
import Category from './category.js';
import Game from './game.js';
import User from './user.js';

Game.belongsToMany(Category, {through:'gamesCategories'});
Category.belongsToMany(Game, {through:'gamesCategories'});

AgeCategory.belongsToMany(Game, {through:'gamesAgeCategories'});
Game.belongsToMany(AgeCategory, {through:'gamesAgeCategories'});

User.belongsToMany(Game, {through:'comments'});
Game.belongsToMany(User, {through:'comments'});


export default {AgeCategory,Category,Game,User};

