const Express = require('express');

const routes = Express.Router();

routes.get('/', (req, res) => {
    return res.json({message: `Criando API com Express e desnvolvendo app Airbnb ${req.query.name}`})
})

routes.post('/devs' , (req,res) =>{
    return res.json({ok: true });
});

module.exports = routes;