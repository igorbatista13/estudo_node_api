import { consulta } from '../database/conexao.js'

class VagaRespository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO vagas SET ?"
        return consulta(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM vagas;"
        return consulta(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM vagas WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE vagas SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM vagas WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new VagaRespository()
