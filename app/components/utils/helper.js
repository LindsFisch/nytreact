var axios = require("axios");

var apiKey = "60064f02c0cb48578b7deb817fa16075";

var helper = {
    getArticles: function (search, start, end){
        var startDate = start + '0101';
        var endDate = end + '0101';

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
            'apikey': apiKey,
            'q': search,
            'begin_date': startDate,
            'end_date': endDate
            }
          })
          .then(function (response) {
            console.log(response);
            return response;
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    getSaved: function() {
        return axios.get('/api/saved')
        .then(function(results){
            return results;
        })

    }, 

    postSaved: function(title, link, date) {
        return axios.post('/api/saved', {'title': title, 'link': link, 'date': date})
        .then(function(results){
            console.log(results);
            return results;
        })
    },

    deleteSaved: function(title, link, date){
        return axios.delete('/api/delete', {
            params: {
                'title': title,
                'link': link,
                'date': date
            }
        })
        .then(function(results){
            console.log(results);
            return results;
        })
    }
}

module.exports = helper;