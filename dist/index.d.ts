declare global {
    interface String {
        은는: string;
        을를: string;
    }
}
export declare const createJosaFunction: (a: string, b: string) => (word: string | String) => string;
