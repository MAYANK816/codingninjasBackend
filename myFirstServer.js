

const PORT = 3000;
const express = require('express');
const path = require('path');
// const url = require('url');
// const fs = require('fs');

const app = express();


app.set('view engine','ejs');

app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded({ extended : true})); //middleware

var Movies = [
    {
        name : 'IronMan-1',
        year : '2009'
    },
    {
        name : 'MS Dhoni',
        year : '2016'
    },
    {
        name : 'Avengers',
        year : '2014'
    }

]


app.get('/',function(req,res){
    return res.render('index',{Movies : Movies});

})


app.post('/addMovies',function(req,res){
    console.log(req.body);
    let obj = {
        name : req.body.movieName,
        year : req.body.movieYear
    }
    Movies.push(obj);

   return res.redirect('back');
})


[0,1,2,3,4]

app.get('/movieDelete/:name',function(req,res){
   
    let movieIndex = Movies.findIndex(value => value.name == req.params.name);
    console.log("Index",movieIndex)
    if(movieIndex != -1){
        Movies.splice(movieIndex,1);
    }
   return res.redirect('back')
})




app.listen(PORT,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on Port",PORT)
})





























// 1===3 ? console.log("acb") : 1==2 ? console.log("right") : console.log("xyz");

// if(1===3){
//     console.log("acb")
// }
// else if(1==1){
//     console.log("right")
// }
// else{
//     console.log("xyz")
// }


//middleware

// app.use(function(req,res,next){
//     console.log("Calling 1")
//     next();
// })

// app.use(function(req,res,next){
//     console.log("Calling 2")
//     next();
// })








// Blocking vs Non-Blocking


// callStack








// app.get('/profile',function(req,res){
//     console.log("path",__dirname);
//     return res.sendFile(__dirname+'/profile.html');
  
// })



// function myFirst(req,res){
    
//    var q = url.parse(req.url,true);
//    console.log("file Name",q.pathname)
//    let filePath = '.' + q.pathname +'.html';

//    fs.readFile(filePath,function(err,data){
//     if(err){
//         res.writeHead(404,{'Content-Type': 'text/html'});
//        return res.end("404 Not found")
//     }
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     return res.end(data);
// });

   
// }

// const server = http.createServer(myFirst);


// server.listen(PORT, function(err){
//     if(err){
//         console.log("Error in server")
//         return;
//     }
//     console.log("server is on Port", PORT)

// })

// console.log(__dirname)
//         return res.sendFile(__dirname+'/profile.html');


// app.use(express.urlencoded({ extended: true }))

// var Movies =[ {
//     name : "IronMan-1",
//     year : "2009",
// },
// {
//     name : "Rush",
//     year : "2016"
// },
// {
//     name : "Avengers",
//     year : "2014"
// }
// ]


// app.get('/',function(req,res){
//     return res.render('index' , {Movies : Movies });

// })

// app.get('/profile',function(req,res){
//     return res.send('No Use');
 
//  })

//  app.post('/addMovie',function(req,res){
//      let obj = {
//         name : req.body.MovieName,
//         year : req.body.MovieYear,
//      }
     
//      console.log(req.body);
//      Movies.push(obj)
//      res.redirect('/')
//  })

// app.listen(PORT,function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Server is running on Port",PORT)
// })














