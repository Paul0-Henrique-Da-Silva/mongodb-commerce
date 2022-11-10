db.produtos
  .updateMany(
    {},
    { $set: { avaliacao: NumberInt(0) } },
    );

db.produtos
    .updateMany(
        { tags: { $in: ["bovino"] } },
        { $inc: { avaliacao: 5 } },
    );

db.produtos
    .updateMany(
        { tags: { $in: ["ave"] } },
        { $inc: { avaliacao: 3 } },
    );

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1, avaliacao: 1 });