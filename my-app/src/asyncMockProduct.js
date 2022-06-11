const products = [
    {
        id:1,
        title:"Notebook HP Gamer Pavilion",
        category:"notebook",
        brand:"hp", 
        description:"AMD Ryzen 5 8GB 256GB SSD 15.6", 
        price:132999,
        pictureUrl: "../assets/img/products/notebook_hp_15-ec1035la.png"
    },
    {
        id:2,
        title:"Notebook HP 14-CF2533LA", 
        category:"notebook",
        brand:"hp",
        description:"Intel Core i3 4GB 256GB SSD 14", 
        price:81999,
        pictureUrl: "../assets/img/products/notebook_hp_14-CF2533LA.png"
    },
    {
        id:3,
        title:"Notebook HP 14-dk1016la", 
        category:"notebook",
        brand:"hp",
        description:"AMD Athlon Silver 3050U 4GB 256GB SSD 14", 
        price:64999,
        pictureUrl: "../assets/img/products/notebook_hp_14-dk1016la.png"
    },
    {
        id:4,
        title:"Notebook Bangho Max L4 i1",
        category:"notebook",
        brand:"bangho", 
        description:"Intel Celeron 4GB 120GB SSD 14", 
        price:59999,
        pictureUrl: "../assets/img/products/notebook_bangho_maxL4i1.png"
    },
    {
        id:5,
        title:"Notebook Bangho Max L5", 
        category:"notebook",
        brand:"bangho",
        description:"Intel core i3 8GB 240GB SSD 15.6", 
        price:108749,
        pictureUrl: "../assets/img/products/notebook_bangho_maxL5.png"
    },
    {
        id:6,
        title:"Notebook HP 14-CF2531LA", 
        category:"notebook",
        brand:"hp",
        description:"Intel Celeron 4GB 128GB SSD 14", 
        price:57999,
        pictureUrl: "../assets/img/products/notebook_hp_14-CF2531LA.png"
    },
    {
        id:7,
        title:"Notebook Lenovo 81WA00EJ",
        category:"notebook",
        brand:"lenovo", 
        description:"Intel Core i5 8GB 256GB SSD 14", 
        price:96999,
        pictureUrl: "../assets/img/products/notebook_lenovo_81WA00EJ.png"
    },
    {
        id:8,
        title:"Notebook Lenovo V15-IML", 
        category:"notebook",
        brand:"lenovo",
        description:"Intel Core i3-10110U 8GB 1TB HDD 15.6", 
        price:104799,
        pictureUrl: "../assets/img/products/notebook_lenovo_V15-IML.png"
    },
    {
        id:9,
        title:"iPad (9ª generación)", 
        category:"tablet",
        brand:"apple",
        description:"ROM 64GB 10.2\" retina", 
        price:69999,
        pictureUrl: "../assets/img/products/tablets/ipad_9gen.png"
    },
    {
        id:10,
        title:"Galaxy Tab A7 Lite SM-T220", 
        category:"tablet",
        brand:"samsung",
        description:"8.7\" ROM 32GB RAM 3GB ", 
        price:29999,
        pictureUrl: "../assets/img/products/tablets/tabA7Lite.png"
    }
]



export const getProducts = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(products.find((prod) => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (category) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(products.filter((prod) => prod.category === category))
        }, 2000)
    })
}