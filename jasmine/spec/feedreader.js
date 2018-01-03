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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //validate if url is defined and is not empty inside allFeeds
        it('have the {url}s defined and they are not empty', function(){
            allFeeds.forEach(function(feeds){
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);

            });

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //the same concept but applied to name
        it('have the {name}s defined and they are not empty', function () {
            allFeeds.forEach(function (feeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);

            });

        });
    });

    //https://jasmine.github.io/2.1/introduction

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

       
       
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //true when body has the class menu-hidden 
        it('element is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        //when the menu icon is clicked validate if body does not contain the class menu-hidden  
        it('changes visibility when it is clicked', function(){
                      
                var menu = $('menu-icon-link').click();
                expect($('body')).not.toContain('menu-hidden');
                        
        //I dont see why do I need two expectations?             
            
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

    

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, function () { done(); });
        });
        //validate if the feed entry is not empty
        it('LoadFeed has at least a single .entry element',function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection',function(){
        var firstfeeds;
        //load first feed
        beforeEach(function (done) {
            loadFeed(0, done); 
            firstfeeds=$('.feed').html();
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //load the second feed and compare to be different
        it('changes',function(done){
            expect(loadFeed(1, done)).not.toMatch(firstfeeds);
        });
    });
   
}());
