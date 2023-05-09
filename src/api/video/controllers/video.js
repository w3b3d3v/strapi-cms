'use strict';

/**
 * video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video.video', {
    async createOrUpdate(ctx) {
        const { video_id, ...data } = ctx.request.body;
        const existingRecord = await strapi.services.video.findOne({ video_id });
      
        if (existingRecord) {
          const updatedRecord = await strapi.services.video.update({ video_id }, data);
          return updatedRecord;
        } else {
          const newRecord = await strapi.services.video.create(data);
          return newRecord;
        }
      }      
});
