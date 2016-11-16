// Type definitions for asin-matcher v0.1.1
// Project: https://github.com/timbarclay/asin-matcher
// Definitions by: Tim Barclay <https://github.com/timbarclay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "asin-matcher" {
    interface UrlMatch {
        market: string;
        asin: string;
    }

    function isProductLink(url: string): boolean;

    function match(url: string): UrlMatch;

    function getMarket(url: string): string;

    function getAsin(url: string): string;
}