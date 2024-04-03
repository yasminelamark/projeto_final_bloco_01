import { Produto } from "./Produto";

export class Roupas extends Produto{
    
    private _tipodeRoupa: string;

	constructor(id: number, nome: string, tipo: number, preco: number, tipodeRoupa: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._tipodeRoupa = tipodeRoupa;
	}


    /**
     * Getter generico
     * @return {string}
     */
	public get generico(): string {
		return this._tipodeRoupa;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set generico(value: string) {
		this._tipodeRoupa = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`tipodeRoupa: ${this._tipodeRoupa}`);
    }
}