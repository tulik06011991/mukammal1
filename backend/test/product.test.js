const request = require('supertest');
const express = require('express');
const router = require('../Routes/Products'); // Router'ning to'g'ri manzili bilan almashtiring

const app = express();
app.use(express.json());
app.use(router);

// Mocking the pool.query function
const pool = require('../db'); // db modulining to'g'ri yo'li bilan almashtiring
jest.mock('../db');

describe('Product Endpoints', () => {
  beforeEach(() => {
    // Mock all the methods used in your db module
    pool.query.mockClear();
    pool.connect.mockClear();
  });

  it('GET /products should fetch all products', async () => {
    const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    pool.query.mockResolvedValue({ rows: mockProducts });

    const res = await request(app).get('/products');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockProducts);
  });

  it('POST /postProducts should add a new product', async () => {
    const newProduct = {
      productName: 'New Product',
      productDescription: 'Product description',
      productPrice: 100,
    };

    const mockInsertedProduct = {
      id: 1,
      name: newProduct.productName,
      description: newProduct.productDescription,
      price: newProduct.productPrice,
      image: 'image.jpg',
    };

    pool.query.mockResolvedValue({ rows: [mockInsertedProduct] });

    const res = await request(app)
      .post('/postProducts')
      .field('productName', newProduct.productName)
      .field('productDescription', newProduct.productDescription)
      .field('productPrice', newProduct.productPrice)
      .attach('productImage', Buffer.from('dummy image content'), 'image.jpg');

    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(mockInsertedProduct);
  });

  it('POST /submitCart should submit a cart', async () => {
    const cartData = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      cardNumber: '1111222233334444',
      expiryDate: '12/25',
      productId: 1,
      quantity: 2,
    };

    pool.connect.mockResolvedValue({
      query: jest.fn().mockResolvedValue({}),
      release: jest.fn(),
    });

    const res = await request(app)
      .post('/submitCart')
      .send(cartData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Cart submitted successfully' });
  });

  it('should return 500 for internal server error on /submitCart', async () => {
    pool.connect.mockRejectedValue(new Error('Internal server error'));

    const res = await request(app)
      .post('/submitCart')
      .send({});

    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({ message: 'Server error' });
  });
});
