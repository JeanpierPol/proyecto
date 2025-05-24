class CRUDServices {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }

    async insertData(args) {
        try {
            const newData = new this.model(args);
            const res = await newData.save();
            return res;
        } catch (err) {
            console.error(`Error al insertar ${this.name}:`, err);
            throw err;
        }
    }

    async getAllData() {
        try {
            const data = await this.model.find();
            console.log(`${this.name}:`, data);
            return data;
        } catch (err) {
            console.error(`Error al obtener ${this.name}s:`, err);
            throw err;
        }
    }

    async getDataById(key, value){
        try {
            const data =  await this.model.find({ [key] : value});
            console.log(`${this.name}:`, data);
            return data;

        } catch (error) {
            console.error(`Error al obtener ${this.name}s:`, error);
            throw error;
            
        }
    }

    async deleteData(id) {
        try {
            const data = await this.model.findByIdAndDelete(id);

            if (!data) {
                throw new Error(`${this.name} no encontrado`);
            }

            console.log(`${this.name} eliminado:`, data);
            return data;
        } catch (err) {
            console.error(`Error al eliminar ${this.name}:`, err);
            throw err;
        }
    }

    async editData(id, data) {
        try {
            const newData = await this.model.findByIdAndUpdate(
                id,
                data,
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!newData) {
                throw new Error(`${this.name} no encontrado`);
            }

            console.log(`${this.name} actualizado:`, newData);
            return newData;
        } catch (err) {
            console.error(`Error al actualizar ${this.name}:`, err);
            throw err;
        }
    }

    async getDataByIdOnly(id) {
        try {
            const data = await this.model.findById(id);
            if (!data) {
                throw new Error(`${this.name} no encontrado`);
            }
            console.log(`${this.name} obtenido por ID:`, data);
            return data;
        } catch (err) {
            console.error(`Error al obtener ${this.name} por ID:`, err);
            throw err;
        }
    }

    
}

export default CRUDServices