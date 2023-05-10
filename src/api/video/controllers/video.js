'use strict'

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video.video', {
    async createOrUpdate(ctx) {
        try {
          const svc = strapi.service('api::video.video');
          const data = ctx.request.body;
          let video_id = data.data.video_id;
          let existingRecord = await strapi.db.query('api::video.video').findOne({
            select: ['video_id'],
            where: { video_id: video_id },
            populate: { playlist: true},
          });
          if (existingRecord) {
            await strapi.db.query('api::video.video').update({
              where: { video_id: video_id },
              data: data.data
            });
          } else {
            let record = await strapi.db.query('api::video.video').create({
              data: data.data
            });
          }
          ctx.status = 200;
          ctx.body = { message: 'ok', data: data.data, status: 200 };
        }
        catch(err) {
          ctx.status = 500;
          ctx.body = { message: err.message, status: 500 };
        }
        
      }
});
