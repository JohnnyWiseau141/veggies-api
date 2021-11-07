import { Router } from 'express'
const router = Router()
import * as vegetablesCtrl from "../controllers/vegetables.js"

// GET	/api/vegetables	Retrieve ALL vegetables
router.get('/vegetables', vegetablesCtrl.index)

// GET	/api/vegetables/:id	Retrieve a SINGLE vegetable
router.get('/vegetables/:id', vegetablesCtrl.show)

// POST	/api/vegetables	Add a vegetable
router.post('/vegetables', vegetablesCtrl.create)

// PUT	/api/vegetables/:id	Update a vegetable
router.put('/vegetables/:id', vegetablesCtrl.update)

// DELETE	/api/vegetables/:id	Delete a vegetable
router.delete('/vegetables/:id', vegetablesCtrl.delete)


export {
  router
}
