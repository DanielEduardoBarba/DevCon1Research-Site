import config from "./config.json"

export function isProd() {
    return process.env.REACT_APP_ENV != "development"

}

export function server() {
    return isProd() ? config?.api : config?.dev
}

console.log("ENV:",isProd()?"PRODUCTION":"DEVELOPMENT")
console.log("REACT_ENV: ", process.env.REACT_APP_ENV)