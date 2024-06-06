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
CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE IF NOT EXISTS cart (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL,
    card_number VARCHAR(16) NOT NULL,
    expiry_date VARCHAR(5) NOT NULL,
    product_id INTEGER[],
    quantity INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS cart (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL DEFAULT ,
    last_name VARCHAR(255) NOT NULL DEFAULT ,
    phone VARCHAR(15) NOT NULL DEFAULT ,
    email VARCHAR(255) NOT NULL DEFAULT ,
    card_number VARCHAR(16) NOT NULL DEFAULT ,
    expiry_date VARCHAR(5) NOT NULL ,
    product_id INTEGER[],
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

