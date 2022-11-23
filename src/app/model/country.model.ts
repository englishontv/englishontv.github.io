export class Country {
    public name: string;
    public code: string;
    public lang: string;
    public flag: string;
    public image: string;

    constructor(name: string, code: string, lang: string, flag: string, image: string) {
        this.name = name;
        this.code = code;
        this.lang = lang;
        this.flag = flag;
        this.image = image;
    }

}