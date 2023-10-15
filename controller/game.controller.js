import Game from '../model/game.js';
import Category from '../model/category.js';
import AgeCategory from '../model/ageCategory.js';

export default {
    readAll: async (category, ageCategory, res) => {        
        try{            
            const where = {};
            if (category)
                where['$Categories.id$'] = category;
            if (ageCategory)
                where['$AgeCategories.id$'] = ageCategory;
            
            let games = await Game.findAll({
                where,
                include: [Category, AgeCategory]
            });
            console.log(games);          
            
            res.status(200);
            res.send(games.map(g => g.toJSON()));
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Erreur`);
        }
    },

    addCategory: async(idGame, idCategory, res) => {
        try{            
            if(!idGame)                
                throw new Error('id manquant');

            let game = await Game.findByPk(idGame);
            if (game == null)
                throw new Error('Game non trouvé');    

            let category = await Category.findByPk(idCategory);
            if (category == null)
                throw new Error('CAtegory non trouvée');    

            await game.addCategory(category);
            
            res.status(200);
            res.send('Catégorie ajoutée au jeu');
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Jeu ou catégorie non trouvé`);
        }
    }, 

    deleteCategory: async(idGame, idCategory, res) => {
        try{            
            if(!idGame)                
                throw new Error('id manquant');

            let game = await Game.findByPk(idGame);
            if (game == null)
                throw new Error('Game non trouvé');    

            let category = await Category.findByPk(idCategory);
            if (category == null)
                throw new Error('Category non trouvée');    

            await game.removeCategory(category);
            
            res.status(200);
            res.send('Catégorie retirée au jeu');
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Jeu ou catégorie non trouvé`);
        }
    }, 

    read: async(id, res) => {
        try{            
            if(!id)                
                throw new Error('id manquant');

            let game = await Game.findByPk(id,
                {include: [Category, AgeCategory]});
            if (game == null)
                throw new Error('Game non trouvé');    

            res.status(200);
            res.send(game.toJSON());
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Non trouvé`);
        }
    }, 

    create: async(req, res) => {
        try{            
            const {title, brand, description} = req.body;

            if (!title || !brand ||!description)
                throw new Error('Paramètre manquant')

            let newGame = Game.build({
                title,
                brand,
                description 
            });

            await newGame.save();

            res.status(200)
            res.send('Jeu ajouté !')
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Echec creation`);
        }
    }, 

    update: async (req, res) => {
        try{            
            const id = req.params.id
            if(!id)                
                throw new Error('id manquant');

            let game = await Game.findByPk(id);
            if (game == null)
                throw new Error('Game manquant');    

            const {title, brand, description} = req.body;
            
            if (!title || !brand ||!description)
                throw new Error('Paramètre manquant')
            
            if (title)
                game.setDataValue('title', title);
            if (brand)
                game.setDataValue('brand', brand);
            if (description)
                game.setDataValue('description', description);

            await game.save();

            res.status(200)
            res.send('Jeu mis à jour !')
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Echec mise à jour`);
        }
    }, 

    delete: async(id, res) => {
        try{            
            if(!id)                
                throw new Error('id manquant');

            let game = await Game.findByPk(id);
            if (game == null)
                throw new Error('Game non trouvé');    

            game.destroy();
            res.status(200);
            res.send('Game supprimé');
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Non trouvé`);
        }
    }, 
}
