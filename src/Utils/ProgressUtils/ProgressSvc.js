const list = new Map();

export function addProgressSetter(key, setter) {
    list.set(key, setter);
}

export function destroyProgressSetter(key) {
    list.delete(key);
}

export function setProgress(key, value) {
    const setter = list.get(key);

    if (setter) {
        setter(value);
    }
}
