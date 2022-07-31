import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function TextInputGroup({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    error
}: any) {
  
  return (
    <div className='form-group'>
    <label htmlFor={name}>{label}</label>
    <input type={type} 
    name={name} 
    className={classNames('form-control form-control-lg', {'is-invalid': error})}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
    {error && <div className='is-invalid-feedback text-danger'><strong>{error}</strong></div>}
</div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}
