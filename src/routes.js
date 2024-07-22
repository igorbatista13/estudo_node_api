import { Router } from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'
import UsersController from './app/controllers/UsersController.js'
import DreController from './app/controllers/DreController.js'
import FaqController from './app/controllers/FaqController.js'
import VagasController from './app/controllers/VagasController.js'
const router = Router()

// ROTAS

router.get('/selecoes', SelecaoController.index)
router.get('/selecoes/:id', SelecaoController.show)
router.post('/selecoes', SelecaoController.store)
router.put('/selecoes/:id', SelecaoController.update)
router.delete('/selecoes/:id', SelecaoController.delete)

// Usuários
router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.show)
router.post('/users', UsersController.store)
router.put('/users/:id', UsersController.update)
router.delete('/users/:id', UsersController.delete)

// Usuários
router.get('/dre', DreController.index)
router.get('/dre/:id', DreController.show)
router.post('/dre', DreController.store)
router.put('/dre/:id', DreController.update)
router.delete('/dre/:id', DreController.delete)

router.get('/faq', FaqController.index)
router.get('/faq/:id', FaqController.show)
router.post('/faq', FaqController.store)
router.put('/faq/:id', FaqController.update)
router.delete('/faq/:id', FaqController.delete)


router.get('/vagas', VagasController.index)
router.get('/vagas/:id', VagasController.show)
router.post('/vagas', VagasController.store)
router.put('/vagas/:id', VagasController.update)
router.delete('/vagas/:id', VagasController.delete)




export default router
