db.resumoProdutos.insertOne({
    franquia: "McDonalds",
    totalProdutos: db.produtos.countDocument({}),
});

db.resumoProdutos.find({}, { _id: 0 });