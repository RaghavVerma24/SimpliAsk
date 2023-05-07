var UUID;

export function setUUID(ID) {
    UUID = ID;
    console.log(UUID)
}

export function getUUID() {
    return "Test: " + UUID;
}