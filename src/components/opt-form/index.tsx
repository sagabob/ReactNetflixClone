import { Area, Break, Button, Container, Input, Text } from "./styles";
import { OptFormButtonProps, OptFormInputProps, OptFormProps, OptFormTextProps } from "./types";

const OptForm = (props: OptFormProps) => {
  return <Container>{props.children}</Container>;
};

OptForm.Area = (props: OptFormProps) => {
  return <Area>{props.children}</Area>;
};

OptForm.Text = (props: OptFormTextProps) => {
  return <Text>{props.children}</Text>;
};

OptForm.Input = (props: OptFormInputProps) => {
  return <Input {...props} />;
};

OptForm.Break = () => {
  return <Break />;
};

OptForm.Button = (props: OptFormButtonProps) => {
  return (
    <Button>
      {props.children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

export default OptForm;
