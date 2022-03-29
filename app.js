const app=require('./config/server.js'); //importação do server
const rotaHome=require('./app/routes/home.js')(app); //importação da página home
const rotaAdmin=require('./app/routes/admin.js')(app); //importação da página admin
const rotaNoticis=require('./app/routes/noticias.js')(app); //importação da página noticias

app.listen('3000', function(){
    console.log('Servidor rodando na porta 3000');
}); //execução do servidor na porta 3000