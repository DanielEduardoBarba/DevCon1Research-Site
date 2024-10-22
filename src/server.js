import config from "./config.json"

export function isProd() {
    return process.env.REACT_APP_ENV == "development"

}

export function server() {
    return isProd() ? config?.api : config?.dev
}

console.log(isProd()?"PRODUCTION":"DEVELOPMENT")