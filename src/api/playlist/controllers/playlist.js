'use strict'

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::playlist.playlist', {
    async createOrUpdate(ctx) {
        try {
          const data = ctx.request.body;
          let playlist_id = data.data.playlist_id;
          let existingRecord = await strapi.db.query('api::playlist.playlist').findOne({
            select: ['playlist_id'],
            where: { playlist_id: playlist_id },
          });
          if (existingRecord) {
            await strapi.db.query('api::playlist.playlist').update({
              where: { playlist_id: playlist_id },
              data: data.data
            });
          } else {
            let record = await strapi.db.query('api::playlist.playlist').create({
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

