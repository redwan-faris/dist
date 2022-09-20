export declare class CarPicture {
    run(path: string): Promise<string>;
    updatePhoto(path: string, oldPath: any): Promise<string>;
    generateWebpPicture(path: string, newName: any): Promise<void>;
    deletePicture(path: string): Promise<void>;
}
