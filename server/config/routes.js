var path = require('path');

module.exports = function(app){
    app.get('/api/');
    app.get('/api/projects/');
    app.get('/api/projects/film');
    app.get('/api/projects/tv');
    app.get('/api/projects/commercials');
    app.get('/api/contact/backlots');
    app.get('/api/bio/');
    app.get('/api/contact/');


    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}