// Type definitions for ngGuid v0.1.2
// Project: https://github.com/ruionwriting/ngGuid

declare module angular {
    interface IGuidService {
        empty: string;
        newGuid(): string;
    }
}