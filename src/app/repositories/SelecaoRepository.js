import { consulta } from '../database/conexao.js'

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO users SET ?"
        return consulta(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM users;"
        return consulta(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM users WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE users SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM users WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new SelecaoRepository()
