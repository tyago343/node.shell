var fs = require('fs');
var req = require('request');
module.exports = {
  pwd: function(filename) {
    process.stdout.write(process.env.PWD);
  },
  date: function(filename) {
    process.stdout.write(Date());
  },
  ls: function(filename) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
      });
    });
  },
  echo: function(cmd, filename) {
    var arr = cmd.split('echo');
    process.stdout.write(arr[1].trim());
  },
  cat: function(filename) {
    fs.readFile(filename, function(err, files) {
      if (err) throw err;
      process.stdout.write(files.toString());
    });
  },
  head: function(filename) {
    fs.readFile(filename, function(err, files) {
      if (err) throw err;
      var arr = files.toString().split('\n');
      for (var i = 0; i < 5; i++) {
        process.stdout.write(arr[i]);
      }
    });
  },
  tail: function(filename) {
    fs.readFile(filename, function(err, files) {
      if (err) throw err;
      var arr = files.toString().split('\n');
      for (var i = arr.length - 5; i < arr.length; i++) {
        process.stdout.write(arr[i]);
      }
    });
  },
    curl : function(filename, done){
        var output ='';
      req.get(filename, function(err, files, body){
        output+=body;
          done(output);
      })  
    },
};