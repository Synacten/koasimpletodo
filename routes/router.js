const Router = require('koa-router');
const { root } = require('../controllers/common');
const list = require('../controllers/lists');
const delTask = require('../controllers/delete');
const updateData = require('../controllers/update');

const router = new Router();

router.get('/', root);
router.get('/list', list.getAllList);
router.get('/api/list', list.apiList);
router.get('/add', list.getToAdd);
router.post('/list', list.postTask);
router.post('/update', updateData);
router.delete('/delete', delTask);

module.exports = {
  router,
};
