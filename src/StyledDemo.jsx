import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*

  This demo uses the 'styled' API as opposed to 'makeStyles'.
  It seems to be a bit more ergonomic.

*/

const StyledButton = styled(Button)({
	marginLeft: '3rem',
	height: '5rem',

	'& .MuiButton-label': {
		backgroundColor: 'red',
		color: 'yellow',
	},
});

export function StyledDemo() {
	return (
		<div>
			<Button variant="contained">Unstyled Button</Button>
			<StyledButton variant="contained">Button styled with "styled()"</StyledButton>
		</div>
	);
}
