const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/notas-db' , {
        
    })
    .then(db => console.log('DB Conectada'))
    .catch(err => console.error(err));

