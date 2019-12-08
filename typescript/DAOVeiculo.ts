import {DAOInterface} from './DAOInterface';
import Veiculos from './modules/Veiculos';

export class DAOVeiculos implements DAOInterface{
	nomeTabela: string = 'tb_veiculos'

	inserir(Veiculos: any) : boolean{
		console.log('Veiculo inserido!')
		return true;
	}
	atualizar(Veiculos: any) : boolean{
		console.log('Veiculo atualizado!')
		return true;
	}

	remover(id: number) : Veiculos{
		console.log('Veiculo removido!')
		return new Veiculos('');
	}

	selecionar(id: number) : Veiculos{
		console.log('Veiculo selecionado!')
		return new Veiculos('');
	}

	selecionarTodos() : [Veiculos]{
		console.log('Veiculos selecionados!');
		return [new Veiculos('')];
	}
}