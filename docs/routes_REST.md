# Routes : game.router.js

| URL                                      | GET                                          | POST                                             | PUT                                       | DELETE                                |
| ---------------------------------------- | -------------------------------------------- | ------------------------------------------------ | ----------------------------------------- | ------------------------------------- |
| /                                        | ✅ récupérer tous les jeux                   | ❌ créer un jeu                                  | ❌ mettre à jour toutes les jeux          | ❌ supprimer toutes les jeux          |
| /games                                   | ✅ récupérer toutes les jeux                 | ❌ créer un jeu                                  | ❌ mettre à jour toutes les jeux          | ❌ supprimer toutes les jeux          |
|  /game/:idGame/category/:idCategory/:id  | ❌ récupérer une catégorie de jeu via son ID | ✅ créer une catégorie en fixant son id d'avance | ❌ mettre à jour une catégorie via son ID | ✅ supprimer une catégorie via son ID |
| /game/:idGame/agecategory/:idAgeCategory | ❌ récupérer l'âge d'un jeu                  | ✅ créer l'âge d'un jeu                          | ❌ mettre à jour l'âge d'un jeu           | ✅ supprimer l'âge d'un jeu           |
| /game/:id                                | ✅ récupérer un jeu via son ID               | ❌ créer un jeu en fixant son id d'avance        | ✅ mettre à jour un jeu via son ID        | ✅ supprimer un jeu via son ID        |
| /game                                    | ❌ récupérer un jeu                          | ✅ créer un jeu                                  | ❌ mettre à jour un jeu                   | ❌ supprimer un jeu                   |
