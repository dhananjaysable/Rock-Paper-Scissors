const gameContainer = document.querySelector(".container")

const userResult = document.querySelector(".user_result img")

const aiResult = document.querySelector('.ai_result img')

const result = document.querySelector('.result')

const optionImages = document.querySelectorAll('.option_image');


optionImages.forEach((img, i) => {
    img.addEventListener('click', (e) => {
        img.classList.add('active')

        userResult.src = aiResult.src = 'rock.png';

        result.textContent = "Wait.."

        optionImages.forEach((image2, index2) => {
            i !== index2 && image2.classList.remove('active')
        })

        gameContainer.classList.add('start')
        let time = setTimeout(() => {
            gameContainer.classList.remove('start')
            let imgSrc = e.target.querySelector('img').src;
            userResult.src = imgSrc;

            let randomNumber = Math.floor(Math.random() * 3);


            let aiImages = ['rock.png', 'paper.png', 'scissors.png'];

            aiResult.src = aiImages[randomNumber]

            let aiValue = ["R", "P", "S"][randomNumber]
            let userValue = ["R", "P", "S"][i];

            let outcomes = {
                RR: 'Draw',
                RP: 'Ai',
                RS: 'You',
                PP: 'Draw',
                PR: 'You',
                PS: 'Ai',
                SS: 'Draw',
                SR: 'Ai',
                SP: 'You',
            };

            let outComeValue = outcomes[userValue + aiValue]
            result.textContent = userValue === aiValue ? "Match Draw!" : `${outComeValue} Won!`
        }, 2500);
    })
})