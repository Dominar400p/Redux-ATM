export function deposit(amount) {
    return ({ type: "DEPOSIT", payload: amount })
};

export function withdraw(amount) {
    return ({ type: "WITHDRAW", payload: amount })
}

export function nameUpdate(name) {
    return ({ type: "NAMEUPDATE", payload: name })
}
export function mobileUpdate(mobile) {
    return ({ type: "MOBILEUPDATE", payload: mobile })
}

export function reset() {
    return ({ type: "RESET" })
}