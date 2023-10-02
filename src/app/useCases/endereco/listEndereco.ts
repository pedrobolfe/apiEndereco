import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function listEndereco(req: Request, res: Response) { // funcao assincrona para listar os produtos
	try {
		const products = await Endereco.find(); // consulta o BD e obtem os produtos disponiveis para listar, usando solicitação GET

		res.json(products); // resposta HTTP em formato json dos produtos 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro do server
	}
}