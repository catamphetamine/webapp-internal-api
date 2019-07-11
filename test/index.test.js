import API from '..'
import configuration from '../configuration'

describe('API', () => {
	it('should work', () => {
		const api = new API(configuration.test)
	})
})