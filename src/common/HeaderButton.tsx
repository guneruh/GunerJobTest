import React from 'react';

type Props = {
  text: String
}

const HeaderButton = (props: Props) => {

  return (
    <div className="text-4xl text-violet-300">{props.text}</div>
  );
}

export default HeaderButton
