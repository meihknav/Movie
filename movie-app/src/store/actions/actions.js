export const addItem = (item) => {
    return {
        type : "ADD",
        item : item
    }
}

export const removeItem = (id) => {
    return {
        type : "REMOVE",
        id: id
    }
}