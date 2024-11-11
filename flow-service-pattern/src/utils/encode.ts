export const toDataUrl = (file: Express.Multer.File) => {
    const b64 = Buffer.from(file.buffer).toString('base64');
    let dataUrl = "data:" + file.mimetype + ";base64," + b64;
    return dataUrl;
};