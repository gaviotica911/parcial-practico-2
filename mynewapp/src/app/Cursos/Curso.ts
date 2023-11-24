export class Curso {
    id: number;
    title: string;
    platform: string;
    launch_year: number;
    duration_hours: number;
    description: string;
    offers_certificate: boolean;
    image: string;
    constructor(id: number, title: string, platform: string, launch_year: number, duration_hours: number, description: string, offers_certificate: boolean, image: string) {
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.launch_year = launch_year;
        this.duration_hours = duration_hours;
        this.description = description;
        this.offers_certificate = offers_certificate;
        this.image = image;
    }
    



}
