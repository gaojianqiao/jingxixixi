const proxy =require('http-proxy-middleware');
module.exports=function(app){
    app.use('/lct',
    proxy({
        target:'https://mobileway.lecuntao.com',
        changeOrigin:true,
    })
    );
};