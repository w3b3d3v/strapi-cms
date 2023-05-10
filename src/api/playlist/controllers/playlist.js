'use strict';

/**
 * playlist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::playlist.playlist', {
    async createOrUpdate(ctx) {
        const { playlist_id, ...data } = ctx.request.body;
        const existingRecord = await strapi.services.playlist.findOne({ playlist_id });
      
        if (existingRecord) {
          const updatedRecord = await strapi.services.playlist.update({ playlist_id }, data);
          return updatedRecord;
        } else {
          const newRecord = await strapi.services.playlist.create(data);
          return newRecord;
        }
      }      
});
