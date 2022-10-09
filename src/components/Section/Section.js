import PropTypes from 'prop-types';
import { WrapSection, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <WrapSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </WrapSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
