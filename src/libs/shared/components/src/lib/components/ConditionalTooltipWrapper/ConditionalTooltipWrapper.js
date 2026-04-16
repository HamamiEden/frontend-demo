// This component is created for rendering tooltips in conditions.
// The purpose of this component is to save double rendering code for tooltip cases and none tooltip cases.
// When a condition is met, the component will render the TooltipComponent that passed with its children.
// If the condition isn't met, the component will render only the children.

// Props:

// condition - The condition that is supposed to determine whether the tooltip needs to be rendered or not.
// Type: Any truthy or falsy variable. bool | string | null | undefined | function

// TooltipComponent - The component that will be rendered as a tooltip.
// Type: node

// tooltipProps - The props that will be passed to the tooltip component.
// Type: object

// children - The content that the tooltip is wrapping.

const ConditionalTooltipWrapper = ({ condition, TooltipComponent, tooltipProps = {}, children }) => {
  if (!condition || !TooltipComponent) return children;

  return <TooltipComponent children={children} {...tooltipProps} />;
};

export default ConditionalTooltipWrapper;
