import Feature from "../components/feature";
import OptForm from "../components/opt-form";
import HeaderSection from "./header_section";

const HeaderContainer = () => {
  return (
    <HeaderSection>
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <OptForm>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          <OptForm.Break />
          <OptForm.Area>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get started</OptForm.Button>
          </OptForm.Area>
        </OptForm>
      </Feature>
    </HeaderSection>
  );
};

export default HeaderContainer;
