export abstract class Produto{

    private _id: number;
    private _nome: string;
    private _preco: number;
    private _tipo: number;
    private _genero: string;


	constructor(id: number, nome: string, preco: number, tipo: number, genero: string) {
		this._id = id;
		this._nome = nome;
		this._preco = preco;
		this._tipo = tipo;
		this._genero = genero;
	}
    

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter genero
     * @return {string}
     */
	public get genero(): string {
		return this._genero;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter genero
     * @param {string} value
     */
	public set genero(value: string) {
		this._genero = value;
	}
 
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Roupas"
                break;
            case 2:
                tipo = "Acessorios"
                break;
        }

        console.log("****************************************************")
        console.log("Produto")
        console.log("****************************************************")
        console.log(`Id : ${this._id}`)
        console.log(`Nome: ${this._nome}`)
        console.log(`Tipo : ${tipo}`)
        console.log(`Preço : ${this._preco}`)
        console.log(`genero: ${this._genero}`)
    }
}


