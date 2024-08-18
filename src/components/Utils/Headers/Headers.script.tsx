
export default function toggleMenu(
    setStateBtn: React.Dispatch<React.SetStateAction<boolean>>
): void {
    setStateBtn(value => !value)
}