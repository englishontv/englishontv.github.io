import { Stream } from "./stream.model";

export interface Channel {
    id: string;
    name: string;
    country: string;
    logo: string;
    stream: Stream;
}