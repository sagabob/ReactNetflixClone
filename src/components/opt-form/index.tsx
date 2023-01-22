import { Area, Break, Button, Container, Input, Text } from "./styles";
import { OptFormButtonProps, OptFormInputProps, OptFormProps, OptFormTextProps } from "./types";

const OptForm = ({ children, ...restProps }: OptFormProps) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Area = ({ children, ...restProps }: OptFormProps) => {
  return <Area {...restProps}>{children}</Area>;
};

OptForm.Text = ({ children, ...restProps }: OptFormTextProps) => {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Input = (props: OptFormInputProps) => {
  return <Input {...props} />;
};

OptForm.Break = () => {
  return <Break />;
};

OptForm.Button = ({ children, ...restProps }: OptFormButtonProps) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

export default OptForm;
