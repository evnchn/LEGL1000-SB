# LEGL1000 StarBurst
First in series "Project StarBurst". Question database and **Autofill** script for LEGL1000. 

This project should extend your life by around half an hour or more.
We love evn God!

![StarBurst](https://media.tenor.com/U_Qt6y6AFAYAAAAC/stream-syrex.gif)


## Usage for end-users - Auto fill the quiz
1. install TamperMonkey at you chrome [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Click the plugin icon, and click create new script
3. Copy all content from [fill.user.js](https://github.com/ShiratsuYudachi/LEGL1000-SB/blob/master/fill.uset.js) and paste it to tampermonkey, ctrl-S to save
4. open canvas and take the quiz, you should see a Start Autofill button

## Usage for end-users - get questions and fill manually
1. Open CSV (`M1.csv`/`M2.csv`/`M3.csv`) for the module in Microsoft Excel (or your favourite text editor). 
2. Search for the question (commas are ignored in the question or answer). 
3. The answer is on the same row. 
4. There may be multiple matches. If the answer isn't in any four of the choices, look at the next match. 

## Usage for question scraping
1. Take quiz. 
2. Submit quiz immediately (leave all empty is OK). 
3. Run `StarBurst.console.js` in console. 
4. Repeat steps 1-3 multiple times until the number of questions the console prints settles to a constant. 
5. Clipboard have the CSV string. Paste to CSV file. 
