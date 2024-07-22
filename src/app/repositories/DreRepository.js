import { consulta } from '../database/conexao.js'

class DreRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO dre SET ?"
        return consulta(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM dre;"
        return consulta(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM dre WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE dre SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM dre WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new DreRepository()
