import { Dimensions } from 'react-native';

const size = {
    XXS: 4,
    XS: 8,
    SM: 12,
    MD: 16,
    LG: 20,
    XL: 24,
    XXL: 32,
    XXXL: 48,
    width: Dimensions.get('window').width
}

const color = {
    white: "#FFF",
    white_alpa: "#FFFFFF50",
    bg_modal: "rgba(0,0,0,0.8)",
    orange: "#ff8500",
}

const font_family = {
    bold : "SFProDisplay-Bold",
    light: "SFProDisplay-Light",
    regular : "SFProDisplay-Regular",
    neon: 'Neon',
}

export {
    size,
    color,
    font_family
}