CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255)  NOT NULL,
    description VARCHAR(300) NOT NULL,
    price NUMERIC(0, 10) NOT NULL,
    image VARCHAR(250) NOT NULL,
    category   JOIN id(category),
    yaratilgan_sana TIMESTAMPS DEFAULT CURRENT_TIMESTAMPS

);

CREATE TABLE category (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    category VARCHAR(250) NOT NULL

);
