import PropTypes from 'prop-types';
function Section({ children, title }) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}