"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPicture = void 0;
const common_1 = require("@nestjs/common");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const process_1 = require("process");
const sharp = require("sharp");
class CarPicture {
    async run(path) {
        const newName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
        path = (0, path_1.join)((0, process_1.cwd)(), `upload/${path}`);
        await this.generateWebpPicture(path, newName);
        await this.deletePicture(path);
        return newName;
    }
    async updatePhoto(path, oldPath) {
        oldPath = (0, path_1.join)((0, process_1.cwd)(), `upload/${oldPath}`);
        await this.deletePicture(oldPath);
        return await this.run(path);
    }
    async generateWebpPicture(path, newName) {
        const destination = (0, path_1.join)((0, process_1.cwd)(), `gallary/${newName}.webp`);
        await sharp(path)
            .resize({
            width: 250,
            height: 250,
        })
            .webp()
            .toBuffer()
            .then((data) => {
            (0, graceful_fs_1.writeFileSync)(destination, data);
        });
    }
    async deletePicture(path) {
        (0, graceful_fs_1.unlink)(path, (err) => {
            if (err)
                throw new common_1.InternalServerErrorException();
        });
    }
}
exports.CarPicture = CarPicture;
//# sourceMappingURL=car-picture.js.map