import jade from 'jade'
import config from 'config'
import path from 'path'

export default function* (next) {

    this.locals = this.state

    this.render = (templatePath, locals) => {
        locals = locals || {}
        let localsFull = Object.create(this.locals)


        locals['dev'] = process.env.NODE_ENV === 'development'
        locals['app'] = '/layout/js/app.js'
        locals['domain'] = this.request.host
        locals['url'] = 'http://' + this.request.host

        for (let prop in config.props) {
            locals[prop] = config.props[prop].value
        }

        for (let key in locals) {
            if (Array.isArray(locals[key])) {
                localsFull[key] = locals[key].map(el => {
                    if (typeof el === 'object') {
                        let newObject = {}
                        for (let key in el) {
                            newObject[key] = el[key].value
                        }
                        return newObject
                    } else {
                        return typeof el === 'object' ? el.value : el
                    }
                })
            } else {
                localsFull[key] = locals[key]
            }
        }

        localsFull.country = false

        if (this.query.country && localsFull.countries[this.query.country]) {
            localsFull.country = this.query.country
            localsFull.title = localsFull.countries[this.query.country].shareTitle
            localsFull.description = localsFull.countries[this.query.country].shareDescription
        }


        let templatePathResolved = path.join(config.templates.root, templatePath + '.jade')
        return jade.renderFile(templatePathResolved, localsFull)
    }

    yield* next

}
