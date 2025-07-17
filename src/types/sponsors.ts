type SponsorId =
| "alsa"
| "cerave"
| "coca-cola"
| "grefusa"
| "infojobs"
| "mahou"
| "maxibon"
| "nothing"
| "revolut"
| "spotify"
| "vicio"

type SponsorName = 
| "Alsa"
| "Cerave"
| "Coca-Cola"
| "Grefusa"
| "Infojobs"
| "Mahou"
| "Maxibon"
| "Nothing"
| "Revolut"
| "Spotify"
| "Vicio"

export interface Sponsors {
    id: SponsorId
    name: SponsorName
    url: string
    image: {
        logo: any
        width: number
        height: number
    }
}