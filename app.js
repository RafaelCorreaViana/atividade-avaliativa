const app=require('./config/server.js'); //importação do server
const rotaHome=require('./app/routes/home.js')(app); //importar o módulo home e executá-lo
const rotaAdmin=require('./app/routes/admin.js')(app); //importar o módulo admin e executá-lo
const rotaNoticis=require('./app/routes/noticias.js')(app); //importar o módulo noticias e executá-lo

app.listen('3000', function(){
    console.log('Servidor rodando na porta 3000');
}); //execução do servidor na porta 3000