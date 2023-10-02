import {model, Schema } from "mongoose";

// export para poder ser usado por outros  arquivos 
export const Endereco = model("Endereco", new Schema({ // Modelo para criar uma nova categoria
	name: { // atributo nome da categoria de tipo str
		type: String,
		required: true, // é obrigatoria
	},
	numero: { // icon da categoria do tipo str, é obrigatoria
		type: String,
		required: true,
	},
    complemento: {
        type: String,
        required: false,
    },
    bairro: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    cidade: {
        type: Schema.Types.ObjectId,
        required: true
    }
}));