import path from 'path'

export function importStylus() {
    return {
        name: 'vite-stylus-import-plugin',
        async transform(code: string, id: string) {
            if (/.stylus$/g.test(id)) {
                return {
                    code: `
                        @import "${path.resolve(__dirname, 'src/core/assets/styles/global.styl')}"

                        ${code}
                    `,
                    map: null,
                }
            }
            return null
        }
    }
}