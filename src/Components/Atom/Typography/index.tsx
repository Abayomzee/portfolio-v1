import React from "react";

interface Props {
  as: any;
  className?: string;
  text?: string;
  id?: string;
  dataAnimate?: string;
  dataCharacter?: string;
  children?: any;
}

const Typography: React.FC<Props> = ({
  as: As,
  className,
  text,
  children,
  id,
  dataAnimate,
  dataCharacter,
}) => {
  return (
    <As
      className={className}
      id={id}
      data-animate={dataAnimate}
      data-char={dataCharacter}
    >
      {text ? text : children}
    </As>
  );
};

export default Typography;
