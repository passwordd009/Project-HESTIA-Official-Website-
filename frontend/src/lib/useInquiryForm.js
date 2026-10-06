import { useState } from 'react';
import { postJSON } from './api';

// Controlled form state + submission to one of the backend's inquiry endpoints.
// Inputs pass their `name`; checkboxes sharing a name collect their values into an array.
export function useInquiryForm(path, initialValues) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function update(e) {
    const { name, value, type, checked } = e.target;
    setValues((prev) => {
      if (type !== 'checkbox') return { ...prev, [name]: value };
      const list = prev[name].filter((v) => v !== value);
      return { ...prev, [name]: checked ? [...list, value] : list };
    });
  }

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await postJSON(path, values);
      setValues(initialValues);
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  }

  return {
    values,
    update,
    submit,
    reset: () => setStatus('idle'),
    sending: status === 'sending',
    sent: status === 'sent',
    error,
  };
}
