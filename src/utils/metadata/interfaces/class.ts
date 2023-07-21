
import { MethodMetadata } from './method'

export interface ClassMetadata {
	name: string
	constructor: Function
	methods: { [key: string]: MethodMetadata }
}
