import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017') // conecta com o banco de dados
	.then(() => {

		const app = express(); // 
		const port = 3002; // porta 

		// configurando o express
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json()); // sempre que uma solicitação chegar no back-end, o Express executará as funções
		app.use(router); // add uma nova funcao ao app
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`); // servidor rodando e link do server
		});
	})
	.catch(() => console.log('Erro ao conectar no mongoDb')); // msg de erro