const HighScoreModel = require("../models/highScoreModel");

exports.addOneHighScore = (req,res) => {
    HighScoreModel.create(req.body)
    .then((someResponseObject) => {
        HighScoreModel.find()
        .then((allResponseObjects) => {
            for(let i = (allResponseObjects.length - 1); i >= 0; i--) {
                if(someResponseObject.score >= allResponseObjects[i].score) {
                    allResponseObjects[i+1] = allResponseObjects[i];
                }
                else {
                    allResponseObjects[i+1] = someResponseObject;
                }
                allResponseObjects[(allResponseObjects.length - 1)] = null;
            }
        })
        .catch((err) => {
            res.status(404).json({message: "Error editing scores", error: err.message});
        });
        res.json({ message: "You have added a high score." });
    })
    .catch((err) => {
        res.status(404).json({message: "Error creating score", error: err.message});
      });
};

exports.listAllScores = (req, res) => {
    HighScoreModel.find()
    .then((someResponseObject) => {
      console.log({someResponseObject});
      res.json(someResponseObject);
    })
    .catch((err) => {
      res.status(404).json({message: "Error listing scores", error: err.message});
    });
  };
  