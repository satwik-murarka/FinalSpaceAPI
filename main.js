const characterContainer = document.getElementById("characters")

const characterNumbers= 40;


const getCharacter = async () => {
    for(let i=1;i<=characterNumbers;i++){
            await characterData(i);
        
    }
}

const characterData= async id => {


    const url=`https://finalspaceapi.com/api/v0/character/${id}`;

    const res= await fetch(url);
    const data=await res.json();
    createCharacterCard(data);
    
}

const createCharacterCard = (data) => {
    const charCard=document.createElement('div');
    charCard.classList.add("character");
    const {name,status,species,img_url}=data;
    const charInnerHTML=`<div class="img-container"><img src="${img_url}" alt="${name}"/>
    </div><div class="text"><h3>${name}</h3><p>${species}</p>${status}<p></p></div>`
    ;
    charCard.innerHTML=charInnerHTML;
    characterContainer.appendChild(charCard);
    console.log(data.name);


}

getCharacter();