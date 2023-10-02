import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function creatEndereco(req: Request, res: Response) { // Criar nova categoria, ex: hamburguer, bebida, pizza, etc..
	try {
		//res.send('Ok post category');
		const {name, numero, complemento, bairro, cidade} = req.body; // extrai o icon e nome para a solicitação post
		const endereco = await Endereco.create({name, numero, complemento, bairro, cidade}); // cria uma nova instancia da Categoria dop roduto
		res.status(201).json(endereco); // passa o status que a solicitação POST deu certo
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro ao conectar com o servidor
	}
}