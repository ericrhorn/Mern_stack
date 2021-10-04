const productController = require('../controllers/product.controller')


module.exports = (app) => {
    app.post('/api/products', productController.newProduct);
    app.get('/api/products', productController.showProducts);
    app.get('/api/products/:_id', productController.showOneProduct);

};