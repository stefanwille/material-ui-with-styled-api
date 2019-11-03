import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*

  This demo uses the 'makeStyles' API.

*/

const useStyles = makeStyles({
	root: {
		marginLeft: '3rem',
		height: '5rem',
	},

	label: {
		backgroundColor: (props) => props.color || 'red',
		color: 'yellow',
	},
});

export function MakeStylesDemo(props) {
	const classes = useStyles(props);
	return (
		<div>
			<Button variant="contained">Unstyled Button</Button>
			<Button classes={{ root: classes.root, label: classes.label }} variant="contained">
				Button styled with "makeStyles()"
			</Button>
		</div>
	);
}
