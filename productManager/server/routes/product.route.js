const productController = require('../controllers/product.controller')


module.exports = (app) => {
    app.post('/api/products', productController.newProduct);
    app.get('/api/products', productController.showProducts);
    app.get('/api/products/:_id', productController.showOneProduct);
    app.put('/api/products/:_id/', productController.updateProduct);
    app.delete('/api/products/:_id', productController.deleteProduct);
};