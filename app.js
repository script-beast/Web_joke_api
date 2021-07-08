function decider(id)
{
    if (id === '1')
        fthjks('Programming' , id)
    if (id === '2')
        fthjks('Miscellaneous' , id)
    if (id === '3')
        fthjks('Dark' , id)
    if (id === '4')
        fthjks('Pun' , id)
    if (id === '5')
        fthjks('Spooky' , id)
    if (id === '6')
        fthjks('Christmas' , id)
}

function domhandle(dta ,id)
{
    const nds = document.getElementById(id).childNodes[3].childNodes[1].childNodes[1].childNodes[0]
    const card = document.getElementById(id)
    nds.textContent = dta
    card.classList.remove("is-loading")
    card.classList.add('is-flipped')
}

const fthjks = async (conf ,id) =>
{
    try 
    {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${conf}?type=single`)
        const data = await response.json()
        domhandle(data.joke , id)
    } 
    catch (err) 
    {
        const card = document.getElementById(id)
        alert("Some Error, Please Try Again")
        card.classList.remove("is-loading")
    }

}


const cardal = document.querySelectorAll(".card__inner");
for (let card of cardal)
{
    card.addEventListener("click", function (e) 
    {
        if (!card.classList.contains('is-flipped'))
        {
            card.classList.add("is-loading")
            decider(this.id)
        }
        else
        {
            card.classList.remove('is-flipped')
        }
    })
}
