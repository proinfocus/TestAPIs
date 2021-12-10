export default class AutoData {
    Save() {        
        event.preventDefault()
        const inputs = document.querySelectorAll("input, select, textarea")
        inputs.forEach(i => {
            if (i.id != undefined)
                window.sessionStorage.setItem(i.id, i.value)            
        })
    }

    Load() {
        const inputs = document.querySelectorAll("input, select, textarea")
        inputs.forEach(i => {
            if (i.id != undefined)
            {
                const data = window.sessionStorage.getItem(i.id)
                if (data != null)
                    i.value = data
            }
        })
    }
}