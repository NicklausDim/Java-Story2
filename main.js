let username = prompt ('Welcome to this adventure. How should I call you?');

alert('Welcome ' + username + '! Hope you are ready for a bumpy ride!');

alert('It all started when prince Vitalij asked your help decorating the castle for his birthday party');

alert('You and your kitty companion Cake were responsible for the balloons. Until the Ice Queen interrupted you and tried to kidnap the prince!');

alert('You managed to hide into the closet in fear but now there is a decision to make.');

alert ('Will you try to save the prince or stay hidden in the closet?');

function question2investigate(){
    alert('You decided to investigate. You find a giant trapped under a rock desperately asking for help!')
    alert('Despite your best efforts there is nothing you can do to help him. You try to console him, but he grabs you with his big hands and eats you without hesitation');
    alert('You just became giant lunch! Sorry!');
}

function question3small(){
    alert('As you move closer to the door something doesnt feel right. Still, you try to open the door with shaking hands');
    alert('You open quietly the door only to realise it was a terrible idea.');
    alert('Turns out you found where the Ice Queen keeps the hounds. 3 headed dogs start to chase you and before long they start chewing you');
    alert('Sorry, you just became dog food...');
}

function question4talk(){
    alert('You start talking to the queen about the prince but she doesn\'t seem to care much.');
    alert('You suddenly feel she is getting bored with your stories and you start begging her to release the prince.');
    alert('She then takes off her magic wand and poof.');
    alert('You are immediately transformed into a pig. You Spend the rest of your days covered in poop, eating rotten vegetables.');
}

function question7tell(){
    alert('You look the prince in the eyes and tell him the truth. You ve been in love with him for years...');
    alert('He then grabs you and kisses you with the passion of a thousand teenagers, kissing for the first time...');
    alert('You decide to run off together, dump the princess and live happily ever after somewhere where no one knows you...');
    alert('You ended up adopting 4 dogs and 3 rabbits');
    alert('The End!');
}

function question7no(){
    alert('You decide to tell nothing. The prince looks at you with gratitude.');
    alert('Suddenly he grabs you and kisses you with the passion of a thousand teenagers, kissing for the first time...');
    alert('You decide to run off together, dump the princess and live happily ever after somewhere where no one knows you...');
    alert('You ended up adopting 4 dogs and 3 rabbits');
    alert('The End!');
}


function question6correct(){
    alert('Congrats, you found the password!!!')
    alert('The door opens and inside the big cold room you find the prince, restrained to a chair. You immediately release him and you re trying to comfort him.');
    alert('As you look prince Vitalij in the eyes, you realise what you always knew. The reason that you wanted to save him is because you are deeply in love with him. Are you going to tell him though or let him return to the princess?');

    let question7 = prompt ('tell or no?');
    if (question7 =='tell'){
        question7tell();
    } else {
        question7no();
    } 

}

function question5left(){
    alert('You chose the left one. You start noticing the door and notice a keypad with numbers on it. Is that it? Is the prince in there?');
    alert('You notice right away that the password is compiled by 5 digits. You vaguely remember an article you read on the Ice Queen years ago...');
    alert('Apparently she was born in 1988. Somewhere in december to be exact. Could this be a clue?');
    
    let question6 = prompt('What is the password? (5 digits,no symbols, numbers only)');
    if (question6 == '81288') {
        question6correct();
    } else {
        alert('That was not correct. Please try again');
        let question6 = prompt('What is the password? (5 digits,no symbols, numbers only)');

        if (question6 == '81288') {
            question6correct();
        } else {
            alert('Thats not the correct passowrd. But MIRICLE! You remembered the full date! She was born on the 8th of December of 1988!');
            let question6 = prompt('What is the password? (5 digits,no symbols, numbers only)');
            if (question6 == '81288') {
                question6correct();
            } else {
                alert('You dead. God smitted you because you cant find a date');
            }
        
        }
    }
}

function question8red() {
    alert('You chose the red tiles.... Half way through the room, you feel everything vibrating....');
    alert('Suddenly the floor collapses and as you try to hold on on a ledge, you take a peak on whats underneath you...');
    alert('You notice huge alligators, feeling happy and hungry to see you. Before long, you can no longer hold on....');
    alert('You are now alligator food. Sorry...')
}

function question8black() {
    alert('You chose the black tiles.... Half way through you feel something moving...');
    alert('Out of the blue , you feel a current of air ! What is happening...?')
    alert('Huge stone masks start descending from the ceiling. You start to feel this is not gonna end well, as their weird looking faces start staring at you...');
    alert('You decide to go closer and take a good look...');
    alert('Oh no. Havent you seen Indiana Jones? Arrows start coming out of the mouths of the mask....You try to dodge them but its virtually impossible...');
    alert('You miss your balance and end up on the floor...You resemble a Voodoo doll, after the worst ritual...');
    alert('You died....sorry....');
}


function question5right(){
    alert('As you walk down the corridor, you notice a distinct pattern on the tiles on the floor.');
    alert('Half the tiles are red and half the tiles are black. On which ones will you choose to walk? ')

    let question8 = prompt ('black or red?');
    if (question8 =='red'){
        question8red();
    } else {
        question8black();
    } 
}




function question4run(){
    alert('You start running towards the queen, but you ve always been clumsy.');
    alert('You manage to trip on the carpet and knock the ice queen down.');
    alert('In a desperate effort to smite you, the Queen moves her wand and you can hear a distinct ZAP coming off her wand');
    alert('She misses. Pfew. You are now both watch with horror the ZAP bouncing in the ice frozen surfaces until it finally reaches a target...');
    alert('The Queen hits the ground and turns into ash');
    alert('It turns out she was indeed wearing implants. The rumors were true!');
    alert('With the evil Queen gone, you finally start to relax a bit. But not everything is over? Where is the prince?')
    alert('In front of you lies a hallway with 2 doors. One on the left, and one on the right? Which one will you choose?')

    let question5 = prompt ('left or right?');
    if (question5 =='left'){
        question5left();
    } else {
        question5right();
    } 
}

function question3big(){
    alert('You carefully open the big black door and find your self in a cold white room.');
    alert('Ice is covering everything. Suddenly Frozen comes to your mind and you start singing.');
    alert('LET IT GOOOOO....LET IT GOOOO....CANT HOLD IT BACK ANYMOREEEEEE');
    alert('LET IT GOOOO...LET IT GOOOO....THE COLD NEVER BOTHERED ME ANYWAYYYYY...');
    alert('Suddenly you realise the ice queen staring at you from the top of her frozen staircase. She does not look happy...');
    alert('Are you going to talk to her or run?')

    let question4 = prompt ('talk or run?');
    if (question4 =='talk'){
        question4talk();
    } else {
        question4run();
    }
}

function question2ignore() {
    alert('You decide to move on with your trip and ignore the voice. That was probably a wise choice. You are scared of dark places anyway');
    alert('You continue walking into the woods. Suddently you realise the birds stopped singing and there is a cold breeze giving you chills');
    alert('In front of you lies the lair of the evil ice Queen. Sweat starts running down your neck');
    alert('As you move closer you start to notice a big black door and a small backdoor. Which one will you take?');

    let question3 = prompt ('big or small?');
    if (question3=='big'){
        question3big();
    }   else {
        question3small();
    }

}

function question1help() {
    alert('You decide to pop off the closet only to see the evil queen disappear.');
    alert('Trying to figure out what to do next, you suddenly notice a trail of ice leading into the woods');
    alert('You start following the trail into the deep woods until you suddenly stumble upon the opening of a cave');
    alert('Inside, there is someone asking for help in a deep but sad voice');

    let question2 = prompt ('investigate or ignore?');
    
    if (question2=='investigate'){
        question2investigate();
    }   else {
        question2ignore();
    }
}

function question1hide() {
    alert('You stayed in the closet till everyone left. After a while you got off the closet and continued the decorations. But no one showed up for the party...');
}


let question1 = prompt ('help or hide ?');
    if (question1 =='help') {
        question1help();
    } else {
        question1hide();
    }
