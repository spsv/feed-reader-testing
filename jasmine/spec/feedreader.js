/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        //validate if url is defined and is not empty inside allFeeds
        //Replaced toBeDefined() and not.toBe(0) for toBeTruthy()
        it('have the {url}s defined and they are not empty', function(){
            allFeeds.forEach(function(feeds){
                expect(feeds.url).toBeTruthy();
            });
        });

        //the same concept but applied to name
        it('have the {name}s defined and they are not empty', function () {
            allFeeds.forEach(function (feeds) {
                expect(feeds.name).toBeTruthy();
            });
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

        //true when body has the class menu-hidden 
        it('element is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        //when the menu icon is clicked validate if body does not contain the class menu-hidden  
        it('changes visibility when it is clicked', function(){
                var menu = $('.menu-icon-link');
                menu.click();
                expect($('body').hasClass('menu-hidden')).toBeFalsy();
                menu.click();
                expect($('body').hasClass('menu-hidden')).toBeTruthy();                        
        //For me this second expectation is redundant             
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function (done) {
            loadFeed(0, done);
        });
        //validate if the feed entry is not empty
        it('LoadFeed has at least a single .entry element',function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){
        
        var firstfeeds;
        var secondfeeds;
        //load first feed
        beforeEach(function (done) {
            loadFeed(0, function(){
                firstfeeds = $('.feed').html();
                done();
            }); 
        });
        
        //load the second feed and compare it
        it('changes',function(done){
            loadFeed(1, function(){
                secondfeeds=$('.feed').html();
                expect(secondfeeds).not.toMatch(firstfeeds);
                done();
            });
        });
    });
   
}());
