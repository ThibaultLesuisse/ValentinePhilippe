import { Accomodation } from "../models/accomodation";

export function GetAccomodations(): Accomodation[]
{
    return [
        {
            name: "Le Sanglier des Ardennes",
            imageUrl: "assets/le_sanglier_des_ardennes.jpg",
            full: false,
            url: "https://www.sanglier-durbuy.be/nl",
        },
        {
            name: "La passerelle",
            imageUrl: "assets/la_passerelle.jpg",
            full: false,
            url: "https://www.la-passerelle.be/nl/",
        },
        {
            name: "Het Victoria",
            imageUrl: "assets/hotel_victoria.jpg",
            full: false,
            url: "https://maisoncaerdinael.be/nl/",
        },
        {
            name: "Hotel Lea",
            imageUrl: "assets/hotel_lea.jpg",
            full: false,
            url: "https://maisoncaerdinael.be/en/hotels/",
        },
        {
            name: "Cote Cour",
            imageUrl: "assets/cote_cour.jpg",
            full: false,
            url: "https://www.hotelcotecour.com/hotel.html",
        },
        {
            name: "Saint Amour",
            imageUrl: "assets/le_saint_amour.jpg",
            full: false,
            url: "https://saintamour.be/nl/",
        },
        {
            name: "Les Villas De Durbuy",
            imageUrl: "assets/les_villas_de_durbuy.jpg",
            full: false,
            url: "https://lesvillasdedurbuy.be/",
        },
        {
            name: "Hotel Five Nations",
            imageUrl: "assets/hotel_five_nations.jpg",
            full: false,
            url: "https://www.golfdurbuy.be/nl/hotel-five-nations",
        },
        {
            name: "Hotel Le Clos des Récollets",
            imageUrl: "assets/hotel_le_clos.jpg",
            full: false,
            url: "https://www.closdesrecollets.be/web/durbuy_hotel_ardennes_hebergement_reservation/1011306039/list1287970061/f1.html",
        },
        {
            name: "Other Hotels",
            imageUrl: "assets/hotel_le_clos.jpg",
            full: false,
            url: "https://www.adventure-valley.be/nl/accommodatie-in-de-buurt-van-Adventure-Valley",
        },
    ]
}