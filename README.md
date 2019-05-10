# streamviewer

## Initial 

Frameworks:
    Front-end - React.js
    Backend- Node.js , (Firebase, Postgres)

## Structure - Bare Minimum
Navigation Bar:
    Google Sign in button
    Using Google Sign-In Api to allow users to sign in using google account
    Add a home page button
    is this needed?
    
Homepage: 
    Requires Popular Streams based off of YTLive Api
    Ability to click on said Stream
    Requires a list of popular streams

Streamer page:
    Requires Chatroom
    Chatroom needs to persist in past and present messages
    Holding all messages in Database - (FireBase or Postgres)
    Able to send message

## Documentation 

    Youtube Live - https://developers.google.com/youtube/v3/live/getting-started

    Google Sign-In - https://developers.google.com/identity/sign-in/web/sign-in

    Firebase - https://firebase.google.com/docs

## Design

    Application start
    Home page loads
    User able to see popular streams listed on front page.
    Ability to click on specific streams and refreshes page to Stream page.
    Stream page has a chat room that has been populated with past messages - (Persistance)
    Restrict messaging if not signed in.
    Google Sign in on top right at all times / or user image
    After sign in with google account the ability to message opens for the viewer. 
    Ability to message 
        Message is sent to database.
    
## Database Structure
    
    User table
    Page table
    Messages Table.


