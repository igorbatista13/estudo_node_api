import FaqRepository from '../repositories/FaqRepository.js';

class FaqController {
   
    async index(req, res) {
        try {
            const rows = await FaqRepository.findAll();
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar os FAQs!' });
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const row = await FaqRepository.findById(id);
            if (row) {
                res.json(row);
            } else {
                res.status(404).json({ error: 'FAQ não encontrado!' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível buscar o FAQ!' });
        }
    }

    async store(req, res) {
        try {
            const selecao = req.body;
            const row = await FaqRepository.create(selecao);
            res.status(201).json(row);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível cadastrar!' });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const selecao = req.body;
            const row = await FaqRepository.update(selecao, id);
            if (row) {
                res.json(row);
            } else {
                res.status(404).json({ error: 'FAQ não encontrado!' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível atualizar!' });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const row = await FaqRepository.delete(id);
            if (row) {
                res.json({ message: 'FAQ deletado com sucesso!' });
            } else {
                res.status(404).json({ error: 'FAQ não encontrado!' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível deletar!' });
        }
    }
}

// padrão Singleton
export default new FaqController();
