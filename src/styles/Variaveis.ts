import { progressiveClamp } from "../progressive/progressive"

export const breakpoints  = {
    
        mobile: '375px',
        tablet: '768px',
        desktop: '1024px',
        _mobile: '376px',
        _tablet: '769px',
        _desktop: '1024px',
        __mobile: 376,
        __tablet: 769,
        __desktop: 1024,
    
}

export const padding = {
        containerPadding: progressiveClamp(16, 165),
}