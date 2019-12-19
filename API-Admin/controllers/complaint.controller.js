const db = require("../model/complaint.model");

module.exports = {
    getComplaintLimit: (req, res) => {
        var page = req.query.page || 1;
        var limit = 6;
        if (page < 1) page = 1;
        var offset = (page - 1) * limit;
        Promise.all([
          db.getCountComplaint(),
          db.getLimitComplaint(limit,offset)
        ]).then(([sumsComplaint, limitComplaint]) => {
          var numberPages = parseInt(sumsComplaint[0].sumT / limit);
          if (sumsComplaint[0].sumT % limit > 0) numberPages+=1;
          res.status(200).json({numberPages ,limitComplaint, offset,page});
          
        })
    }
}