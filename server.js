const express = require("express");
const cors = require("cors");

const axios = require('axios')
var request = require('request');

var testeJs = {
  "login": {
        "senha": "teste",
        "usuario": "sta-marcelina"
    },
    "atendimentoMedico": {
        "dtaAdmissao": "2007-05-01T00:00:00.0",
        "idRecepcionista": "USERMV",
        "recepcionista": "USUARIO MV ACESSO SISTEMA TESTE",
        "idGravidade": 1
    },
    "paciente": {
        "nome": "JOSIVANE MARIA DA SILVA",
        "dtaNascimento": "1983-09-12T00:00:00.0",
        "sexo": "F",
        "nomeMae": "MARIA BERENICE DA SILVA",
        "nomePai": "VICENTE FERREIRA",
        "cpf": "00028576691",
        "logradouro": "BARAO DE ITAMARACA",
        "numero": "397",
        "bairro": "ESPINHEIRO",
        "cidade": "RECIFE",
        "estado": "PE",
        "cep": "52020070"
    },
    "pacienteEspecialidade": {
        "idEspecialidade": 9,
        "idMedico": "408",
        "medico": "ENF. ANIELA COLE",
        "dtaInicioAtendimento": "2007-05-01T00:00:00.0",
        "dtaFimAtendimento": ""
    },
    "pacienteLeito": {
        "idLeito": 1250,
        "leito": "LEEITO",
        "cid": "Z321",
        "planoTerapeutico": "",
        "dtaInicioLeito": "2007-05-01T00:00:00.0",
        "dtaFimLeito": ""
    },
    "pacienteClassificacao": {}
};


var token;
const app = express();
app.use(cors());
app.use(express.json());


app.listen(3000,()=> {
  console.log("Servidor está ativo...✓")
  console.log("Porta :3000")  
});


// get request

app.post('/postToLife', (req,response)=>{

    console.log("Consumindo url: ", req.body.url);
    response.status(200);
    console.log("Conectado ✓")

 


    axios
    .post(req.body.url, JSON.parse(req.body.data)
    )
    .then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res.data)
      response.send(res.data)
    })
    .catch(error => {
      console.error(error)
     response.send(error.message)
    })
    
})

app.put('/update/:id', function (req, res) {
    const{id} = req.params;
    console.log("ta auqi")
  
        console.log("Dados atualizados ✓")
    }     
)
        
    

// post request










// Criação do token jwt
