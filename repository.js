'use strict';

const { v4: uuidv4 } = require('uuid');

const id1 = uuidv4();
const id2 = uuidv4()

// mock events data - for a real solution this data should be coming 
// from a cloud data store
const db = [
    { title: 'a mock event', id: id1, description: 'something really cool', location: 'Joes pizza', likes: 0 },
    { title: 'another mock event', id: id2, description: 'something even cooler', location: 'Johns pizza', likes: 0 }
];

function buildEvent(ev, body, likes, id) {
    ev.title = body.title;
    ev.description = body.description;
    ev.location = body.location;
    ev.likes = likes;
    ev.id = id;
}


// responsible for retrieving events from data and adding 
// data's generated id to the returned object
async function getEvents(data = db) {
    return data;
};

async function getEvent(id, data = db) {
    return data.find(x => x.id === id);
};



// This has been modified to insert into data, and then call 
// the shared getEvents method.
async function addEvent(event, data = db) {
    // create a new object from the json data. The id property
    // has been removed because it is no longer required.
    // data generates its own unique ids
    console.log("adding new event ");
    const ev = {};
    buildEvent(ev, event, 0, uuidv4());
    data.push(ev);
    return  ev;

};

async function deleteEvent(id, data = db) {
    console.log("deleting event " + id);
    const ev = data.findIndex((item) => item.id === id);
    data.splice(ev, 1);
};

async function updateEvent(event, data = db) {
    console.log("updating event " + event.id);
    const ev =  data.find(x => x.id === event.id);
    buildEvent(ev, event, event.likes, ev.id);
};

// function used by both like and unlike. If increment = true, a like is added.
// If increment is false, a like is removed.
async function changeLikes(id, increment, data) {
    // get the existing object
    const ev =  data.find(x => x.id === id);
    // increment the likes
    if (increment) {
        ev.likes++;
    }
    else if(ev.likes > 0) {
        ev.likes--;
    }  
}

async function addLike(id, data = db) {
    console.log("adding like to " + id);
    changeLikes(id, true, data);
};

async function removeLike(id, data = db) {
    console.log("removing like from " + id);
     changeLikes(id, false, data);
};


const eventRepository = function () {

    return {
        getEvents: getEvents,
        getEvent: getEvent,
        addEvent: addEvent,
        deleteEvent: deleteEvent,
        updateEvent: updateEvent,
        addLike: addLike,
        removeLike: removeLike
    };
}();

module.exports = eventRepository;