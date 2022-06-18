import React from 'react';

import { Answer } from '../../types';
import classes from './End.module.scss';
import Invitation from './Invitation';
import Details from './Details';

type EndProps = {
  answers: { [key in Answer]: number };
  age?: Answer;
  reset: () => void;
};

const End: React.FC<EndProps> = (props) => (
  <div className={classes.container}>
    <Invitation {...props} />
    <hr />
    <Details />
  </div>
);

export default End;