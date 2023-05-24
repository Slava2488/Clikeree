window.onload = () => {

    let boostAddClick1 = {
        value: 1,
        price: 15
    };

    let boostAddClick5 = {
        value: 5,
        price: 100
    };
    let count = 0;
    let appendCount = 1;

    let textCount = document.querySelector("#count");
    let textDie = document.querySelector("#text2");
    let textLvl = document.querySelector("#text3");
    let cardImg = document.querySelector(".card");

    let btnAppendClick1 = document.querySelector("#button");
    let btnAppendClick5 = document.querySelector("#button2");
    let btnNewGame = document.querySelector("#button3");


    const UpdateLvl = (_count) =>{
        let textLvl = null
        if(_count > 0 &&_count <= 999)
        {
            textLvl = "Уровень начальный"
        }
        else if(_count > 1000 && _count <=3999)
        {
            textLvl = "Уровень сложный"
        }
        else if(_count > 5000)
        {
            textLvl ="Уровень продвинутый"
        }
        UpdateUI(text3, textLvl)
    }

    const UpdateUI = (element, text) =>{
        element.innerText = text
    };

    const AddBoost = ( boost ) =>{
        if(boost.btnBoost.price <= count)
        {
            appendCount = appendCount + boost.btnBoost.value;
            count -= boost.btnBoost.price;
            boost.btnBoost.price *= 2
            UpdateUI(textCount, `Заработано: ${count}$`)
            UpdateUI(boost.element, `${boost.text} | ${boost.btnBoost.price}$`)
            UpdateUI(textDie, `Текущий урон: ${appendCount}`)
        }
        else
        {
            console.log("Не хватает денег")
        }
        UpdateLvl(count)
    };

    cardImg.addEventListener('click', ()=>{
        count += appendCount;
        UpdateUI(textCount, `Заработано: ${count}$`);
        UpdateLvl(count);
    });


    btnAppendClick1.addEventListener('click', ()=>{
        let boostClick = {
            btnBoost: boostAddClick1,
            element: btnAppendClick1,
            text: `+1 доп.клик`
        };
        AddBoost(boostClick);
    });


    btnAppendClick5.addEventListener('click', ()=>{
        let boostClick = {
            btnBoost: boostAddClick5,
            element: btnAppendClick5,
            text: `+5 доп.клик`
        };
        AddBoost(boostClick);
    });

    btnNewGame.addEventListener('click', ()=>{
        if(count >= 5000)
        {
            boostAddClick1 = {
                value: 1,
                price: 15
            }

            boostAddClick5 = {
                value: 5,
                price: 100
            }

            count = 0;
            appendCount = 1;
            UpdateUI(textCount, `Заработано: 0$`)
            UpdateUI(textDie, `Текущий урон: 0`)
            UpdateUI(textLvl, `Уровень начальный`)
            UpdateUI(btnAppendClick1, `+1 доп/клик|15$`)
            UpdateUI(btnAppendClick5, `+5 доп/клик|100$`)
        }
    });
}
