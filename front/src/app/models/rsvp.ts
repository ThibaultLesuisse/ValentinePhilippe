export interface Rsvp {
    email: string,
    guests: Guest[],
    address: Address
}

export interface Guest {
    firstName: string,
    lastName: string,
    dietaryRestrictions: string
}

export interface Address {
    streetAndHouseNumber: string,
    city: string,
    postalCode: string,
    country: string
}