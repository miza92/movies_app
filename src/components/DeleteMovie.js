import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 30,
  padding: '0 10px',
});

export default function DeleteMovie() {
  return <MyButton><DeleteIcon /></MyButton>;
}