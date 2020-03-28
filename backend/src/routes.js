const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//Criando seção de login
routes.post("/sessions", SessionController.create);

//Listar ongs
routes.get("/ongs", OngController.index);
//Cadastrar ongs
routes.post("/ongs", OngController.create);

//Listando casos de uma ong específica
routes.get("/profile", ProfileController.index);

//Listar Casos
routes.get("/incidents", IncidentController.index);
//Criar um Caso(incident)
routes.post("/incidents", IncidentController.create);
//Deletar um caso
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
