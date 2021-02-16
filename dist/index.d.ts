declare global {
    interface String {
        은는: string;
        을를: string;
        이가: string;
        으로: string;
    }
}
export declare const createJosaFunction: (a: string, b: string) => {
    appender: (word: string | String) => string;
    getSuffix: (word: string | String) => string;
};
declare const getSubjectiveSuffix1: (word: string | String) => string;
declare const getObjectiveSuffix1: (word: string | String) => string;
declare const getSubjectiveSuffix2: (word: string | String) => string;
declare const getAdverbalSuffix1: (word: string | String) => "으로" | "로";
export { getSubjectiveSuffix1, getSubjectiveSuffix2, getObjectiveSuffix1, getAdverbalSuffix1 };
//# sourceMappingURL=index.d.ts.map