import { Produto } from "./Produto";

export class Acessorios extends Produto{
    
    private _acessorios: string;
  

	constructor(id: number, nome: string, tipo: number, preco: number, genero: string , Ace_Acessorios: string, acessorios: string) {
        super(id, nome, tipo, preco, genero,) // Atributos da Classe Produto
		this._acessorios = acessorios;
	}


    /**
     * Getter generico
     * @return {string}
     */
	public get generico(): string {
		return this._acessorios;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set generico(value: string) {
		this._acessorios = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Ace_Acessorios: ${this._acessorios}`);
    }
}