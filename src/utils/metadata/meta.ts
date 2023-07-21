
import { ClassMetadata } from './interfaces/class'
import { MethodMetadata } from './interfaces/method'

import { err } from '../output'


export namespace ScrypterMeta {
	let __scrypter_metadata: {[key: string]: ClassMetadata | MethodMetadata } = {} 

	export function addMethod(name: string, method: Function, parent = __scrypter_metadata) {
		if (parent[name] != undefined) {
			err(`CLI argument "${name}" already exists`)
		}
		
		parent[name] = {
			name: name,
			method: method
		}
	}

	export function addClass(name: string, class_: any) {
		if (__scrypter_metadata[name] != undefined) {
			err(`CLI argument "${name}" already exists`)
		}

		let functions: {[key: string]: MethodMetadata} = {}
		for (const key in class_.prototype) {
			addMethod(key, class_.prototype[key], functions)
		}

		__scrypter_metadata[name] =  {
			name: 		 name,
			constructor: class_,
			methods: 	 functions 
		}
	}

	// TODO remove later (currently for debug uses)
	export function getData() {
		return __scrypter_metadata
	}
}
