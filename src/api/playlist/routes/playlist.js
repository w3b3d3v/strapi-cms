'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;
const { createOrUpdate } = require('../controllers/playlist');

const router = createCoreRouter('api::playlist.playlist');

router.post('/playlist/create-or-update', createOrUpdate);

module.exports = router;

