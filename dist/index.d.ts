declare global {
    interface String {
        은는: string;
        을를: string;
        이가: string;
    }
}
export declare const createJosaFunction: (a: string, b: string) => {
    appender: (word: string | String) => string;
    getSuffix: (word: string | String) => string;
};
export declare const getSubjectiveSuffix: (word: string | String) => string;
export declare const getSubjectiveSuffix2: (word: string | String) => string;
export declare const getObjectiveSuffix: (word: string | String) => string;
//# sourceMappingURL=index.d.ts.map