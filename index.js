const data = require('./data.json')

function findCode(node, targetCode) {
    if (node.code === targetCode) {
        return node
    }

    if (node.children) {
        return node.children.find(child => findCode(child, targetCode))
    }
}
function findTarget (targetCode) {
    if (!targetCode) return null

    for (let i = 0; i < data.length; i++) {
        let node = findCode(data[i], targetCode)
        if (node) {
            return node
        }
    }
    return null
}

module.exports = findTarget