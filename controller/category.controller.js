import Category from '../model/category.js';

export default {
    readAll: async (res) => {        
        try{          
            let categories = await Category.findAll({
            });
            console.log(categories);          
            
            res.status(200);
            res.send(categories.map(c => c.toJSON()));
        }catch(error){
            console.log(error);
            res.status(500)
            res.send(`Erreur`);
        }
    },

    read: async(id, res) => {
        try{            
            if(!id)                
                throw new Error('id manquant');

            let category = await Category.findByPk(id);
            if (category == null)
                throw new Error('Category non trouvée');    

            res.status(200);
            res.send(category.toJSON());
        }catch(error){
            console.log(error);
            res.status(404)
            res.send(`Non trouvée`);
        }
    }, 

    create: async(req, res) => {
        try{            
            const {label} = req.body;

            if (!label)
                throw new Error('Paramètre manquant')

            let newCategory = Category.build({label});

            await newCategory.save();

            res.status(200)
            res.send('Catégorie ajoutée !')
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

            let category = await Category.findByPk(id);
            if (category == null)
                throw new Error('Category manquante');    

            const { label } = req.body;
            
            if (!label)
                throw new Error('Paramètre manquant')
            
            if (label)
                category.setDataValue('label', label);

            await category.save();

            res.status(200)
            res.send('Category mise à jour !')
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

            let category = await Category.findByPk(id);
            if (category == null)
                throw new Error('Category non trouvée');    

            category.destroy();
            
            res.status(200);
            res.send('Category supprimée');
        }catch(error){
            console.log(error);
            res.status(404)
            res.send(`Non trouvée`);
        }
    }, 
}
