interface Window {
	nfive: typeof nfive;
}

declare namespace nfive {
	const pluginName: string;
	const locale: string;
	const currency: string;

	function show(): void;
	function hide(): void;

	function send(event: string, data?: any): Promise<Response>;

	function log(...args: any[]): void;

	function on(event: (string | symbol), callback: Callback): void;
	function off(event?: (string | symbol), callback?: Callback): void;
	function once(event: (string | symbol), callback: Callback): void;
	function emit(event: (string | symbol), data: any): void;
	function listeners(event: (string | symbol)): Callback[];
	function hasListeners(event: (string | symbol)): boolean;
	function eventNames(): (string | symbol)[];
	function eventNamesStrings(): string[];

	export type Callback = {
		(data?: any): void,
		callback?: Callback
	}
}
