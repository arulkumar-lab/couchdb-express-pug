let db = {

    save: function (db, options, done) {
        var request = require('request')
            , querystring = require('querystring')

        var url = 'http://localhost:5984/'
        var dbd = 'couchdb_mydb/'
        var id = (new Date().toJSON()) + ':doc_id'


        request.put(url + dbd, function (err, resp, body) {
            request.put({
                url: url + dbd + id,
                body: {id: options._id, message: options.message, name: options.name},
                json: true,
            }, function (err, resp, body) {
                request(url + dbd + id, function (err, res, body) {
                    if (err) return done('Unable to connect to CouchDB')
                    if (res.error) return done('Unable to get the comments')
                    done(null, res.rows)
                })
            })
        })
    },

    load: function (params, options, done) {
        var request = require('request')
            , querystring = require('querystring');
        if(params === null || typeof params === "undefined"){
            params = "";
        }
        var url = 'http://localhost:5984/'
        var dbd = 'couchdb_mydb/'

        request({
            url: url + '/' + dbd + '/_all_docs?' + params,
            json: true,
        }, function(err, res, body) {
            if (err) return done('Unable to connect to CouchDB')
            done(null, body)
        })
    },
    all: all = function(db, options, done) {
        var request = require('request')
            , querystring = require('querystring')

        var url = 'http://localhost:5984/'
        var dbd = 'couchdb_mydb/'
        var id = (new Date().toJSON()) + ':doc_id'
        var params = querystring.stringify({
            include_docs: options.include_docs === false ? false : true,
            descending: options.descending,
            skip: options.skip,
            limit: options.limit,
            key: options.key,
            startkey: options.startkey,
            endkey: options.endkey,
        })

        request({
            url: url + '/' + dbd + '/_all_docs?',
            json: true,
        }, function (err, res, body) {
            if (err) return done('Unable to connect to CouchDB')
            done(null, body)
        })
    }

};
module.exports = db;