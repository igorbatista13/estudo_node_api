import DreRepository from '../repositories/DreRepository.js'

class DreController{
   
    async index(req, res) {
        const row = await DreRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await DreRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await DreRepository.create(selecao)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await DreRepository.update(selecao, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await DreRepository.delete(id)
        res.json(row)
    }

}

// padrão Singleton
export default new DreController()
