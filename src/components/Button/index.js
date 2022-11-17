import * as Styled from './style';

export default function Button({children, bg, bgHover, cl, clHover, bd}) {

    return (
        <Styled.Button 
        border={bd}
        bg={bg} 
        color={cl} 
        
        bgHover={bgHover}
        clHover={clHover}
        >{children}</Styled.Button>
    )
}