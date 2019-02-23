export declare const ENTITIES: {
    [key: string]: number | string;
};
interface SAXInterface {
    [key: string]: any;
}
export declare class SAX implements SAXInterface {
    [key: string]: any;
    EVENTS: string[];
    ENTITIES: {
        [key: string]: number | string;
    };
    protected XML_ENTITIES: {
        [key: string]: string;
    };
    protected S: any;
    protected opt: any;
    protected trackPosition: boolean;
    protected column: number;
    protected line: number;
    protected c: string;
    protected error: any;
    protected q: string;
    protected bufferCheckPosition: any;
    protected closed: boolean;
    protected tags: any[];
    protected looseCase: string;
    protected closedRoot: boolean;
    protected sawRoot: boolean;
    protected strict: boolean;
    protected tag: any;
    protected strictEntities: any;
    protected state: any;
    protected noscript: boolean;
    protected attribList: any[];
    protected ns: any;
    protected position: number;
    private STATE;
    private readonly BUFFERS;
    private parser;
    private CDATA;
    private DOCTYPE;
    private XML_NAMESPACE;
    private XMLNS_NAMESPACE;
    protected rootNS: {};
    private comment;
    private sgmlDecl;
    private textNode;
    private tagName;
    private doctype;
    private procInstName;
    private procInstBody;
    private entity;
    private attribName;
    private attribValue;
    private cdata;
    private script;
    private startTagPosition;
    constructor();
    private static charAt;
    private static isWhitespace;
    private static isQuote;
    private static isAttribEnd;
    private static isMatch;
    private static notMatch;
    private static qname;
    write(chunk: null | object | string): this | SAXParser;
    protected emit(event: string, data?: Error | {}): void;
    protected clearBuffers(): void;
    protected flushBuffers(): void;
    protected end(): SAXParser;
    protected errorFunction(er: string): this;
    private attrib;
    private newTag;
    private parseEntity;
    private beginWhiteSpace;
    private strictFail;
    private textApplyOptions;
    private emitNode;
    private closeText;
    private checkBufferLength;
    private openTag;
    private closeTag;
}
export declare class SAXParser extends SAX {
    constructor(strict: boolean, opt: any);
    ontext: Function;
    onprocessinginstruction: Function;
    onsgmldeclaration: Function;
    ondoctype: Function;
    oncomment: Function;
    onopentagstart: Function;
    onattribute: Function;
    onopentag: Function;
    onclosetag: Function;
    onopencdata: Function;
    oncdata: Function;
    onclosecdata: Function;
    onerror: Function;
    onend: Function;
    onready: Function;
    onscript: Function;
    onopennamespace: Function;
    onclosenamespace: Function;
    resume(): this;
    close(): SAXParser | this;
    flush(): void;
}
export {};
