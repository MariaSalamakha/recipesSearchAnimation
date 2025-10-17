const btn = document.querySelector('.btn');
btn.addEventListener("click", searchRecipes);

function searchRecipes() {
    const searchInput = document.querySelector('#input-text').value.toLowerCase();
    const recipes =document.querySelectorAll('.recipe');

if (searchInput.trim() === '') { 
    recipes.forEach(recipe => recipe.style.display = "block"); 
    return; 
}   
const searchRegex = new RegExp(searchInput.split(/\s+/).map(word => word.toLowerCase()).join('|'),'gi');

recipes.forEach(recipe => {
    const ingredients = recipe.querySelector('.ingridients').textContent.toLowerCase();
    if (searchRegex.test(ingredients)) {
        recipe.style.display = "block"; 
    }
    else {
        recipe.style.display = "none"; 
    }
});
} 

gsap.to ("h1", {
    text: "Healthy recipes for breakfast and snack",
    duration: 2, 
    delay: 1, 
    repeat: -1,
    repeatDelay: .9, 
    ease: "power1.in",
    yoyo: true
})