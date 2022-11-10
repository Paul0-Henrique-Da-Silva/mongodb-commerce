db.produtos
 .find({
  valoresNutricionais: {
        $elemMatch: {
            $and: [{ tipo: "proteínas" }, { percentual: { $gte: 30, $lte: 40 } }],
                    },
                       }, 
        }, { _id: 0, nome: 1 });