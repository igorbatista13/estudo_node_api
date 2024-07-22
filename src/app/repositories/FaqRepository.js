import { consulta } from '../database/conexao.js'

class FaqRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO faq SET ?"
        return consulta(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM faq;"
        return consulta(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM faq WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE faq SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM faq WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new FaqRepository()
