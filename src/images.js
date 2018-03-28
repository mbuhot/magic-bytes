import match from './match';

// FF D8 FF DB
export const matchesJpg = match([0xFF, 0xD8, 0xFF, 0xDB])
// FF D8 FF E0 ?? ?? 4A 46 49 46 00 01
export const matchesJpeg = match([0xFF, 0xD8, 0xFF, 0xE0, '?', '?', 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01]);
// FF D8 FF E1 ?? ?? 45 78 69 66 00 00
export const matchesJfif = match([0xFF, 0xD8, 0xFF, 0xE1, '?', '?', 0x45, 0x78, 0x69, 0x66, 0x00, 0x00]);
export const matchesAnyJpg = bytes => matchesJpeg(bytes) || matchesJpg(bytes) || matches(Jfif);


// GIF
// 47 49 46 38 37 61
export const matchesGifA = match([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]);
// 47 49 46 38 39 61
export const matchesGifB = match([0x47, 0x49, 0x46, 0x38, 0x39, 0x61])
