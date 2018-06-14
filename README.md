# SocketIO Chat Example
This repository contains code for creating a simple browser chat.

<p align="center">
  <img src="https://github.com/RicardsGraudins/SocketIO-Chat-Example/blob/master/static/images/chat.gif">
</p>

## SocketIO Example
<p align="center">
  <img src="https://github.com/RicardsGraudins/SocketIO-Chat-Example/blob/master/static/images/chat.png">
</p>

## Feasible Features
The following list contains a number of features that can be implemented fairly easily, experiment at your own discretion.
1. Profanity Filter: can simply add a series of words to a collection, before the message is sent check if it contains any of the words from the collection and either prevent the message from being sent or filter it with random characters.
2. Emojis: add custom emojis to the chat - create a small window where the user can select an emoji to input and/or have certain strings automatically display emojis. :grin:
3. Interactable Links: make URLs clickable and easier to identify by prehaps changing the font color to green, on click open the link in a new tab. 
4. Chat Rooms: have multiple rooms for users - take advantage of the [Flask-SocketIO](http://flask-socketio.readthedocs.io/en/latest/) room features.
5. Blocking Users: allow users to block other users, any message sent by the blocked user will not be displayed to the individual that blocked that particular user.
6. Chat Mod: in essence a chat moderator should be able to moderate the chat by having the ability to timeout a user for a period of time, permanently ban a user and so on.
7. Private Messaging: enable users to send private messages to other users e.g. adding the @ symbol before a username should only send that message to that particular user.
8. Personalization: enable users to create their own profiles with their own usernames, images and prehaps a short "about me" section.
9. File sharing: enable users to send files to other users.
10. Font: allow users to customize the font size and style to make it easier to see the messages.
11. Spam Filter: implement a spam filter that prehaps timeouts a user if multiple messages are sent in rapid succession or if it's the same message.
12. Chat Commands: have various chat commands that can be invoked by users e.g. **!Users** could display the number of users in the chat or **!Report XYZ** in order to report a particular user that may be up to no good.

## How to run:
1. CD into path/to/SocketIO-Chat-Example-master
2. Type ```python runme.py```
3. Navigate to **127.0.0.1:5000** to fake chat with Cortana.
4. Navigate to **127.0.0.1:5000/local** for the SocketIO example.

**N.B** The following Prerequisites must be installed:
1. [Python](https://www.python.org/)
2. [Flask](http://flask.pocoo.org/)
3. [Flask-SocketIO](http://flask-socketio.readthedocs.io/en/latest/)

## References
* [Rick Astley](https://en.wikipedia.org/wiki/Rick_Astley)
* [SocketIO](https://socket.io/)
