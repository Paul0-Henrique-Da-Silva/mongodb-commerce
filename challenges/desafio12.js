db.produtos
  .updateMany(
    { $nor: [{ name: "McChicken" }, { ingredientes: "ketchup" }] }, 
    { $addToSet: { ingredientes: "ketchup" } },
    );
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });