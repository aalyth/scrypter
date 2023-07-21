
import { ScrypterMeta } from '../utils/metadata/meta'
import { err } from '../utils/output'

export function cli(name: string|null = null) {
	return (target: any, ctx: any) => {
		let cli_name = name? name : ctx.name

		switch (ctx.kind) {
			case 'method': {
				ScrypterMeta.addMethod(cli_name, target)
				break;
			}

			case 'class': {
				ScrypterMeta.addClass(cli_name, target)
				break;
			}

			default: {
				err('unexpected use of the @cli decorator')
				break;
			}
		}
	}
}
