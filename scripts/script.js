
// Load and fetch categories data 
const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

// Loading Spinner 
const loadingSpinner = (status) => {
    if (status === true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("all-plants").classList.add("hidden");
    }
    else {
        document.getElementById("all-plants").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}


// Remove Active class 
const removeActive = () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(categoryBtn => categoryBtn.classList.remove('active'));
}

// Load Plants By Categories 
const loadPlants = (id) => {
    loadingSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const categoryClicked = document.getElementById(`category-btn-${id}`);
            // console.log(categoryClicked)
            categoryClicked.classList.add('active');
            displayPlants(data.plants)
        })
}

// Load Category Details as Modal
const loadCategoryDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const details = await res.json();

    displayCategoriesDetails(details.plants);
}


// Display Category Details as Modal
const displayCategoriesDetails = (plants) => {
    const detailsPlants = document.getElementById('details-plants')
    detailsPlants.innerHTML = `
    <h2 class="font-bold text-4xl">${plants.name}</h2>
                    <div class="mx-auto">
                        <img class="min-w-full max-h-[250px] rounded-lg" src="${plants.image}" alt="">
                    </div>
                    <p><span class="font-semibold">Category:</span> <span>${plants.category}</span></p>
                    <p><span class="font-semibold">Price:</span> <span>৳${plants.price}</span></p>
                    <p><span class="font-semibold">Description:</span> <span>${plants.description}</span></p>
    `;
    document.getElementById('my_modal_5').showModal();
}


const displayPlants = (plantsAll) => {
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
                            <h2 onclick="loadCategoryDetails(${plants.id})" class="card-title mt-4 text-[#1F2937] font-semibold">${plants.name}</h2>
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

    loadingSpinner(false);
}


// Displaying All categories Data 
const displayCategories = (categories) => {
    const allCategories = document.getElementById('all-categories');
    allCategories.innerHTML = '';

    categories.forEach(category => {
        const button = document.createElement('div')
        button.classList.add('w-full')
        button.innerHTML = `
        <button id="category-btn-${category.id}" onclick="loadPlants(${category.id})" class="text-left w-full p-2 rounded-lg category-btn">${category.category_name}</button>
        `;

        allCategories.append(button);
    });
}

// Load and fetch All Plants data 
const loadAllPlants = () => {
    loadingSpinner(true);
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
                            <h2 onclick="loadCategoryDetails(${plants.id})" class="card-title mt-4 text-[#1F2937] font-semibold">${plants.name}</h2>
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
    loadingSpinner(false);
}




// Calling All Plants data 
loadAllPlants();

// Calling All Categories data 
loadCategories();