db.produtos
 .find({
  valoresNutricionais: {
        $elemMatch: {
            $and: [{ tipo: "calorias" }, { quantidade: { $lt: 500 } }],
                    },
                       }, 
        }, { _id: 0, nome: 1 });
