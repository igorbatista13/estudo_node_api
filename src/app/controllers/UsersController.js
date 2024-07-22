import UsersRepository from '../repositories/UsersRepository.js'
class UsersController {
   
    async index(req, res) {
        const row = await UsersRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await UsersRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await UsersRepository.create(selecao)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const row = await UsersRepository.update(selecao, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await UsersRepository.delete(id)
        res.json(row)
    }

}

// padrão Singleton
export default new UsersController()
