class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageURL,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageURL = imageURL;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.ingredients = ingredients;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
