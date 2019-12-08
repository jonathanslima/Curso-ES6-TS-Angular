import {DAOInterface} from './DAOInterface';
import Pessoa from './modules/Pessoa';

export class DAOPessoa implements DAOInterface{
	nomeTabela: string = 'tb_pessoa'

	inserir(Pessoa: any) : boolean{
		console.log('Pessoa inserida!')
		return true;
	}
	atualizar(Pessoa: any) : boolean{
		console.log('Pessoa atualizada!')
		return true;
	}

	remover(id: number) : Pessoa{
		console.log('Pessoa removida!')
		return new Pessoa('', '', '');
	}

	selecionar(id: number) : Pessoa{
		console.log('Pessoa selecionada!')
		return new Pessoa('', '', '');
	}

	selecionarTodos() : [Pessoa]{
		console.log('Pessoas selecionadas!');
		return [new Pessoa('', '', '')];
	}
}