var chai = require('chai');
var repo = require('../repository');
var db = require('./mock-db');
var mockData;

describe('Testing  Events', function () {
    beforeEach(function () {
        mockData = db();
    });

    describe('Testing Get Events', function () {

        it('should return events  ', function (done) {
            repo.getEvents(mockData).then(
                (data) => {
                    chai.expect(data[0].title).to.equal('a mock event');
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });


    describe('Testing Get Single Event', function () {
        it('should  retrieve single event by id', function (done) {
            const request = {
                params: {
                    id: 1
                }
            }
            repo.getEvent(request.params.id, mockData).then(
                (data) => {
                    chai.expect(data.id).to.equal(1);
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });


    describe('Testing Add Event', function () {

        beforeEach(function () {
            mockData = db();
        });
        it('should  add new item to events ', function (done) {
            const request = {
                body: {
                    title: 'new',
                    description: 'event',
                    location: 'somewhere'
                }
            }
            repo.addEvent(request.body, mockData).then(
                (ev) => {
                    chai.expect(mockData).to.have.lengthOf(3);
                    chai.expect(ev.title).to.equal('new');
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });


    describe('Testing Update Event', function () {
        it('should  change item  events ', function (done) {
            const request = {
                body: {
                    title: 'changed title',
                    description: 'changed description',
                    location: 'changed location',
                    likes: 3,
                    id: 1
                }
            }
            repo.updateEvent(request.body, mockData).then(
                () => {
                    chai.expect(mockData[0].title).to.equal('changed title');
                    chai.expect(mockData[0].description).to.equal('changed description');
                    chai.expect(mockData[0].location).to.equal('changed location');
                    chai.expect(mockData[0].likes).to.equal(3);
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });


    describe('Testing Delete Event', function () {
        beforeEach(function () {
            mockData = db();
        });
        it('should  remove item from events ', function (done) {
            const request = {
                params: {
                    id: 1
                }
            }
            repo.deleteEvent(request.params.id, mockData).then(
                () => {
                    chai.expect(mockData).to.have.lengthOf(1);
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });

    describe('Testing Un-Like Event', function () {
        it('should decrement likes for event ', function (done) {
            repo.removeLike(1, mockData).then(
                () => {
                    chai.expect(mockData[0].likes).to.equal(0);
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });


    describe('Testing Like Event', function () {
        it('should increment likes for event ', function (done) {
            repo.addLike(1, mockData).then(
                () => {
                    chai.expect(mockData[0].likes).to.equal(1);
                    return done();
                }
            ).catch(() => { console.log("Promise rejected") });
        });
    });


});
