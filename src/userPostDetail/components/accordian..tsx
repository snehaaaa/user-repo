import * as React from "react";

interface AccordionInterface {
    isOpen: boolean;
    title: JSX.Element;
    body: JSX.Element;
    classProp?: string;
}

const Accordion: React.SFC<AccordionInterface> = ({
    isOpen,
    title,
    body,
    classProp
}) => (
    <div className={classProp}>
        {title}
        {isOpen && body}
    </div>
);

export default Accordion;
