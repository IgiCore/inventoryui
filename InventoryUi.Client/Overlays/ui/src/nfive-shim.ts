// NFive development shim for debugging NUI outside of FiveM
if (typeof nfive === 'undefined') {
	// Fake game background
	window.addEventListener('DOMContentLoaded', () => {
		document.documentElement.style.backgroundImage = "url('https://www.digiseller.ru/preview/469790/p1_50421233244830.JPG')";
		document.documentElement.style.backgroundPosition = 'center';
		document.documentElement.style.backgroundRepeat = 'no-repeat';
		document.documentElement.style.backgroundAttachment = 'fixed';
		document.documentElement.style.backgroundSize = 'cover';
	});

	let callbacks = Object.create(null);

	// NFive API
	window.nfive = {
		pluginName: 'NFive/shim',
		locale: 'en-US',
		currency: 'USD',

		show: () => nfive.log('[NFive/shim] show()'),
		hide: () => nfive.log('[NFive/shim] hide()'),

		log: (...args: any[]) => console.log(...args),

		send: (event: string, data?: any): Promise<Response> => new Promise((resolve, reject) => {
			nfive.log('[NFive/shim] send()', event, data);

			resolve(new Response());
		}),

		on: (event: (string | symbol), callback: nfive.Callback) => {
			(callbacks[event] = callbacks[event] || []).push(callback);
		},

		off: (event?: (string | symbol), callback?: nfive.Callback) => {
			if (!event) {
				callbacks = Object.create(null);
				return;
			}

			if (!callbacks[event]) {
				return;
			}

			if (!callback) {
				delete callbacks[event];
				return;
			}

			const index = callbacks.findIndex(function (cb?: nfive.Callback) {
				return (cb === callback || (cb !== undefined && cb.callback === callback))
			});

			if (index > -1) {
				if (callbacks[event].length === 1) {
					delete callbacks[event];
				} else {
					callbacks[event].splice(index, 1);
				}
			}
		},

		once: (event: (string | symbol), callback: nfive.Callback) => {
			const once = (data?: any) => {
				nfive.off(event, once);
				callback(data);
			};

			once.callback = callback;
			nfive.on(event, once);
		},

		emit: (event: (string | symbol), data: any) => {
			const cbs = callbacks[event];
			if (!cbs) {
				return;
			}
			const frozenCallbacks = Array.from(cbs);
			frozenCallbacks.forEach(callback => {
				(callback as nfive.Callback)(data);
			});
		},

		listeners: (event: (string | symbol)) => callbacks[event] || [],
		hasListeners: (event: (string | symbol)) => Boolean(nfive.listeners(event).length),
		eventNames: () => Reflect.ownKeys(callbacks) as (string | symbol)[],
		eventNamesStrings: () => Object.keys(callbacks)
	};
}

export {};
