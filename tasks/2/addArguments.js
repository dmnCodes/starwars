export default function(...args) {
    return args.reduce((previousValue, currentValue) => {
        return parseInt(previousValue) + parseInt(currentValue)
    })
}