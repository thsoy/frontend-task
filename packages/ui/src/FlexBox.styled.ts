import styled from 'styled-components';
export interface IFlexBox {
	direction?: string;
	width?: string;
	height?: string;
	alignItems?: string;
	justifyContent?: string;
	padding?: string;
	margin?: string;
	maxWidth?: string;
	gap?: string;
	border?: string;
	background?: string;
}

export const FlexBoxContainer = styled.div<IFlexBox>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	width: ${({ width }) => (width ? `${width}` : '100%')};
	${({ height }) => height && `height: ${height}`};
	align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : 'stretch')};
	justify-content: ${({ justifyContent }) => (justifyContent ? `${justifyContent}` : 'stretch')};
	${({ padding }) => padding && `padding: ${padding}`};
	${({ margin }) => margin && `margin: ${margin}`};
	${({ gap }) => gap && `gap: ${gap}`};
	${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
	${({ border }) => border && `border: ${border}`}
	${({ background }) => background && `background: ${background}`}
`;
