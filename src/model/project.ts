export default class ProjectModel {
    #id: number;
    #name: string;
    #description: string;
    #cover: string;
    #tags: string[];
    #longDescription: string;
    #features: string[];
    #images: string[];
    #github: string;
    #deploy?: string;

    constructor(id: number, name: string, description: string, cover: string, tags: string[], longDescription: string, features: string[], images: string[], github: string, deploy?: string) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#cover = cover;
        this.#tags = tags;
        this.#longDescription = longDescription;
        this.#features = features;
        this.#images = images;
        this.#github = github;
        this.#deploy = deploy
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get cover() {
        return this.#cover;
    }

    get tags() {
        return this.#tags;
    }

    get longDescription() {
        return this.#longDescription
    }

    get features() {
        return this.#features
    }

    get images() {
        return this.#images
    }

    get github() {
        return this.#github
    }

    get deploy() {
        return this.#deploy
    }

    toObject() {
        return {
            id: this.#id,
            name: this.#name,
            description: this.description,
            cover: this.#cover,
            tags: this.#tags,
            longDescription: this.#longDescription,
            features: this.#features,
            images: this.#images,
            github: this.#github,
            deploy: this.#deploy,
        }
    }
}