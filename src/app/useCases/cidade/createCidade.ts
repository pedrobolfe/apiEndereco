import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function createCidade(req: Request, res: Response) { // Criar nova categoria, ex: hamburguer, bebida, pizza, etc..
	try {
		//res.send('Ok post category');
		const {name, estado} = req.body; // extrai o icon e nome para a solicitação post
		const cidade = await Cidade.create({name, estado}); // cria uma nova instancia da Categoria dop roduto
		res.status(201).json(cidade); // passa o status que a solicitação POST deu certo
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro ao conectar com o servidor
	}
}