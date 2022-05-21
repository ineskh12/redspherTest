const Calculatrice = require('../models/calculatrice.model.js');


 // operation de  addition 
exports.addition = (req, res) => {
    // 
    const operation = new Calculatrice({
     

          firstinput: req.body.firstinput,
          secondinput:req.body.secondinput,
          operation: 'addition',
          
          resultat: req.body.firstinput + req.body.secondinput ,
         
      
    });
    
  // Save operation result in the  in the database
    operation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the addition."
        });
    });
};

 // operation de  soustraction 
 exports.soustraction = (req, res) => {
    // 
    const operation = new Calculatrice({
     

          firstinput: req.body.firstinput,
          secondinput:req.body.secondinput,
          operation: 'soustraction',
          resultat: req.body.firstinput - req.body.secondinput ,



        
         
      
    }
    );
   
  // Save operation result in the  in the database
    operation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the soustraction."
        });
    });
};



// operation de  multiplication 
exports.multiplication = (req, res) => {
    // 
    const operation = new Calculatrice({
     

          firstinput: req.body.firstinput,
          secondinput:req.body.secondinput,
          operation: 'multiplication',
          resultat: req.body.firstinput * req.body.secondinput ,
        
        }
    );
   
  // Save operation result in the  in the database
    operation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the multiplication."
        });
    });
};



// operation de  division 
exports.division = (req, res) => {
    // 
    const operation = new Calculatrice({
     

          firstinput: req.body.firstinput,
          secondinput:req.body.secondinput,
          operation: 'division',
          resultat: req.body.firstinput/req.body.secondinput,
        
        }
    );
   
  // Save operation result in the  in the database
    operation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the division."
        });
    });
};

// Retrieve and return all ads from the database.
exports.findAll = (req, res) => {
   
    Calculatrice.aggregate([
     
        { $project: {  createdAt: 0, __v: 0 } },
      ]).sort({"updatedAt":-1})
    .then(operation => {
         res.status(200).json({ status:200,message: "All the operation",operation});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving operation."
        });
    });
};




