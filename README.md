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

## Youtube api

    Pulling current top streamer in the gaming section from youtube.
    
## Google Log-in

    Google React login.
    Require:
        Username - Used to display who's message is being shown
        Icon - For asthetic purposes
    
## Fire base Api

    Going to establish a collection for the current youtube channel that is shown.
    If Collection does not exist it will make a new table and start filling up messages.

##Design Proecess

    Setting up Api:
     Youtube:
        At the beginning was using the wrong api for getting live streams as YT had livestream api and search Api
        The instructions were not clear if I was supposed to grab a specific stream and if I was only to show a specific stream then I would not need the api so I have allowed the Application to grab current most viewed stream on Youtube Live.
        Decided to show current stream name and description as well. 
        Used Express and Node with the help of axios to send full get request to YT Api in the back-end
        Front-end Client I was able to connect to the back end with fetch request.

      Google:
        Google Sign-in was created with React npm install
        Grab certain data from the response back and keep that data in the database for each message
        This allows for the chatroom to display image of users as well as their name per message

      Firebase:
        Firebase Api used as a back end database 
        It currently stores 3 essential data and that is the Room's video id as a unique id as well as the user info and messege sent.
        instead of a set time out to refetch data due to a chat room based application. Employed the use of firebase on to grab data as the database for that room changes.

    Navigation:
        For the Navigation bar there is 3 elements. 
             The page element indicated as home currently is just for show as there was not another page that the app currently needs to travel too.
             The Name 
             and the google Log in button
             Was not sure if I needed to show who is currently loged in, but aestheticlly it is a must so when I grabbed data from google api and stored it in the application I displayed current user as well as change the google button to logout option
    Video: 
        Youtube video was made to adjust to the size of the page
        Was deciding to implement the ability to see the top 5 streamers and allow to switch between their chatrooms, but currently required to show the top streamer currently.
        Had problems with it showing only US as it seems that many people are considered US even if they are streaming out of country.
        Decided to show Name of stream and description like a usual stream would
        Might add in a link to the actual stream under the Stream name.
    
    Chatroom:
        Decided to use firebase as the baseline structure of the chatroom
        Wanted the ability to show who  was the one that sent a message.
        You are also not allowed to chat if not logged in and at the beginning a alert that informs user to log in before chatting.
        Currently changed to proc google sign-in allowing for the user to sign in if they decide to chat before signing in
    
    Backend :
        Used Node.js as well as Express
        Currently I these 2 frameworks range from intermmediate skill on my end and would have to explore more in the process.
        Had to add a framework that allows for the use of .env files as the env for heroku is used for config and apis.
        Needed to apply this to the web pack for it to bundle these Apis from the env to global variable allowing for the quick use of env calls.

##Api Experience

    Google Sign-in - (New) : First time using this api.
    Youtube - (Used) : Was using the wrong one but have use the YT search api once before
    Firebase - (New) : First time using firebase as my main database of choice was Postgresql and mongoDB



        


