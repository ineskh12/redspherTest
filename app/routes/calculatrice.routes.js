
module.exports = (app) => {
    const calculatrice = require('../controllers/calculatrice.controller.js');
    

    // operation de  addition 
    app.post('/addition', calculatrice.addition);

    //  operation de soustraction 
    app.post('/soustraction', calculatrice.soustraction);

    // operation de multiplication
   app.post('/multiplication', calculatrice.multiplication );


    // operation de division
    app.post('/division', calculatrice.division);


    // Retrieve all calculatrice
    app.get('/all', calculatrice.findAll);
 
  
}
