
// Load and fetch categories data 
const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}


// Displaying All categories Data 
const displayCategories = (categories) => {
    const allCategories = document.getElementById('all-categories');
    allCategories.innerHTML = '';

    categories.forEach(category => {
        // console.log(category.category_name);
        const button = document.createElement('div')
        button.classList.add('w-full')
        button.innerHTML = `
        <button class="text-left bg-transparent w-full p-2 rounded-lg">${category.category_name}</button>
        `;

        allCategories.append(button);
    });
}






// Calling All Categories data 
loadCategories();