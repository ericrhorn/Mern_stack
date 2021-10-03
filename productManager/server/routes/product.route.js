const productController = require('../controllers/product.controller')


module.exports = (app) => {
    app.post('/api/new', productController.newProduct);
    app.get('/api/products', productController.showProducts);

};