module.exports = {
    routes: [
       {
            method: 'POST',
            path: '/playlists/createOrUpdate',
            handler: 'playlist.createOrUpdate',
            config: {
                policies: [],
                middlewares: []
            }
       }

    ]
}