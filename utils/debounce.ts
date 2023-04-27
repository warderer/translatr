// El debounce es un patrón de diseño, que pospone la ejecución de una función hasta que pase un tiempo de espera.

import { clearTimeout } from "timers"

// Se utiliza para evitar que se hagan muchas peticiones al servidor, por ejemplo, cuando se hace scroll en una página, y se hace una petición al servidor cada vez que se hace scroll, se puede utilizar el debounce para que se haga una petición cada cierto tiempo, y no cada vez que se hace scroll.

// Otro patrón de diseño es el throttle, que ejecuta la función cada cierto tiempo, pero no la pospone (no reinicia el tiempo de espera)

const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout
    return (...args: any[]) => {
        // later es la función que se ejecuta cuando se acaba el tiempo de espera
        const later = () => {
            clearTimeout(timeout)
            func(...args) // es la función que se recibe como parámetro y que se ejecuta cuando se acaba el tiempo de espera
        }

        // timeout devuelve un id
        clearTimeout(timeout); // Si se vuelve a ejecutar la función, se reinicia el tiempo de espera
        timeout = setTimeout(later, wait) // Se ejecuta la función later cuando se acabe el tiempo de espera
    }
}

export default debounce;