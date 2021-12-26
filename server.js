const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require('axios')
var request = require('request');


const jsTeste = "{\r\n" + 
"	\"login\": {\r\n" + 
"		\"senha\": \"teste\",\r\n" + 
"		\"usuario\": \"sta-marcelina\"\r\n" + 
"	},\r\n" + 
"	\"atendimentoMedico\": {\r\n" + 
"		\"dtaAdmissao\": \"2007-05-01T00:00:00.0\",\r\n" + 
"		\"idRecepcionista\": \"USERMV\",\r\n" + 
"		\"recepcionista\": \"USUARIO MV ACESSO SISTEMA TESTE\",\r\n" + 
"		\"idGravidade\": 1\r\n" + 
"	},\r\n" + 
"	\"paciente\": {\r\n" + 
"		\"nome\": \"JOSIVANE MARIA DA SILVA\",\r\n" + 
"		\"dtaNascimento\": \"1983-09-12T00:00:00.0\",\r\n" + 
"		\"sexo\": \"F\",\r\n" + 
"		\"nomeMae\": \"MARIA BERENICE DA SILVA\",\r\n" + 
"		\"nomePai\": \"VICENTE FERREIRA\",\r\n" + 
"		\"cpf\": \"00028576691\",\r\n" + 
"		\"logradouro\": \"BARAO DE ITAMARACA\",\r\n" + 
"		\"numero\": \"397\",\r\n" + 
"		\"bairro\": \"ESPINHEIRO\",\r\n" + 
"		\"cidade\": \"RECIFE\",\r\n" + 
"		\"estado\": \"PE\",\r\n" + 
"		\"cep\": \"52020070\"\r\n" + 
"	},\r\n" + 
"	\"pacienteEspecialidade\": {\r\n" + 
"		\"idEspecialidade\": 9,\r\n" + 
"		\"idMedico\": \"408\",\r\n" + 
"		\"medico\": \"ENF. ANIELA COLE\",\r\n" + 
"		\"dtaInicioAtendimento\": \"2007-05-01T00:00:00.0\",\r\n" + 
"		\"dtaFimAtendimento\": \"\"\r\n" + 
"	},\r\n" + 
"	\"pacienteLeito\": {\r\n" + 
"		\"idLeito\": 1250,\r\n" + 
"		\"leito\": \"LEEITO\",\r\n" + 
"		\"cid\": \"Z321\",\r\n" + 
"		\"planoTerapeutico\": \"\",\r\n" + 
"		\"dtaInicioLeito\": \"2007-05-01T00:00:00.0\",\r\n" + 
"		\"dtaFimLeito\": \"\"\r\n" + 
"	},\r\n" + 
"	\"pacienteClassificacao\": {}\r\n" + 
"}";

var token;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.listen(3000,()=> {
  console.log("Servidor está ativo...✓")
  console.log("Porta :3000")  
});


// get request

app.post('/postToLife', (req,response)=>{

    console.log("Consumindo url: ", req.body.url);
    response.status(200);
    console.log("Conectado ✓")
    console.log("body", req.body.data);
   


    axios
    .post(req.body.url, JSON.parse(jsTeste)
    )
    .then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res.data)
      response.send(res.data)
    })
    .catch(error => {
      console.error(error)
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
