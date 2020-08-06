declare global {
    interface String {
        은는: string;
        을를: string;
    }
}
export declare const createJosaFunction: (a: string, b: string) => {
    appender: (word: string | String) => string;
    getSuffix: (word: string | String) => string;
};
declare const _default: {
    getObjectiveSuffix: (word: string | String) => string;
    getSubjectiveSuffix: (word: string | String) => string;
};
export default _default;
//# sourceMappingURL=index.d.ts.map