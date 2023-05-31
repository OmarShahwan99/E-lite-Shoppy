import React from "react";

const CatDescription = (props) => {
  return (
    <div className="col-span-1">
      <h2 className="uppercase text-xl font-light text-dark tracking-widest">
        <span className="font-bold">{props.marked} </span>
        {props.title}
      </h2>
      <p className="mt-5 text-md text-para leading-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit.
      </p>
    </div>
  );
};

export default CatDescription;
