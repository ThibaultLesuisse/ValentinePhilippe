export interface Rsvp {
    email: string,
    guests: Guest[]
}

export interface Guest {
    firstName: string,
    lastName: string,
    isVegetarian: boolean,
    dietaryComment: string
}