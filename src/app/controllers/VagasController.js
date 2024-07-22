import VagasRepository from '../repositories/VagasRepository.js'
class VagasController{
   
    async index(req, res) {
        const row = await VagasRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await VagasRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await VagasRepository.create(selecao)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await VagasRepository.update(selecao, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await VagasRepository.delete(id)
        res.json(row)
    }

}

// padrão Singleton
export default new VagasController()
