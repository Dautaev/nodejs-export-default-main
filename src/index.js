// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}
import { APP_VERSION, DEVELOPER } from './constants.js'

// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants'

// можно давать любое имя при импорте, если экспорт был по умолчанию
import theBestFunction from './function.js'

console.log(theBestFunction());

console.log(APP_VERSION, DEVELOPER); 
import obj from "./arrays.js"
console.log(obj)
import {add, div} from "./math.js"
console.log(add, div)
