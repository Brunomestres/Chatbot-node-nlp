const { NlpManager } = require('node-nlp');
var readline = require('readline');
console.log("Iniciado ChatBot ...");

const manager = new NlpManager({ languages: ["en"]});
manager.load();

var rl = readline.createInterface(process.stdin, process.stdout);

console.log("ChatBot Iniciado");
rl.setPrompt("> ");
rl.prompt();

rl.on('line', async function(line){
  const response = await manager.process("en",line);
  console.log(response.answer);
  rl.prompt();
}).on('close', function(){
  process.exit(0);
});
