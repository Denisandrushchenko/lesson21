'use strict'


class tabbleBoard{
    constructor(wrapper){
      this.wrapper = wrapper
      this.footer = document.querySelector('.foot_item')
    }
    
    checkTh(event){
         let target = event.target
         if(target.matches('.check' )){
            target.children[0].src = 'images/checked_hover.png'
            target.parentElement.style.backgroundColor = 'gray'
         }
         if(target.matches('.check_img')){
           target.src = 'images/checked_hover.png'
           target.parentElement.parentElement.style.backgroundColor = 'gray'
         }
    }
    update(event){
      let target = event.target
      if(target.matches('.remove')){
        target.parentElement.style.backgroundColor = null
        target.parentElement.children[0].children[0].src = 'images/checked.png'
      } 
      if(target.matches('.remove_img')){
        target.parentElement.parentElement.style.backgroundColor = null
        target.parentElement.parentElement.children[0].children[0].src = 'images/checked.png'
      }
    }
    deleteItem(event){
      this.ifAllItemRemove()
      let target = event.target
      if(target.matches('.del')){
        
        target.parentElement.remove()
      }
      if(target.matches('.del_img')){
        
        target.parentElement.parentElement.remove()
      }
    }
    ifAllItemRemove(){
      if(wrapper.children[1].children[0].children.length == 3 ){
        this.footer.style.display = 'flex'
      }
    }

    init(){
       console.dir(this)
       this.wrapper.addEventListener('click', this.checkTh.bind(this))
       this.wrapper.addEventListener('click' , this.update.bind(this))
       this.wrapper.addEventListener('click', this.deleteItem.bind(this))
    }
}

let wrapper = document.querySelector('.wrapper')


let myTB = new tabbleBoard(wrapper)

myTB.init()