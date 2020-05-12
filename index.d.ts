declare namespace assertrue {
    class AssertionError implements Error {
        name: string;
        message: string;
        actual: any;
        expected: any;
        operator: string;
        generatedMessage: boolean;
        code: 'ERR_ASSERTION';

        constructor(options?: {
            message?: string; actual?: any; expected?: any;
            operator?: string; stackStartFn?: Function
        });
    }

    type Class = { new(...args: any[]): any; };

    type AssertPredicate = RegExp | (new() => object) | ((thrown: any) => boolean) | object | Error;

    function fail(message?: string | Error): never;

    function ok(value: any, message?: string | Error): void;

    function strictEqual(actual: any, expected: any, message?: string | Error): void;

    function notStrictEqual(actual: any, expected: any, message?: string | Error): void;

    function deepStrictEqual(actual: any, expected: any, message?: string | Error): void;

    function notDeepStrictEqual(actual: any, expected: any, message?: string | Error): void;

    function throws(block: () => any, message?: string | Error): void;
    function throws(block: () => any, error: AssertPredicate, message?: string | Error): void;

    function doesNotThrow(block: () => any, message?: string | Error): void;
    function doesNotThrow(block: () => any, error: RegExp | Function, message?: string | Error): void;

    function ifError(value: any): void;

    function rejects(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
    function rejects(block: (() => Promise<any>) | Promise<any>, error: AssertPredicate, message?: string | Error): Promise<void>;

    function doesNotReject(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
    function doesNotReject(block: (() => Promise<any>) | Promise<any>, error: RegExp | Function, message?: string | Error): Promise<void>;

    function match(value: string, regExp: RegExp, message?: string | Error): void;

    function doesNotMatch(value: string, regExp: RegExp, message?: string | Error): void;

    function isTrue(value: any, message?: string | Error): void;
    function isStrictTrue(value: any, message?: string | Error): void;
    function isFalse(value: any, message?: string | Error): void;
    function isStrictFalse(value: any, message?: string | Error): void;

    function isNaN(value: any, message?: string | Error): void;
    function isNotNaN(value: any, message?: string | Error): void;
    function isStrictNaN(value: any, message?: string | Error): void;
    function isNotStrictNaN(value: any, message?: string | Error): void;

    function isStrictString(value: any, message?: string | Error): void;
    function isNotStrictString(value: any, message?: string | Error): void

    function isStrictBoolean(value: any, message?: string | Error): void;
    function isNotStrictBoolean(value: any, message?: string | Error): void;

    function isStrictArray(value: any, message?: string | Error): void;
    function isNotStrictArray(value: any, message?: string | Error): void;

    function isStrictFunction(value: any, message?: string | Error): void;
    function isNotStrictFunction(value: any, message?: string | Error): void;

    function isStrictRegExp(value: any, message?: string | Error): void;
    function isNotStrictRegExp(value: any, message?: string | Error): void;

    function isStrictNumber(value: any, message?: string | Error): void;
    function isNotStrictNumber(value: any, message?: string | Error): void;

    function is(value: any, type: Class | string, message?: string | Error): void;
    function isNot(value: any, type: Class | string, message?: string | Error): void;

    function isAssignableFrom(superType: Class, subType: Class, message?: string | Error): void;
    function isNotAssignableFrom(superType: Class, subType: Class, message?: string | Error): void;

    function isAssignableTo(subType: Class, superType: Class, message?: string | Error): void;
    function isNotAssignableTo(subType: Class, superType: Class, message?: string | Error): void;

    const strict: typeof assertrue;
}

export = assertrue;
