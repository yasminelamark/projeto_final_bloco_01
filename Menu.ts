import readlinesync = require("readline-sync");
import { Roupas } from "./src/model/Roupas";
import { colors } from "./src/util/Colors";
import { ProdutoController } from "./src/controller/ProducoController";
import { Acessorios } from "./src/model/Acessorios";
export function menu() {
  
    let opcao, id, tipo, preco: number;
    let nome, tipodeRoupa, acessorios : string;
    let tipoProduto = ['Roupas', 'Acessorios'];
    
    const produtoController: ProdutoController = new ProdutoController();


    while(true) {


                           console.log('    *    ');
                           console.log('   ***   ');
                           console.log('  *****  ');
                           console.log(' ******* ');                                                           
                           console.log('*********');
                           console.log(' ******* ');
                           console.log('  *****  ');
                           console.log('   ***   ');
                           console.log('    *    ');

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("               * Loja Street House *                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("          1 - CRIAR PRODUTO                          ");
        console.log("          2 - LISTAR TODOS OS PRODUTOS               ");
        console.log("          3 - CONSULTAR PRODUTO POR ID               ");
        console.log("          4 - ATUALIZAR PRODUTO                      ");
        console.log("          5 - DELETA PRODUTO                         ");
        console.log("          0 - SAIR                                   ");
        console.log("                                                     ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 0) {
            console.log("Você saiu!");
            console.log("\nLoja Street House  -  Estilo de rua na ponta dos seus dedos!");
            about()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        tipodeRoupa = readlinesync.question("Digite o Nome da Roupa: ");
                        produtoController.cadastrar(
                            new Roupas(produtoController.gerarId(),
                            nome, preco, tipo, tipodeRoupa ));
                        break;
                    case 2:
                      acessorios = readlinesync.question("Digite o tipo de acessorio: ");
                        produtoController.cadastrar(new Acessorios(produtoController.gerarId(),
                            nome, preco, tipo, acessorios));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                tipodeRoupa = readlinesync.question("Digite o Nome da Roupa: ");
                                produtoController.atualizar(new Roupas(produto.id,
                                    nome, preco, tipo, tipodeRoupa ));
                                break;
                            case 2:
                              acessorios = readlinesync.question("Digite o tipo de acessorio: ");
                                produtoController.atualizar(new Acessorios(produto.id,
                                    nome, preco, tipo, acessorios));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

function about(): void {
    console.log("Projeto desenvolvido por: Yasmine Lamark  https://github.com/yasminelamark/projeto_final_bloco_01.git");
}

menu();