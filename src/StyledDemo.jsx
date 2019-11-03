import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*

  This demo uses the 'styled' API as opposed to 'makeStyles'.

*/

const StyledButton = styled(({ myColorProp, ...other }) => <Button {...other} />)({
	marginLeft: '3rem',
	height: '5rem',

	'& .MuiButton-label': {
		backgroundColor: (props) => props.myColorProp || 'red',
		color: 'yellow',
	},
});

export function StyledDemo(props) {
	return (
		<div>
			<Button variant="contained">Unstyled Button</Button>
			<StyledButton myColorProp={props.color} variant="contained">
				Button styled with "styled()"
			</StyledButton>
		</div>
	);
}
