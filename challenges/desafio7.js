db.produtos
.find(
    {
        tags: { $exists: false },
        quantidade: { $ne: 50 },    
    }, { _id: 0, nome: 1, vendidos: 1 },
    );