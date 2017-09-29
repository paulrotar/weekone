var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
      if(err) throw err;
      var myobj = [
        {
        "_id":001 ,
        " Car Manufacturer " : "Audi",
        " Model " : "R8",
        " Base Fabrication Details " : [
          {
            " Year " : " 2012 ",
            " Color " : " black ",
            " 5 doors " : " no "
          }
        ]
      },

      ];
      db.collection("customers").insertOne(myobj, function(err,res){
                if(err) throw err;
                console.log("1 document created!");
                db.close();
      });
});
