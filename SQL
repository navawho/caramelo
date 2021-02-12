CREATE TABLE users (
id serial PRIMARY KEY,
username text UNIQUE NOT NULL,
password text NOT NULL,
email text UNIQUE NOT NULL,
phone text UNIQUE NOT NULL,
created_at timestamp NOT NULL DEFAULT now()::date,
updated_at timestamp
);

CREATE TABLE pets (
id serial PRIMARY KEY,
user_id integer REFERENCES users ON DELETE CASCADE NOT NULL,
name text UNIQUE NOT NULL,
description text NOT NULL,
image_url text UNIQUE NOT NULL,
port text NOT NULL CHECK ( port in ('Grande', 'Médio', 'Pequeno') ),
type text NOT NULL CHECK ( type in ('Cachorro', 'Gato') ),
sex text NOT NULL CHECK ( sex in ('Macho', 'Fêmea') ),
birth_date date NOT NULL,
available boolean NOT NULL DEFAULT true,
created_at timestamp NOT NULL DEFAULT now()::date,
updated_at timestamp
);

CREATE TABLE adoptions (
id serial PRIMARY KEY,
pet_id integer REFERENCES pets ON DELETE CASCADE NOT NULL ,
user_id integer REFERENCES users ON DELETE CASCADE NOT NULL,
returned boolean DEFAULT false,
created_at timestamp NOT NULL DEFAULT now()::date,
updated_at timestamp
);

CREATE TABLE solicitations (
id serial PRIMARY KEY,
pet_id integer REFERENCES pets ON DELETE CASCADE NOT NULL,
user_id integer REFERENCES users ON DELETE CASCADE NOT NULL,
accepted boolean,
created_at timestamp NOT NULL DEFAULT now()::date,
updated_at timestamp
);
