//2
const heading2 = document.getElementsByTagName('h2');
console.log(heading2)
for(const h of heading2){
    h.style.color = 'lightblue'
}
//3
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'hotpink';

//4
 const cards = document.getElementsByClassName('card');
 for(let card of cards){
     card.style.borderRadius = '40px';
 }


//5
const button =document.getElementById('btn').addEventListener('click',function(){
    // document.body.style.background= 'lightblue'
    console.log('please give a email addresss')
})

//6
const buttons =document.getElementsByClassName('panda-btn-buy-now')
   for(let button of buttons){
    button.addEventListener('click',function(event){
        event.target.remove(event.target);
                  })
   }

//7
document.getElementById('btn').addEventListener('keyup',function(event){
            const submitBtn = document.getElementById('submit-btn')
          if(event.target.value == 'email'){
                submitBtn.removeAttribute('disabled')
          }
          else{
            submitBtn.setAttribute('disabled',true)
          }
        })
//8
//    const  cardImages = document.getElementsByClassName('card-img-top');
//    for(let img of cardImages ){
//        img.addEventListener('mouseover',function(){
//            img.setAttribute('src','images/banner-images/xbox.png')
//        })
       
//    }
   
const cardImages = document.getElementById('image-change');
cardImages.addEventListener('mouseover',function(){
    cardImages.setAttribute('src','images/banner-images/xbox.png');
})
cardImages.addEventListener('mouseout',function(){
    cardImages.setAttribute('src','images/shoes/shoe-1.png');
})


//9
// focus
        document.getElementById('subscribe').addEventListener('dblclick',function(){
            subscribe.style.backgroundColor = 'lightcoral'
        })
        
