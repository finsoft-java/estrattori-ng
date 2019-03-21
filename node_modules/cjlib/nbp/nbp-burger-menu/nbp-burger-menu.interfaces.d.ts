/**
 * Metodo pubblici esposti dal componente.
 */
export interface INbpBurgerMenu {
    open: () => void;
    close: () => void;
    toggle: () => void;
}
export interface INbpUser {
}
export interface INbpMenu {
    sections: Array<INbpSection>;
}
export interface INbpSection {
    items: Array<INbpItemMenu>;
}
export interface INbpItemMenu {
    key: string;
    icon: string;
    label: string;
    secondLevelMenu?: INbpMenu;
}
