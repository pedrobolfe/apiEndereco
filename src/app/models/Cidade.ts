import {model, Schema } from "mongoose";

// export para poder ser usado por outros  arquivos 
export const Cidade = model("Cidade", new Schema({ // Modelo para criar uma nova categoria
	name: { // atributo nome da categoria de tipo str
		type: String,
		required: true, // é obrigatoria
	},
    estado:{
        type: String,
		required: true, // é obrigatoria
    }
}));