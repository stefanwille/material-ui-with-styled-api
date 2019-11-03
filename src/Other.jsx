import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		backgroundColor: (props) => props.color || 'red',
	},
});

export default function MyComponent(props) {
	const classes = useStyles(props);
	return <Button className={classes.root}>Huhu</Button>;
}
