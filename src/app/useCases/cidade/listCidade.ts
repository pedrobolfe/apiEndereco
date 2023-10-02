import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function listCidade(req: Request, res: Response) { // funcao assincrona para listar os produtos
	try {
		const cidade = await Cidade.find(); // consulta o BD e obtem os produtos disponiveis para listar, usando solicitação GET

		res.json(cidade); // resposta HTTP em formato json dos produtos 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro do server
	}
}