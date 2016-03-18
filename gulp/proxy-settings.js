var apihost = 'http://apihost.com',
    cdnhost = 'http://cdnhost.com',
    localhost8005 = 'http://localhost:8005',
    localhost8006 = 'http://localhost:8006',
    localhost8007 = 'http://localhost:8007';

module.exports = {
    settings: {
        apiHost: apihost,
        helpHost: apihost,
        componentHosts: {
            cdn: cdnhost
        }
    },
    isLocalhost: function(host){
        return host == localhost8005 || host == localhost8006 || host == localhost8007;
    }
};