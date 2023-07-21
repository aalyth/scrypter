
enum Colors {
	BLACK  = '\x1B[30m',
	RED    = '\x1B[31m',
	GREEN  = '\x1B[32m',
	ORANGE = '\x1B[33m',
	BLUE   = '\x1B[34m',
	PURPLE = '\x1B[35m',
	CYAN   = '\x1B[36m',
	END    = '\x1B[0m' ,
}

export function err(msg: string) {
	console.log(`${Colors.BLUE}Scrypter: ${Colors.RED}Error:${Colors.END} ${msg}.`)
}
