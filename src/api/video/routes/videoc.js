module.exports = {
    routes: [
       {
            method: 'POST',
            path: '/videos/createOrUpdate',
            handler: 'video.createOrUpdate',
            config: {
                policies: [],
                middlewares: []
            }
       }

    ]
}