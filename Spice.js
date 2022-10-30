let Optgroup2
let counter=0
let Optgroup3
let li=[]
let counter2=[]
let text
let test=[5,4,1]
let option
let ph
let ph2
let only=1
let Optgroup1
let singular
let hideothers
let aboutwhat=document.getElementsByClassName('aboutwhat')[0]


let Apple=['Lavender','Rosemary','Allspice','Cinnamon','Cloves','Nutmeg','Ginger','Coriander','Thyme',
'Cardamom','Cumin']
let Orange=['Cardamom','Basil','Cinnamon',"Cilantro",'Cloves','Lavender','Cumin','Mint','Nutmeg',
'Ginger','Nutmeg','Parsley','Paprika','Rosemary','Thyme','Saffron']
let Peach=['Basil','Tarragon', 'Bay Leaves','Allspice','Cinnamon','Lavender','Cloves',
'Mint','Thyme','Nutmeg','Saffron']
let Pear=['Basil','Allspice','Sage','Cardamom','Cinnamon','Parsley','Nutmeg','Thyme','Ginger','Mint','Rosemary',
'Cloves']
let Plum=['Bay Leaves','Lavender','Mint','Thyme','Allspice','Cardamom','Cinnamon','Cloves','Coriander','Ginger','Nutmeg']
let Melon=['Basil','Cardamom','Coriander','Ginger','Cilantro','Cumin','Mint']
let Watermelon=['Basil','Cilantro','Mint']
let Pineapple=['Basil','Black Pepper','Cilantro','Coriander','Mint','Rosemary','Allspice','Cardamom','Cinnamon','Cloves','Ginger','Saffron']
let Mango=['Cardamom','Cinnamon','Cayenne','Cumin','Ginger','Nutmeg','Basil','Cilantro','Coriander','Mint']
let Papaya=['Cilantro','Cinnamon','Ginger','Mint']
let Grape=['Cayenne','Cumin','Ginger','Mint','Paprika','Rosemary']
let Banana=['Allspice','Cardamom','Cinnamon','Cloves','Ginger','Nutmeg']
let Fig=['Cinnamon','Cardamom','Rosemary','Thyme','Allspice','Cloves','Nutmeg','Black Pepper']
let Apricot=['Cardamom','Cayenne','Cinnamon','Coriander','Ginger','Nutmeg','Rosemary','Saffron']
//veggies
let Asparagus=['Ginger','Dill','Mint','Tarragon']
let BellPepper=['Parsley','Garlic','Cilantro','Basil','Thyme','Turmeric','Oregano']
let Broccoli=['Dill','Garlic','Coriander','Ginger','Chili']
let BrusselSprout=['Garlic','Cayenne','Cinnamon','Smoked Paprika','Chili']
let Cabbage=['Garlic','Smoked Paprika','Cayenne','Dill','Tarragon']
let Carrot=['Dill','Tarragon','Cumin','Ginger','Garlic','Rosemary','Parsley','Cinnamon','Nutmeg','Turmeric','Cilantro','Mint']
let Celery=['Thyme','Parsley','Oregano','Basil','Chives']
let Corn=['Dill','Parsley','Mint','Cilantro','Cinnamon','Chili','Chives','Tarragon','Basil','Cumin']
let Cucumber=['Dill','Parsley','Oregano','Basil','Cilantro','Mint','Cayenne','Chives']
let Eggplant=['Thyme','Oregano','Basil','Garlic','Cilantro']
let GreenBean=['Oregano','Parsley','Dill','Basil','Thyme','Garlic','Chives']
let Mushroom=['Garlic','Thyme','Rosemary','Parsley','Basil','Dill','Oregano']
let Onion=['Thyme','Rosemary','Parsley','Cumin','Basil','Turmeric','Chili','Cilantro']
let Pea=['Mint','Garlic','Dill','Ginger','Parsley','Basil']
let Potato=['Chives','Rosemary','Garlic','Sage','Thyme','Dill']
let Squash=['Ginger','Cinnamon','Vanilla','Sage','Nutmeg','Allspice']
let Tomato=['Basil','Oregano','Parsley','Thyme','Chili','Garlic','Chives','Cayenne']
//meal
let Pasta=['Paprika','Garlic','Oregano','Paprika','Cayenne','Basil','Chili','Parsley','Thyme','Rosemary','Sage']
let SoupStew=['Coriander','Cinnamon','Mint','Cloves','Cayenne','Smoked Paprika','Allspice','Garlic']
let Salad=['Dill','Garlic','Ginger','Cilantro','Mint','Chili','Tarragon','Cumin']
let Rice=['Turmeric','Cumin','Nutmeg','Rosemary','Thyme','Cardamom','Saffron']
let Dessert=['Cinnamon','Nutmeg','Ginger','Cardamom','Cloves'] 
let Egg=['Dill','Basil','Tarragon','Chili','Black Pepper','Cumin','Thyme','Parsley']
//meats
let Beef=['Bay Leaves','Parsley','Cayenne','Rosemary','Chili','Thyme','Dill','Ginger','Paprika','Oregano']
let Pork=['Allspice','Basil','Cardamom','Cloves','Ginger','Smoked Paprika','Oregano','Parsley','Rosemary','Thyme','Sage']
let Poultry=['Turmeric','Dill','Ginger','Allspice','Black pepper','Thyme','Smoked Paprika','Nutmeg','Oregano','Chili','Cayenne','Bay Leaves']
let Fish=['Allspice','Cinnamon','Mint','Ginger','Cloves','Nutmeg','Black Pepper']
//flavors
let Fresh=['Fresh','Dill','Mint','Bay Leaves','Tarragon','Parsley','Cilantro','Basil','Chive']
let Herbal=['Herbal','Thyme','Dill','Mint','Oregano','Bay Leaves','Tarragon','Basil']
let Sweet=['Sweet','Ginger','Paprika','Cinnamon','Chive','Saffron','Smoked Paprika','Tarragon','Allspice','Cardamom',
'Lavender','Cloves','Nutmeg','Basil']
let Spicy=['Spicy','Chili','Ginger','Black Pepper','Coriander','Cardamom','Garlic','Cumin','Cloves','Cayenne']
let Savory=['Savory','Black Pepper','Chive','Saffron','Smoked Paprika','Bay Leaves','Oregano','Chili','Coriander','Parsley',
'Rosemary','Garlic','Cumin']
let Aromatic=['Aromatic','Ginger','Cinnamon','Thyme','Sage','Mint','Oregano','Bay Leaves','Rosemary','Garlic','Lavender','Basil','Saffron']
//cumulatives
let meat={
    meat:'meat',
 Beef:['Bay Leaves','Parsley','Cayenne','Rosemary','Chili','Thyme','Dill','Ginger','Paprika','Oregano'],
 Pork:['Allspice','Basil','Cardamom','Cloves','Ginger','Smoked Paprika','Oregano','Parsley','Rosemary','Thyme','Sage'],
 Poultry:['Turmeric','Dill','Ginger','Allspice','Black pepper','Thyme','Smoked Paprika','Nutmeg','Oregano','Chili','Cayenne','Bay Leaves'],
 Fish:['Allspice','Cinnamon','Mint','Ginger','Cloves','Nutmeg','Black Pepper'],
}
 

let fruit={
    fruit:'fruit',
Apple:['Lavender','Rosemary','Allspice','Cinnamon','Cloves','Nutmeg','Ginger','Coriander','Thyme',
'Cardamom','Cumin'],
 Orange:['Cardamom','Basil','Cinnamon',"Cilantro",'Cloves','Lavender','Cumin','Mint','Nutmeg',
'Ginger','Nutmeg','Parsley','Paprika','Rosemary','Thyme','Saffron'],
Peach:['Basil','Tarragon', 'Bay Leaves','Allspice','Cinnamon','Lavender','Cloves',
'Mint','Thyme','Nutmeg','Saffron'],
Pear:['Basil','Allspice','Sage','Cardamom','Cinnamon','Parsley','Nutmeg','Thyme','Ginger','Mint','Rosemary',
'Cloves'],
Plum:['Bay Leaves','Lavender','Mint','Thyme','Allspice','Cardamom','Cinnamon','Cloves','Coriander','Ginger','Nutmeg'],
Melon:['Basil','Cardamom','Coriander','Ginger','Cilantro','Cumin','Mint'],
Watermelon:['Basil','Cilantro','Mint'],
 Pineapple:['Basil','Black Pepper','Cilantro','Coriander','Mint','Rosemary','Allspice','Cardamom','Cinnamon','Cloves','Ginger','Saffron'],
 Mango:['Cardamom','Cinnamon','Cayenne','Cumin','Ginger','Nutmeg','Basil','Cilantro','Coriander','Mint'],
Papaya:['Cilantro','Cinnamon','Ginger','Mint'],
 Grape:['Cayenne','Cumin','Ginger','Mint','Paprika','Rosemary'],
 Banana:['Allspice','Cardamom','Cinnamon','Cloves','Ginger','Nutmeg'],
 Fig:['Cinnamon','Cardamom','Rosemary','Thyme','Allspice','Cloves','Nutmeg','Black Pepper'],
 Apricot:['Cardamom','Cayenne','Cinnamon','Coriander','Ginger','Nutmeg','Rosemary','Saffron']
}
let meal={
    meal:'meal',
     Pasta:['Paprika','Garlic','Oregano','Paprika','Cayenne','Basil','Chili','Parsley','Thyme','Rosemary','Sage'],
 SoupStew:['Coriander','Cinnamon','Mint','Cloves','Cayenne','Smoked Paprika','Allspice','Garlic'],
 Salad:['Dill','Garlic','Ginger','Cilantro','Mint','Chili','Tarragon','Cumin'],
 Rice:['Turmeric','Cumin','Nutmeg','Rosemary','Thyme','Cardamom','Saffron'],
 Dessert:['Cinnamon','Nutmeg','Ginger','Cardamom','Cloves'] ,
 Egg:['Dill','Basil','Tarragon','Chili','Black Pepper','Cumin','Thyme','Parsley'],
}
let vegetable={
    vegetable:'vegetable',
     Asparagus:['Ginger','Dill','Mint','Tarragon'],
 BellPepper:['Parsley','Garlic','Cilantro','Basil','Thyme','Turmeric','Oregano'],
Broccoli:['Dill','Garlic','Coriander','Ginger','Chili'],
BrusselSprout:['Garlic','Cayenne','Cinnamon','Smoked Paprika','Chili'],
 Cabbage:['Garlic','Smoked Paprika','Cayenne','Dill','Tarragon'],
 Carrot:['Dill','Tarragon','Cumin','Ginger','Garlic','Rosemary','Parsley','Cinnamon','Nutmeg','Turmeric','Cilantro','Mint'],
 Celery:['Thyme','Parsley','Oregano','Basil','Chives'],
 Corn:['Dill','Parsley','Mint','Cilantro','Cinnamon','Chili','Chives','Tarragon','Basil','Cumin'],
 Cucumber:['Dill','Parsley','Oregano','Basil','Cilantro','Mint','Cayenne','Chives'],
 Eggplant:['Thyme','Oregano','Basil','Garlic','Cilantro'],
 GreenBean:['Oregano','Parsley','Dill','Basil','Thyme','Garlic','Chives'],
 Mushroom:['Garlic','Thyme','Rosemary','Parsley','Basil','Dill','Oregano'],
 Onion:['Thyme','Rosemary','Parsley','Cumin','Basil','Turmeric','Chili','Cilantro'],
 Pea:['Mint','Garlic','Dill','Ginger','Parsley','Basil'],
 Potato:['Chives','Rosemary','Garlic','Sage','Thyme','Dill'],
 Squash:['Ginger','Cinnamon','Vanilla','Sage','Nutmeg','Allspice'],
Tomato:['Basil','Oregano','Parsley','Thyme','Chili','Garlic','Chives','Cayenne'],
}

let fruitt=[Apple.concat(Apricot.concat(Orange)),Peach,Pear,Plum,Melon,Watermelon,Pineapple,Mango,Papaya,Grape,Banana,Fig]
let veggies=[Asparagus,BellPepper,Broccoli,BrusselSprout,Cabbage,Carrot,Celery,Corn,Cucumber,Eggplant,
GreenBean,Mushroom,Onion,Peach,Potato,Squash,Tomato]
//let meals=[Pasta,SoupStew,Salad,Rice,Dessert,Egg]
let meats=[Beef,Fish,Poultry,Pork]
let tastes=[Fresh,Herbal,Sweet,Spicy,Savory,Aromatic]
//let temp=meals.concat(meat.concat(veggies.concat(fruit)))
let taste={
    Fresh:['Fresh','Dill','Mint','Bay Leaves','Tarragon','Parsley','Cilantro','Basil','Chive'],
    Herbal:['Herbal','Thyme','Dill','Mint','Oregano','Bay Leaves','Tarragon','Basil'],
    Sweet:['Sweet','Ginger','Paprika','Cinnamon','Chive','Saffron','Smoked Paprika','Tarragon','Allspice','Cardamom',
'Lavender','Cloves','Nutmeg','Basil'],
Spicy:['Spicy','Chili','Ginger','Black Pepper','Coriander','Cardamom','Garlic','Cumin','Cloves','Cayenne'],
Savory:['Savory','Black Pepper','Chive','Saffron','Smoked Paprika','Bay Leaves','Oregano','Chili','Coriander','Parsley',
'Rosemary','Garlic','Cumin'],
Aromatic:['Aromatic','Ginger','Cinnamon','Thyme','Sage','Mint','Oregano','Bay Leaves','Rosemary','Garlic','Lavender','Basil','Saffron']
}

let label
let frag = document.createDocumentFragment();
    let final=[]
    
    let holder=false

let ul =document.createElement('ul')
let toggle=true
let xyz
let Spicymatch=[]
let Savorymatch=[]
let Sweetmatch=[]
let Aromaticmatch=[]
let Herbalmatch=[] 
let Freshmatch=[] 
function listofmatches(flavorname){
    
xyz=flavorname
// final=[]
f=taste[xyz]
for(i=0;i<final.length;i++){
if(f.includes(final[i])==true){
  
    if (f[0]=='Spicy'){
        
        Spicymatch.push(final[i])
        Spicymatch = [...new Set(Spicymatch)]
    }
    if (f[0]=='Herbal'){
       Herbalmatch.push(final[i])
       Herbalmatch = [...new Set(Herbalmatch)]
    }
    if (f[0]=='Savory'){
        Savorymatch.push(final[i])
        Savorymatch = [...new Set(Savorymatch)]
    }
    if (f[0]=='Aromatic'){
        Aromaticmatch.push(final[i])
       Aromaticmatch = [...new Set(Aromaticmatch)]
    }
    if (f[0]=='Sweet'){
        Sweetmatch.push(final[i])
         Sweetmatch = [...new Set(Sweetmatch)]
     //   console.log(Sweetmatch)
    }
    if (f[0]=='Fresh'){
        Freshmatch.push(final[i])
         Freshmatch = [...new Set(Freshmatch)]
       // console.log(Freshmatch)
    }


}

}

}
let z=true
function about(){
    if (z==true){
    console.log(aboutwhat)
    aboutwhat.style.visibility='visible'
    z=false
    } else{
        aboutwhat.style.visibility='collapse'
        z=true
    }
}
let fragg = document.createDocumentFragment();
function Appendlistmatch(element){
    
fragg.appendChild(CreateListCell(element))
console.log(fragg+fragg.parentElement)

}

function CreateListCell(element){
   
    let textt=document.createTextNode(element);
    
   
    const nam=document.createElement('li');
   
    nam.id=element;
    console.log(element+nam+textt)
//    let x=document.createElement('div')
   
    nam.appendChild(textt)
    
  
   
    return nam;
    
}
function onc(id){
    console.log(3);
   console.log(fragg)
    let x=document.createElement("ul");

    x.remove()
    for(let i=0;i<x.childNodes.length;i++){
    x.removeChild(fragg.childNodes[i])
    }
    x=document.createElement("ul");
    console.log(x.children)
    console.log(li)
    console.log(final)
    final=[]
    if(id=="Sweet"){
        Sweetmatch.forEach(Appendlistmatch);
        x.appendChild(fragg);
        document.querySelector("#"+id).appendChild(x)};
        if(id=="Spicy"){
            Spicymatch.forEach(Appendlistmatch);
            console.log(x)
            x.appendChild(fragg);
            console.log(x)
            console.log(fragg.children)
            document.querySelector("#"+id).appendChild(x)};
            if(id=="Aromatic"){
                Aromaticmatch.forEach(Appendlistmatch);
                console.log(x)
                x.appendChild(fragg);
                console.log(fragg)
                console.log(x)
                document.querySelector("#"+id).appendChild(x)};
                if(id=="Savory"){
                    Savorymatch.forEach(Appendlistmatch);
                    console.log(x)
                    x.appendChild(fragg);
                    console.log(fragg)
                    console.log(x)
                    document.querySelector("#"+id).appendChild(x)};
                    if(id=="Herbal"){
                        Herbalmatch.forEach(Appendlistmatch);
                        x.appendChild(fragg);
                        document.querySelector("#"+id).appendChild(x)};
                        if(id=="Fresh"){
                            Freshmatch.forEach(Appendlistmatch);
                            x.appendChild(fragg);
                            document.querySelector("#"+id).appendChild(x)};
                            
                            console.log(x)
                            console.log(x.innerHTML)
                            console.log(x.children.length)
                            
 }
function appendItemToFragment(element) {
    
    console.log(element)
  
    frag.appendChild(createGridCell(element))
   // console.log(frag+'hhhhh')
  }
  function createGridCell(element) {
    if(document.querySelector('#'+element)!=null){
        console.log(document.getElementById(element).innerHTML)
        document.getElementById(element).remove()
        //console.log(document.getElementById(element).innerHTML)
        
    }
     text=document.createTextNode(element)
    console.log(element+'wowzers what am I doing')
    const gridCell = document.createElement('div');
    const name = document.createElement('div1');
    console.log(element)
    gridCell.id = element;
    gridCell.style.textShadow='1px 1px 1px orange '
 gridCell.id
  //console.log(idholder)
  let trigger=0

 //gridCell.setAttribute('onclick','console.log(3)')
 gridCell.setAttribute('onclick','onc(id);this.onclick=null')

 name.appendChild(text)
   gridCell.appendChild(name);
  console.log(name)
 console.log(gridCell)

  return gridCell;
  }
 
//incl
function findElement(Food,Class, Taste) {
    final=[]
    let allholder
    let idd
    idd=Food
    let trues=[]
    let truees=[]
  
    if(fruit[Class]==Class){
         allholder=fruit

    }
   if(meat[Class]==Class){
    allholder=meat
   }
   if(vegetable[Class]==Class){
    allholder=vegetable
   }
   if(meal[Class]==Class){
    allholder=meal
   }
   
    // console.log(all[1][all[1].length-1])
    // for(let i=1;i<2;i++){
    // if(all[i][all[1].length-1]==Class){
    //     console.log(all[0]+'/'+all[1])
    //     let allholder=all[i-1]
        
    // }}
   // console.log(allholder)
   //console.log(allholder)
    let idof=allholder[Food]
   
    
    // Loop for array1
    //console.log(idof)
    for(let i = 0; i < idof.length; i++) {
         
        // Loop for array2
        for(let j = 0; j < Taste.length; j++){
            for(let z = 1; z < Taste[j].length-1; z++){
            
                
                if(idof[i] == Taste[j][z]) {
                    label=Taste[j][z]
               
                    final.push(Taste[j][z])
                    holder=true
                // console.log(Taste.indexOf(Taste[j]))
                trues.push(Taste.indexOf(Taste[j]))
                 //trues.push(Taste[Taste.indexOf(Taste[j])])

               
                   
                }  
            }
        }
        
           
}




for(let i=0;i<trues.length;i++){
    //console.log('listofspices'+final[i])
    truees.push(Taste[trues[i]][0])
   
    
}

//console.log(truees)
let uniqueChars = [...new Set(truees)]
console.log(uniqueChars)
  for(let i=0;i<uniqueChars.length;i++){
    listofmatches(uniqueChars[i])
  }



console.log(document.getElementById(Food+'L').children)
        if(!(document.getElementById(Food+'L').children.length>1)){
            console.log(Food+Food+'L')
         
            uniqueChars.forEach(appendItemToFragment);
    let flavors=document.createDocumentFragment()
    flavors.id='flavorous'
    flavors.appendChild(frag)
    console.log(flavors)
   li=[]
    document.querySelector('#'+Food+'L').appendChild(flavors);
    
    li.push(Food+'L')
    
}
  
   
   
    document.getElementById(Food+'L').style.visibility='visible'
    document.getElementById(Food+'L').style.height='auto'
   

console.log(final)
console.log(uniqueChars.length)

    
    
    
}


let USE1
let gridwhat=document.getElementById('gridwhat')
let cnh
let cph
let j=true
let list
let USE2
let optg
let chs2
let cph2
let chlist2
let chlist
let chid=[]
let chidlist=[]
let chidz=[]
let last
let fruitholder=document.getElementById('Fruitholder')
let veggieholder=document.getElementById('Veggieholder')
let button=document.getElementById('button')
function reverse(){


  Sweetmatch=[]
  Aromaticmatch=[]
  Spicymatch=[]
  Herbalmatch=[]
  Freshmatch=[]
  Spicymatch=[]
  final=[]
  console.log(final)
  
    gridwhat=document.getElementById('gridwhat')
    fruitholder=document.getElementById('Fruitholder')
    veggieholder=document.getElementById('Vegetableholder')
   if(fruitholder.style.visibility!="visible"||veggieholder.style.visibility!="visible"){

    gridwhat.style.gridTemplateColumns='auto auto'
 
    OGIL=document.getElementsByClassName('opttype1')
    for(let i=0;i<OGIL.length;i++){
      
        if(OGIL[i].style.visibility=="visible"){
            
            USE1=OGIL[i]
          
         
        }
    }
   
        cnh=USE1.id//Fruitholder
        chs2=cnh//Fruitholder
        cph2=chs2.slice(0,-6)+'sz' //Fruitsz
        cph=cnh.slice(0,-6)+'s'//Fruits
       
        chlist2=document.getElementsByClassName(cph2)
       chlist=document.getElementById(cph)
console.log(chlist.id)
chidlist=[]

for(let i=0;i<chlist2.length;i++){
    //chlist2[i].id.slice(0,-1))=Apple
    chidlist.push(document.getElementById(chlist2[i].id.slice(0,-1)))
    chidz.push(document.getElementById(chlist2[i].id))
    console.log(chidlist[i].id)//Apple
}





 
    if(chlist.style.visibility=='visible' ){
      
        Optgroup2.style.gridTemplateColumns="auto auto auto"
        last=cph.charAt(0).toLowerCase() + cph.slice(1)

        let plzend=  document.getElementsByClassName(last.slice(0,-1)+'Hold-it')[0]
        if(plzend!=undefined){
            
            plzend.className=last.slice(0,-1)+'Hold-it'.slice(0,-7)
            plzend.style.position='initial'
            plzend.style.top='initial'
            plzend.style.left='initial'
           console.log( plzend.id)
           console.log( plzend.style.height)
        }
     
       

        if(chidlist[0].style.visibility!='visible'||chidlist[1].style.visibility!='visible'){
            
            for(let i=0;i<chidlist.length;i++){
                console.log(chidlist[i].style.visibility)
                if(chidlist[i].style.visibility=='visible'){
                    USE2=chidlist[i]
                    console.log(USE2.id)//Apple
                   
                    document.getElementById(USE2.id+'L').style.visibility='collapse'
                    document.getElementById(USE2.id).style.height='0px'
                    document.getElementById(USE2.id+'L').style.height='0px'
                    
                    USE2.className.slice(0,-7)
                    let lastlist=document.getElementsByClassName(USE2.className)
                    for(let i=0;i<lastlist.length;i++){
                        lastlist[i].style.visibility='visible'
                        
                    }
                }
               
            }
            chlist.style.display="grid"
     chlist.style.fontSize="25px"
     chlist.style.gridTemplateColumns="auto auto auto"
        }else{
            
            for(let i=0;i<chidlist.length;i++){
                //chlist2[i].id.slice(0,-1))=Apple
               chidlist[i].style.visibility='collapse'
              
              
            }
            document.getElementById(USE1.id).style.height='71px'
        document.getElementById(cph).style.visibility="collapse"
    
        console.log(cnh,cph,chlist,chlist2,optg,USE1,chs2,chidlist[0])
       
        console.log(document.getElementById(cph))
        for(let i=0;i<OGIL.length;i++){
        OGIL[i].style.visibility="visible"
        document.getElementById(cph).style.visibility="collapse"
        console.log(chlist.id)
      let holders=chlist.id.replace('s','holder')
      console.log(holders)
      document.getElementById(holders).style.position='initial'
        document.getElementById(holders).style.top='initial'
        document.getElementById(holders).style.left='initial'
        button.style.visibility='collapse'
        document.getElementById('about').style.visibility='visible'
       // document.getElementById('abouts').style.visibility='visible'
        
        
    }}
}
   } else{}
}
function choice2(value,cl){
    if(document.getElementById(value+'L').style.visibility!='visible'){
        Optgroup2.style.gridTemplateColumns="auto"
    console.log('problem')
 
    ph2=value+"z"
     Optgroup3=document.getElementById(ph2)

     Optgroup3.style.display="initial"
     console.log(Optgroup3)
    console.log(value+cl)
    singular=document.getElementById(value)
     cnh=cl
     if(singular.className.length<10){
    singular.className+="Hold-it"}
    singular.style.position='absolute'
    singular.style.left='35%'
   singular.style.top='50px'
console.log(singular)
console.log(singular.className)
console.log('problem')
 hideothers=document.getElementsByClassName(cl)
 console.log(cl)
 document.getElementById(value).style.height='auto'
j=false
list=document.getElementById('flavorous')

 for(let i=0;i<hideothers.length;i++){
 hideothers[i].style.visibility="collapse"
 
 }
 
}
   


}

function choice1(value,place){
    document.getElementById('about').style.visibility='collapse'
    document.getElementById('abouts').style.visibility='collapse'
    button.style.visibility='visible'
    Optgroup1=document.getElementsByClassName('opttype1')
     fruitholder=document.getElementById('Fruitholder')
     veggieholder=document.getElementById('Vegetableholder')
 
   if(fruitholder.style.visibility=="visible"&&veggieholder.style.visibility=="visible"){
   
  gridwhat.style.gridTemplateColumns='auto'
    
    
        console.log(value)
    ph=value+"s"
    
     Optgroup2=document.getElementById(ph)
    let f=document.getElementsByClassName(ph+'z')
     Optgroup2.style.display="grid"
     Optgroup2.style.fontSize="25px"
     Optgroup2.style.gridTemplateColumns="auto auto auto"
     for(let i=0;i<Optgroup1.length;i++){
        Optgroup1[i].style.visibility="hidden"
        
         }
         Optgroup1[place].style.visibility="visible"
         Optgroup1[place].style.height="auto"
         Optgroup1[place].style.position='absolute'
         Optgroup1[place].style.left='15%'
         Optgroup1[place].style.top='350px'
         for(let i=0;i<f.length;i++){
            document.getElementById(f[i].id.slice(0,-1)).style.visibility='visible'
            f[i].style.visibility='visible'
            
         }
       
         Optgroup2.style.visibility="visible"
         console.log(Optgroup2.id)
         
        
         
         console.log('problem')
    
        
   
 }

 
}