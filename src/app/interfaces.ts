// In this file, we will define any interface we need in the project
// Because we're using these interfaces throughout our project, we define them here and import them wherever we need it:
export interface Pet {
    id: Number,
    name: String,
    species: String,
    food: String
}

// store the structure/interface of our Person objects
export interface Person {
    id?: Number,
    name: String,
    password: String,
    pets: Pet[]
}

