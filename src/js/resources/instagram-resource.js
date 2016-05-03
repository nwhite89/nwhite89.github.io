define([
], function () {
    function instagram ($resource) {
        var url = 'https://api.instagram.com/v1/users/48050029/media/recent/' +
                '?client_id=f5a6171453de48218d0b58c10e7479e2' +
                '&count=6',
            resource = $resource(url,
                {
                    callback: 'JSON_CALLBACK'
                },
                {
                    getImages: {
                        method: 'JSONP'
                    }
                }
            );

        return resource;
    }

    return instagram;
});
