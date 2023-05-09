'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;
const { createOrUpdate } = require('../controllers/video');

const router = createCoreRouter('api::video.video');

router.post('/video/create-or-update', createOrUpdate);

module.exports = router;
