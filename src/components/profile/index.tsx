
import { Container, Title, List, Item, Picture, Name } from './styles';
import { ProfileContainerProps, ProfileImgProps, ProfileListProps, ProfileTitleProps, ProfileUserProps } from './types';

export default function Profiles({ children, ...restProps }: ProfileContainerProps) {
    return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }: ProfileTitleProps) {
    return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }: ProfileListProps) {
    return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }: ProfileUserProps) {
    return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }: ProfileImgProps) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }: ProfileImgProps) {
    return <Name {...restProps}>{children}</Name>;
};
