import { Router } from 'express'
const router = Router()
import * as carsCtrl from '../controllers/cars.js'
/* GET users listing. */
router.get('/', carsCtrl.index )
router.get('/new',carsCtrl.new)
router.post('/',carsCtrl.create)
router.delete('/:id',carsCtrl.delete)
router.get('/:id/show',carsCtrl.show)
export {
  router
}
