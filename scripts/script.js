
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
        const button = document.createElement('div')
        button.classList.add('w-full')
        button.innerHTML = `
        <button class="text-left w-full p-2 rounded-lg">${category.category_name}</button>
        `;

        allCategories.append(button);
    });
}

// Load and fetch All Plants data 
const loadAllPlants = () => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
        .then(res => res.json())
        .then(data => disAllPlants(data.plants))
}


// Displaying All Plants Data 
const disAllPlants = (plantsAll) => {
    const allPlants = document.getElementById('all-plants');
    allPlants.innerHTML = '';

    plantsAll.forEach(plants => {
        const plantCard = document.createElement('div')
        plantCard.classList.add('card', 'bg-base-100', 'shadow-sm', 'p-4')
        plantCard.innerHTML = `
        <figure class="">
                            <img src="${plants.image}" class="max-h-[160px] w-full rounded-lg" />
                        </figure>
                        <div class="">
                            <h2 class="card-title mt-4 text-[#1F2937] font-semibold">${plants.name}</h2>
                            <p class="my-2 text-[#1F2937] text-[12px] text-justify">${plants.description.slice(1, 80)}</p>
                            <div class="mb-3 flex justify-between items-center">
                                <p
                                    class="text-[#15803D] bg-[#DCFCE7] px-2 py-2 xl:px-5 xl:py-3 rounded-3xl font-semibold text-[14px]">${plants.category}</p>
                                <p class="text-[#1F2937] font-semibold text-[14px]">৳<span>${plants.price}</span></p>
                            </div>
                            <button class="btn bg-[#15803D] w-full rounded-3xl text-white">Add to Cart</button>
                        </div>
        `;
        allPlants.append(plantCard);
    });
}




// Calling All Plants data 
loadAllPlants();

// Calling All Categories data 
loadCategories();