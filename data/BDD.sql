BEGIN;

DROP DOMAIN IF EXISTS "email" CASCADE; 
DROP TABLE IF EXISTS "users","comments","games","gamesAgeCategories","ageCategories","gameCategories", "categories";

CREATE DOMAIN "email" AS VARCHAR(150)
CHECK(
    value ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
);

CREATE TABLE "users"
(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" VARCHAR(50),
    "nickname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50),
    "password" VARCHAR(200) NOT NULL,
    "email" email NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "update_date" TIMESTAMPTZ
);

CREATE TABLE "games" 
(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" VARCHAR(150) NOT NULL,
    "brand" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "picture_path" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "update_date" TIMESTAMPTZ
);

CREATE TABLE "comments"
(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "comment" TEXT,
    "mark" INT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "update_date" TIMESTAMPTZ,
    "user_id" INT NOT NULL,
    "game_id" INT NOT NULL,
    CONSTRAINT "fk_comments_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
    CONSTRAINT "fk_comments_games" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE
);

CREATE TABLE "ageCategories"
(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "update_date" TIMESTAMPTZ
);

CREATE TABLE "gamesAgeCategories"
(
    "agecategory_id" INT NOT NULL,
    "game_id" INT NOT NULL,
    PRIMARY KEY ("agecategory_id", "game_id"),
    CONSTRAINT "fk_games_ageCategories" FOREIGN KEY ("agecategory_id") REFERENCES "ageCategories"("id") ON DELETE CASCADE,
    CONSTRAINT "fk_games_ageCategories" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE,
);

CREATE TABLE "categories"
(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "update_date" TIMESTAMPTZ
);

CREATE TABLE "gamesCategories"
(
    "category_id" INT NOT NULL,
    "game_id" INT NOT NULL,
    PRIMARY KEY ("category_id", "game_id"), 
    CONSTRAINT "fk_categories_games" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE, 
    CONSTRAINT "fk_categories_games" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE
);

COMMIT;