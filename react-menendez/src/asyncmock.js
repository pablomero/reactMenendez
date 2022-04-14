const products = [
    {
        id: 1,
        name: 'Pepsi',
        price: 120,
        category: 'bebida',
        img:'https://cdn.shopify.com/s/files/1/0374/1987/6483/products/pepsi1.5_1000x1000.jpg?v=1591990824',
        stock: 15,
        description:'1.5 Litros'
    },
    { id: 2, name: 'Fanta', price: 110, category: 'bebida', img:'https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2020/01/fanta-1.5.jpg', stock: 16, description:'Sabor Naranja 1.5L'},
    { id: 3, name: 'Sprite', price: 100, category: 'bebida', img:'https://f.fcdn.app/imgs/3e8701/www.distribuidoradelacosta.com.uy/dicouy/8f60/original/catalogo/2-1302-1301/460x600/sprite-1-5l-sprite-1-5l.jpg', stock: 12, description:'Sabor limón 1.5l'},
    { id: 4, name: 'Hamburguesa', price: 250, category: 'comida', img:'http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.uy/files/WEB_Detail_Bacon-Duo_0.png', stock: 10, description:'Carne, bacon y queso'},
    { id: 5, name: 'Sandwich', price: 200, category: 'comida', img:'https://www.subway.com/ns/images/menu/MEX/SPA/Menu-Subway-JamonDeCerdo-15cm-sub.jpg', stock: 10, description:'Jamón, pimientos y lechuga'},
    { id: 6, name: 'Soda + Sandwich', price: 280, category: 'combo', img:'https://devthion-api-images.s3.sa-east-1.amazonaws.com/0.sfhpj2am3n', stock: 5, description:'bebida Cola 1L y Sandwich '}
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            categoryId ? resolve(products.filter(prod => prod.category === categoryId)) : resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}
