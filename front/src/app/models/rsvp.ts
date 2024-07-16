export interface Rsvp {
    email: string,
    guests: Guest[],
    address: Address
}

export interface Guest {
    firstName: string,
    lastName: string,
    dietaryComment: string
}

export interface Address {
    street: string,
    streetNumber: string,
    city: string,
    postalCode: string,
    country: string
}