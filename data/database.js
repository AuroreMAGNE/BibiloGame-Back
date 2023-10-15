import { Sequelize } from "sequelize"; //import du constructeur Sequelize depuis la librairie Sequelize.


//on passe une URL de connection à l'instance sequelize
const sequelize = new Sequelize(process.env.PG_URI,{
  define: {
    createdAt:"created_at", // pour tous nos modèles on modifie le mapping par défaut du createdAt
    updatedAt: "update_date"
  },
});

//je teste si la connexion se passe bien.
sequelize.authenticate()
  .then(()=>{console.log("ok");})
  .catch((error)=>{console.error(error);}); 

export default sequelize; 