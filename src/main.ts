
import { ScrypterMeta } from './utils/metadata/meta' 
import { cli } from './decorators/cli'
import { MethodMetadata } from './utils/metadata/interfaces/method'
import { ClassMetadata } from './utils/metadata/interfaces/class'

@cli('test1')
class Test { 
	@cli('test2')
	testFunc() { }

	bueno() { }
}

console.log(ScrypterMeta.getData())
