import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = props => <p>Você tem {props.count} favoritos.</p>

Footer.propTypes = {
    count: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    count: state.favorites.length
});

export default connect(mapStateToProps)(Footer);