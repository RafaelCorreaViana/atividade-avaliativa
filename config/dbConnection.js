const mysql=require('mysql'); //importação do módulo mysql

module.exports=function(){
    return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1234',
                database:'portal_noticias'
            }); //cria uma conexão com o banco de dados portal_noticias
}