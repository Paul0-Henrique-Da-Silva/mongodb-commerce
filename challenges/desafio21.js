db.produtos.updateOne(
    { nome: "Cheddar McMelt" },
    { $pop: { ingredientes: 1 } }, // último
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });