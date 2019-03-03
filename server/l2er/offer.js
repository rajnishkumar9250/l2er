var offer = require('./../../model/mysql/l2er/offer');

exports.getOfferList = function(req, res){
  offer.getAll(function(err, offerlist){
    if(err){
      console.log('Error: ', err);
      throw new Error(err);
    }else{
      res.json({offerlist:offerlist});
    }
  });
}