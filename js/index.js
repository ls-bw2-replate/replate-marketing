class TabLink {
    constructor(element) {
      
      this.element=element;
      
      this.data=this.element.dataset.tab;
    
      this.itemElement=document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      this.tabItem= new TabItem(this.itemElement)
      
      element.addEventListener('click',()=> this.select());
    };
  
    select() {
      
      const links=document.querySelectorAll('.tabs-link')
      
      Array.from(links).forEach(link=> 
        link.classList.remove('tabs-link-selected'));
      
      this.element.classList.add('tabs-link-selected')
      
        this.tabItem.select()
    }
  }
  
  class TabItem {
    constructor(element) {
      
      this.element=element;
    }
  
    select() {
    
      const items=document.querySelectorAll('.tabs-item');
      
      Array.from(items).forEach(items=> 
        items.classList.remove('tabs-item-selected'));
      this.element.classList.add('tabs-item-selected')
    }
  }
  
  
  links = document.querySelectorAll('.tabs-link');
  links.forEach((link)=>{
    return new TabLink(link);
  })
  
  let images=document.querySelectorAll('.pics');
 images.forEach(function(index, i){
    images[i].addEventListener('mouseover', function(event) {
        event.target.style.opacity='0.5';
    });
    images[i].addEventListener('mouseout', function(event) {
        event.target.style.opacity='1';
    });                    

});