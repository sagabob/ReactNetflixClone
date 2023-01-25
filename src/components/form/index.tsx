import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles';
import { FormBaseProps, FormButtonProps, FormContainerProps, FormErrorProps, FormInputProps, FormLinkProps, FormTextProps, FormTextSmallProps, FormTitleProps } from './types';

export default function Form({ children, ...restProps }: FormContainerProps) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }: FormErrorProps) {
    return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }: FormBaseProps) {
    return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }: FormTitleProps) {
    return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: FormTextProps) {
    return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }: FormTextSmallProps) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, to, ...restProps }: FormLinkProps) {
    return <Link to={to} {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }: FormInputProps) {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }: FormButtonProps) {
    return <Submit {...restProps}>{children}</Submit>;
};
