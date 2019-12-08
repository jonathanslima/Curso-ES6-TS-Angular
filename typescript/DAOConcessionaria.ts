import {DAOInterface} from './DAOInterface';
import Concessionaria from './modules/Concessionaria';

export class ConcessionariaDAO implements DAOInterface{
	nomeTabela: string = 'tb_concessionaria'

	inserir(Concessionaria: any) : boolean{
		console.log('Objeto inserido!')
		return true;
	}
	atualizar(Concessionaria: any) : boolean{
		console.log('Objeto atualizado!')
		return true;
	}

	remover(id: number) : Concessionaria{
		console.log('Objeto removido!')
		return new Concessionaria('', []);
	}

	selecionar(id: number) : Concessionaria{
		console.log('Objeto selecionado!')
		return new Concessionaria('', []);
	}

	selecionarTodos() : [Concessionaria]{
		console.log('Objetos selecionados!');
		return [new Concessionaria('', [])];
	}
}