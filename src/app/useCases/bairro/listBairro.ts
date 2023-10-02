import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function listBairro(req: Request, res: Response) { // funcao assincrona para listar os produtos
	try {
		const bairro = await Bairro.find(); // consulta o BD e obtem os produtos disponiveis para listar, usando solicitação GET

		res.json(bairro); // resposta HTTP em formato json dos produtos 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro do server
	}
}