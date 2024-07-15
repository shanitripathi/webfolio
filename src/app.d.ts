// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		type ResponseData = {
			data: any;
			message?: string;
			status: number;
		};
	}
}

export {};
