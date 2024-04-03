import { Produto } from "./Produto";

export class Acessorios extends Produto{
    
    private _tipodeAcessorio: string;
  

	constructor(id: number, nome: string, tipo: number, preco: number,   tipodeacessorio: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._tipodeAcessorio = tipodeacessorio;
	}


    /**
     * Getter generico
     * @return {string}
     */
	public get generico(): string {
		return this._tipodeAcessorio;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set generico(value: string) {
		this._tipodeAcessorio = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(` Tipo de Acessorio: ${this._tipodeAcessorio}`);
    }
}