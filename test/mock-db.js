
// mock events data - for a real solution this data should be coming 
// from a cloud data store
function db() {
    return  [
            { title: 'a mock event', id: 1, description: 'something really cool', location: 'Joes pizza', likes: 0 },
            { title: 'another mock event', id: 2, description: 'something even cooler', location: 'Johns pizza', likes: 0 }
        ]
};


module.exports = db;
