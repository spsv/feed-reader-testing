# Feed Reader Testing 

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This project uses [Jasmine](http://jasmine.github.io/) for that purpose.

# Project Details

1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a test suite named `"Initial Entries"`.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.
9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

# How can I run the app?

Download the zip file from [here](https://github.com/spsv/feed-reader-testing/archive/master.zip). Unzipped it and load the file index.html in any browser


## What will you learn?

You will learn how to use Jasmine library and how to write a number of tests against a pre-existing application (app.js). These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


