module.exports=function(app){
    
    //rota para a página formulário de inclusão de notícia
    app.get('/formularioinclusaonoticia', (req, res)=>{
        res.render('admin/form_add_noticia.ejs')
    })


} //exportando admin pra rodar no app