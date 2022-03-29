module.exports=function(app){

    //rota para a página de notícia
    app.get('/noticia', function(req,res){ 
        const dbConnection=require('../../config/dbConnection');//importação do arquivo do banco de dados
            const connection=dbConnection();
            connection.query('select * from noticias', function(error, result){
                if(error){
                    console.log(error);
                }//mostra o erro caso tenha um erro
                res.render('noticias/noticias.ejs',{noticias:result}); //resposta da query para o cliente  
            });
    
    });

}; //exportando noticia pra rodar no app