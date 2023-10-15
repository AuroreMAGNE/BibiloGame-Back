BEGIN;

INSERT INTO "games" ("title","brand","description","picture_path") VALUES
('Monopoly', 'Monopoly', "Le but du jeu consiste à ruiner ses adversaires par des opérations immobilières", ''),
('Uno', 'Mattel Games', " Jeu de carte où il faut être le premier à se débarrasser de ses cartes en recouvrant la carte posée, par une carte de même valeur ou de même couleur.", ''), 
('Mikado', 'Mikado', "Le mikado est un jeu d'adresse, praticable de 2 à 6 joueurs. Il se compose d'un ensemble de baguettes, longues d'environ 20 cm et effilées aux extrémités, que l'on laisse tomber de façon qu'elles s'enchevêtrent, avant de les retirer, une à une, sans faire bouger les autres", ''), 
('Epopée Magique - Magic Ball', 'Mattel Games', "Jeu coopératif ou chacun incarne un héro devant récupérer les joyaux sans croiser le chemin du dragon.", ''), 
('Dragomino', 'Blue Orange', "Vous avez été nommé «dresseur de dragon» et vous avez la chance de partir à leur rencontre sur une île mystérieuse. Mais vous n’êtes pas le seul dresseur envoyé sur ces terres. Qui de vous découvrira le plus de bébés dragons ?", '');

/*INSERT INTO "ageCategories" ("label") VALUES
(8),
(7), 
(5);
*/ 

INSERT INTO "gamesAgeCategories" ("agecategory_id","game_id") VALUES
('0-3 ans'),
('3-6 ans'),
('6-10 ans'), 
('+de 10 ans'); 

INSERT INTO "categories" ("label") VALUES
('Tous'),
('Carte'),
('Stratégie'),
('Lettre'),
('Hasard'),
('Adresse'), 
('Coopératif'),
('Ambiance');

/*INSERT INTO "gamesCategories" ("category_id","game_id") VALUES
('?'),
('?'), 
('?');
*/

COMMIT;