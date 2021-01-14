## Backend engine for Notebot 2021

<p align="center"><img src="./logo-v1.png" width="256px"></img></p>

### About:

This is a messenger chatbot made for <a href="https://www.butex.edu.bd/">BUTEX(Bangladesh University of Textiles)</a> to deliver study materials 24x7

Moreover, this bot has casual talking abilities and other functionalities  

### Used Technolgies -

1. Javascipt 
2. NodeJS(express)
3. Messenger Platform

### How is it made ?

1. The bot structure was based on the official documentation provided on facebook messenger platform. <a href="https://developers.facebook.com/docs/messenger-platform/getting-started/">Official Documentation</a>

2. The ``chatbotController.js`` located in ``src/controllers/`` is the heart of this bot. this file alone handles all the messages and replies accordingly 

3. Keywords are located in the ``src/controllers/keywords``

4. Flows are located in the ``src/controllers/flows``

5. The bot matches **keywords** and sends specific **flows**

### Internal Tools - 
**1. Word Detection:** I've made two function to match keyword - 
    
    1. wordIncludes(arrayToMatch, received_message) : finds just match

    2. wordIs(arrayToMatch, received_message) : finds exact match

**2. Randomizer :** ``` randomPicker(arrayToRandomize) ```

**3. Magic Function 😂 :** ``` magicFunc(sender_psid, flowToSend) ``` This function was a technical breakthrough 

**4. Block genrators:** Facebook's graphql has specific format to send objects, you can't make error here, the text messages, images, buttons etc whatever the bot sends is an object, so I made generators to genarate block of objects for texts, image, button etc. Few examples - 

        1. textBlockGen("Pass texts here")

        2. imgBlockGen("Image URL")

        3. groupedBtnBlockGen(headerText, BtnObjArr)

                - Web URL Buttons: webBtnBlockGen(title, url)
                - Flow Buttons: webBtnBlockGen(title, payload)



### Wanna contribute?

Feel free to clone this repo for your own projects or contribute to this project 😃

### Contact me at: <a href="mailto:afsintripto@gmail.com">AfsinTripto@gmail.com</a>

### Thanks for your interest ❤
