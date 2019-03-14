class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => this.select());
  }
  select() {
    const links = document.querySelectorAll('.link');
    Array.from(links).forEach(function (item) {
      item.classList.remove('link-selected');
    });
    this.element.classList.toggle('link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll('.item');
    Array.from(items).forEach(function (item) {
      item.classList.remove('item-selected');
    });
    this.element.classList.toggle('item-selected');
  }
}

let links = document.querySelectorAll('.link');
links.forEach(function (link) {
  return new TabLink(link);
});

let images = document.querySelectorAll('.pics');
images.forEach(function (index, i) {
  images[i].addEventListener('mouseover', function (event) {
    event.target.style.opacity = '0.5';
  });
  images[i].addEventListener('mouseout', function (event) {
    event.target.style.opacity = '1';
  });
});

let navLinks = document.querySelectorAll('.links a');
navLinks.forEach(function (index, i) {
  navLinks[i].addEventListener('mouseover', function (event) {
    event.target.style.transform = 'scale(1.2)';
  });
  navLinks[i].addEventListener('mouseout', function (event) {
    event.target.style.transform = 'scale(1.0)';
  });
});