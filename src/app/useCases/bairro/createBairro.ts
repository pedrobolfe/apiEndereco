import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function createBairro(req: Request, res: Response) { // Criar nova categoria, ex: hamburguer, bebida, pizza, etc..
	try {
		//res.send('Ok post category');
		const {name} = req.body; // extrai o icon e nome para a solicitação post
		const bairro = await Bairro.create({name}); // cria uma nova instancia da Categoria dop roduto
		res.status(201).json(bairro); // passa o status que a solicitação POST deu certo
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro ao conectar com o servidor
	}
}