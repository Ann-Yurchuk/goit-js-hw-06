const categories = document.querySelector('#categories');
const subCategories = document.querySelectorAll('.item');
const counter = parent => { return parent.childElementCount };

const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const lastElem = element.lastElementChild;
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(lastElem)}`);
    });
};

console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);