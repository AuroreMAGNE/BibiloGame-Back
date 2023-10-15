import database from './database.js';
import indexModel from '../model/indexModel.js';

//await database.sync({force:true}); //force la synchronisation des modèles (supprime puis crée)
await database.sync();// synchronisation des modèles (crée si inexistants)

export default database;

