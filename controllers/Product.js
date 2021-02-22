exports.getProducts = (req, res, next) => {
    res.status(200).json({
        products : [
            {id: 0, title: 'Product0', price: 10},
            {id: 1, title: 'Product1', price: 7},
            {id: 2, title: 'Product2', price: 3}
        ]
    });
}

exports.getProduct = (req, res, next) => {

    const productId = req.params.productId;

    
    let products = [
        {id: 0, title: 'Product0', price: 10},
        {id: 1, title: 'Product1', price: 7},
        {id: 2, title: 'Product2', price: 3}
    ];
    const product = products.filter(p => p.id == productId)[0]||{};
    res.status(200).json({
        product: product
    });
}