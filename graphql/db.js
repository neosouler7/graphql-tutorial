export const people = [
    {
        id: 0,
        name: "JH",
        age: 30,
        gender: "male"
    },
    {
        id: 1,
        name: "JY",
        age: 28,
        gender: "female"
    },
    {
        id: 2,
        name: "CY",
        age: 30,
        gender: "male"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]; 
}