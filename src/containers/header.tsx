import Feature from "../components/feature";
import HeaderSection from "./header_section";

const HeaderContainer = () => {
  return (
    <HeaderSection>
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    </HeaderSection>
  );
};

export default HeaderContainer;
