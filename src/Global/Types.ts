export type Mode = "dark" | "light"

const MODE_LIST: Array<Mode> = ["dark", "light"]

export const NextMode = (prevMode: Mode): Mode => {
    return MODE_LIST[(MODE_LIST.indexOf(prevMode) + 1) % MODE_LIST.length]
}